/**
 * Write a stack class. Once you're done,
 * implement a queue using two stacks.
 */
 class Stack {
  constructor() {
    this.storage = [];
  }
  add(value) {
    this.storage.push(value);
  }
  remove() {
    return this.storage.pop();
  }
  get size() {
    return this.storage.length;
  }
}

const stack = new Stack();
const queue = new Stack();
stack.add(1);
stack.add(2);
stack.add(3);
stack.add(4);
for (let i = 0; i < 4; i++) {
  queue.add(stack.remove());
}
for (let i = 0; i < 4; i++) {
  console.log(queue.remove());
}
