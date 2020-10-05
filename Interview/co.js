function co(gen) {
  // 保持当前函数的上下文
  let ctx = this
  // 截取co输入的参数，剔除arguments中的第一个参数，即gen对象，剩余参数作为gen的入参
  let args = [].slice.call(arguments, 1)

  // 返回一个Promise对象，即最外围Promise对象
  return new Promise(function (resolve, reject) {
    // 判断传入的gen是否为函数，若是则执行，将结果赋值给gen对象
    // 若不是，则不执行
    if (typeof gen === 'function') gen = gen.apply(ctx, args)
    // 根据generator函数执行结果是否存在next字段，判断gen是否为generator迭代器对象
    // 若不是，则调用resolve返回最外围Promise对象的状态
    if (!gen || typeof gen.next !== 'function') return resolve(gen)

    // 若是generator迭代器对象，开始控制gen.next()方法的调用
    onFulfilled()

    // 两个用途
    // 一、generator函数的执行入口
    // 二、当做所有内部Promise对象的resolve方法，处理异步结果，并继续调用下一个Promise
    function onFulfilled(res) {
      let ret
      try {
        // gen运行至yield处被挂起，开始处理异步操作，并将异步操作的结果返回给ret.value
        ret = gen.next(res)
      } catch (e) {
        // 若报错，直接调用reject返回外围Promise对象的状态，并传出错误对象
        return reject(e)
      }
      // 将gen.next的执行结果传入next函数，实现依次串行调用gen.next方法
      next(ret)
      return null
    }

    // 当做所有内部Promise对象的reject方法，处理异步结果，并继续调用下一个Promise
    function onRejected(err) {
      let ret
      try {
        ret = gen.throw(err)
      } catch (e) {
        // 若报错，直接调用reject返回外围Promise对象的状态，并传出错误对象
        return reject(e)
      }
      // 将gen.throw的执行结果传入next函数，实现依次串行调用gen.next方法
      next(ret)
    }

    // 实现串行调用gen.next的核心
    function next(ret) {
      // 判断内部Promise是否全部执行完毕
      // 若执行完毕，直接调用resolve改变外围Promise的状态，并返回最终的return值[问题3]
      if (ret.done) return resolve(ret.value)
      // 若未执行完毕，调用toPromise方法将上一个Promise返回的值转化为Promise对象
      // 具体参见toPromise方法
      let value = toPromise.call(ctx, ret.value)
      // 根据value转化后的Promise对象的两个状态，执行下一个next方法
      if (value && isPromise(value)) return value.then(onFulfilled, onRejected)
      // 抛出不符合转化规则的类型的值
      return onRejected(new TypeError(`${'You may only yield a function, promise, generator, array, or object, ' +
        'but the following object was passed: "'}${String(ret.value)}"`))
    }
  })
}

function toPromise(obj) {
  // 确保obj有意义
  if (!obj) return obj
  // 若是Promise对象，则直接返回
  if (isPromise(obj)) return obj
  // 若是generator函数或者generator对象，则传入一个新的co，并返回新co的外围Promise
  // 作为当前co的内部Promise，这样实现多层级调用
  if (isGeneratorFunction(obj) || isGenerator(obj)) return co.call(this, obj)
  // 若是函数，则返回thunk规范的函数
  if (typeof obj == 'function') return thunkToPromise.call(this, obj)
  // 若是数组，把数组中每个元素转化为内部Promise，返回Promise.all并行运算
  if (Array.isArray(obj)) return arrayToPromise.call(this, obj)
  // 若是对象，遍历对象中的每个key对应的value，转化成Promise.all并行运算
  if (isObject(obj)) return objectToPromise.call(this, obj)
  return obj
}

function thunkToPromise(fn) {
let ctx = this
return new Promise(function (resolve, reject) {
  fn.call(ctx, function (err, res) {
    if (err) return reject(err)
    if (arguments.length > 2) res = slice.call(arguments, 1)
    resolve(res)
  })
})
}

function arrayToPromise(obj) {
  // Array.map并行计算返回每一个元素的Promise
  return Promise.all(obj.map(toPromise, this))
}

function objectToPromise(obj) {
let results = new obj.constructor()
let keys = Object.keys(obj)
let promises = []
for (let i = 0; i < keys.length; i++) {
  let key = keys[i]
  let promise = toPromise.call(this, obj[key])
  if (promise && isPromise(promise)) defer(promise, key)
  else results[key] = obj[key]
}
// Promise链式调用，后续的then能偶获取此处的results
return Promise.all(promises).then(function () {
  return results
})

function defer(promise, key) {
  // key对应的元素成功转化为Promise对象后，构造这些Promise的resovle方法
  // 以便在results中获取每个Promise对象成功执行后结果
  results[key] = undefined
  promises.push(promise.then(function (res) {
    results[key] = res
  }))
}
}
