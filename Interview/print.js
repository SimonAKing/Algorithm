var walk = function (node, isOver, callback) {
    if (!node) {
        return;
    }
    if (isOver(node)) {
        callback(node);
        return;
    }
    Array.from(node.children).forEach(function (el) { return walk(el, isOver, callback); });
    callback(node);
};
var print = function (root) {
    var isOver = function (node) { return !node.children.length; };
    var callback = function (node) { return console.log(node.tagName); };
    walk(root, isOver, callback);
};
