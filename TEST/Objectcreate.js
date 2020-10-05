// 模拟 Object.create
function create(proto) {
  function F() {}
  F.prototype = proto

  return new F()
}
