const Tree = require('./breadth-tree-traversal.js');

let a = new Tree('A');
let b = new Tree('B');
let c = new Tree('C');
let d = new Tree('D');
let e = new Tree('E');
let f = new Tree('F');

a.children.push(b, c);
b.children.push(d);
c.children.push(e, f);

a.print();

console.assert(a.checkTree.toString() == ['A', 'B', 'C', 'D', 'E', 'F'], 'not equal');

console.log('tests passed!');
