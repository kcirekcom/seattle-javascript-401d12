'use strict';

const SLL = require('./singly-linked-list.js');
module.exports = Queue;

function Node(val) {
  this.val = val;
  this.next = null;
}

function Queue() {
  this.sll = new SLL();
}

Queue.prototype.enqueue = function(something) {
  let node = new Node(something);

  if (!this.head) {
    this.head = node;
    this.tail = node;
    return;
  }

  this.tail.next = node;
  this.tail = node;

  return;
};

Queue.prototype.dequeue = function() {
  if (this.head) {
    let current = this.head;
    this.head = current.next;
    return current.val;
  }
};
