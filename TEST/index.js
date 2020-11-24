var printTree = function (nodeList) {
    var generateOutput = function (parentID, level, ident) {
        if (ident === void 0) { ident = ' '; }
        var children = nodeList.filter(function (node) { return node.parentID === parentID; });
        if (!children.length) {
            return '';
        }
        return children.reduce(function (o, node) {
            return "" + o + (ident.repeat(level) + node.name) + "\n" + generateOutput(node.id, level + 1);
        }, '');
    };
    var output = generateOutput('0', 0);
    console.log(output);
};
var array = [
    { id: '1', parentID: '0', name: 'AA' },
    { id: '2', parentID: '1', name: 'BB' },
    { id: '3', parentID: '1', name: 'CC' },
    { id: '4', parentID: '3', name: 'DD' },
    { id: '5', parentID: '3', name: 'EE' },
    { id: '6', parentID: '2', name: 'FF' },
    { id: '7', parentID: '2', name: 'GG' },
    { id: '8', parentID: '4', name: 'HH' },
    { id: '9', parentID: '5', name: 'II' },
];
printTree(array);
