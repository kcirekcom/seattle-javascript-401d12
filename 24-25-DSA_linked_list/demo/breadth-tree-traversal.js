const Queue = require('./queue.js');

module.exports = Tree;

function Tree(val) {
  this.val = val;
  this.children = [];
  this.checkTree = [];
}

Tree.prototype.print = function() {
  let q = new Queue();
  if (!this.val) {
    return;
  }

  q.enqueue(this);

  while (q.head) {
    let node = q.dequeue();
    console.log(node.val);
    this.checkTree.push(node.val);

    for (var i = 0; i < node.children.length; i++) {
      q.enqueue(node.children[i]);
    }
  }
};
