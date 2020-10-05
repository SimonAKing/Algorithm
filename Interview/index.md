#### 数组乱序算法 Fisher–Yates

```js
function shuffle(arr) {
    let m = arr.length;
    while (m > 1){
        let index = Math.floor(Math.random() * m--);
        [arr[m] , arr[index]] = [arr[index] , arr[m]]
    }
    return arr;
}

// or
arr.sort(() =>Math.random() - 0.5);
```

#### Curry

```js
function curry(fn) {
	return function _(...args) {
		if (args.length >= fn.length) {
			return fn(...args)
		}
		return _.bind(this, ...args)
	}
}

const add = (a, b, c) => a + b + c

const curryAdd = curry(add)

const r = curryAdd(1)(2)(3)
console.log(r)
```
