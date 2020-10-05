let findKthLargest = function (nums, k) {
  // 从 nums 中取出前 k 个数，构建一个小顶堆
  let heap = [,], i = 0
  while (i < k) {
    heap.push(nums[i++])
  }
  buildHeap(heap, k)

  // 从 k 位开始遍历数组
  for (let i = k; i < nums.length; i++) {
    if (heap[1] < nums[i]) {
      // 替换并堆化
      heap[1] = nums[i]
      heapify(heap, k, 1)
    }
  }

  // 返回堆顶元素
  return heap[1]
};

// 原地建堆，从后往前，自上而下式建小顶堆
let buildHeap = (arr, k) => {
  if (k === 1) return
  // 从最后一个非叶子节点开始，自上而下式堆化
  for (let i = Math.floor(k / 2); i >= 1; i--) {
    heapify(arr, k, i)
  }
}

// 堆化
let heapify = (arr, k, i) => {
  // 自上而下式堆化
  while (true) {
    let minIndex = i
    if (2 * i <= k && arr[2 * i] < arr[i]) {
      minIndex = 2 * i
    }
    if (2 * i + 1 <= k && arr[2 * i + 1] < arr[minIndex]) {
      minIndex = 2 * i + 1
    }
    if (minIndex !== i) {
      swap(arr, i, minIndex)
      i = minIndex
    } else {
      break
    }
  }
}

// 交换
let swap = (arr, i, j) => {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}


var reverseList = function (head) {
  let [prev, curr] = [null, head];
  while (curr) {
    let tmp = curr.next;    // 1. 临时存储当前指针后续内容
    curr.next = prev;       // 2. 反转链表
    prev = curr;            // 3. 接收反转结果
    curr = tmp;             // 4. 接回临时存储的后续内容
  }
  return prev;
};


function debounce(fn, delay, scope) {
  let timer = null;
  // 返回函数对debounce作用域形成闭包
  return function () {
    // setTimeout()中用到函数环境总是window,故需要当前环境的副本；
    let context = scope || this, args = arguments;
    // 如果事件被触发，清除timer并重新开始计时
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  }
}

function debounce(fn, delay, scope) {
  let timer = null
  return function () {
    const context = scope || this
    const args = arguments
    clearTimeout(timer)
    timer = setTimeout(function () {
      fn.apply(context, args)
    }, delay)
  }
}

function throttle(fn, threshold, scope) {
  let timer;
  let prev = Date.now();
  return function () {
    let context = scope || this, args = arguments;
    let now = Date.now();
    if (now - prev > threshold) {
      prev = now;
      fn.apply(context, args);
    }
  }
}


function throttle2(fn, threshold, scope) {
  let timer;
  return function () {
    let context = scope || this, args = arguments;
    if (!timer) {
      timer = setTimeout(function () {
        fn.apply(context, args);
        timer = null;
      }, threshold)
    }
  }
}

const jsonp = function (url, data) {
  return new Promise((resolve, reject) => {
    // 初始化url
    let dataString = url.indexOf('?') === -1 ? '?' : '&'
    let callbackName = `jsonpCB_${Date.now()}`
    url += `${dataString}callback=${callbackName}`
    if (data) {
      // 有请求参数，依次添加到url
      for (let k in data) {
        url += `&${k}=${data[k]}`
      }
    }
    let jsNode = document.createElement('script')
    jsNode.src = url
    // 触发callback，触发后删除js标签和绑定在window上的callback
    window[callbackName] = result => {
      delete window[callbackName]
      document.body.removeChild(jsNode)
      if (result) {
        resolve(result)
      } else {
        reject('没有返回数据')
      }
    }
    // js加载异常的情况
    jsNode.addEventListener('error', () => {
      delete window[callbackName]
      document.body.removeChild(jsNode)
      reject('JavaScript资源加载失败')
    }, false)
    // 添加js节点到document上时，开始请求
    document.body.appendChild(jsNode)
  })
}
jsonp('http://192.168.0.103:8081/jsonp', { a: 1, b: 'heiheihei' })
  .then(result => { console.log(result) })
  .catch(err => { console.error(err) })


var findKthNumber = function (n, k) {
  let getCount = (prefix, n) => {
    let count = 0;
    for (let cur = prefix, next = prefix + 1; cur <= n; cur *= 10, next *= 10)
      count += Math.min(next, n + 1) - cur;
    return count;
  }
  let p = 1;
  let prefix = 1;
  while (p < k) {
    let count = getCount(prefix, n);
    if (p + count > k) {
      prefix *= 10;
      p++;
    } else if (p + count <= k) {
      prefix++;
      p += count;
    }
  }
  return prefix;
};


const findKthNumber = (n, k) => {
  const getCount = (prefix, n) => {
    let count = 0;
    for (let cur = prefix, next = prefix + 1; cur <= n; cur *= 10, next *= 10) {
      count += Math.min(next, n + 1) - cur
    }
    return count
  }

  let p = 1
  let prefix = 1
  while (p < k) {
    const count = getCount(prefix, n)
    if (p + count > k) {
      prefix *= 10
      p++
    } else if (p + count <= k) {
      prefix++
      p += count
    }
  }
  return prefix
}
