// Stacks and Queues
// Stack of Plates
// Imagine a stack of plates. If the stack gets too high, it might topple. Therefore, in real life, we could likely start a new stack when the previous stack exceeds some threshold. Implement a data structure SetOfStacks that mimics this. SetOfStacks should be composed of several stacks and should create a new stack one the previous one exceeds capacity. SetOfStacks.push() and SetOfStacks.pop() should behave identically to a single stack (that is, pop() should return the same values as it would if there were just a single stack).
// Implement a function popAt(int index) which performs a pop operation on a specific sub-stack.

let SetOfStacks = function(capacity) {
  this.capacity = capacity;
  this.stackSet = [];
};

SetOfStacks.prototype.push = function(value) {
  if (this.stackSet.length === 0 || this.stackSet[this.stackSet.length - 1].length === this.capacity) {
    let newStack = [];
    newStack.push(value);
    this.stackSet.push(newStack);
  } else {
    this.stackSet[this.stackSet.length - 1].push(value);
  }
};

SetOfStacks.prototype.pop = function() {
  if (this.numStack === 0) {
    return undefined;
  } else if (this.stackSet[this.stackSet.length - 1].length === 0) {
    this.stackSet.pop();
  }
  return this.stackSet[this.stackSet.length - 1].pop();
}

SetOfStacks.prototype.peek = function() {
  let currStack = this.stackSet[this.stackSet.length - 1];
  return currStack[currStack.length - 1];
};

SetOfStacks.prototype.isEmpty = function() {
  return this.stackSet.length === 0;
};

SetOfStacks.prototype.popAt = function(index) {
  return this.stackSet[index].pop();
};