// Stacks and Queues
// Stack Min
// How would you design a stack which, in addition to push and pop, has a function min which returns the minimum element? Push, pop, and min should all operate in O(1) time


// Stack
let LinkedList = function(value) {
  this.value = value;
  this.next = null;
};

let Stack = function() {
  this.top = null;
};

Stack.prototype.push = function(value) {
  let node = new LinkedList(value);
  node.next = this.top;
  this.top = node;
};

Stack.prototype.pop = function() {
  let popped = this.pop;
  if (this.top !== null) {
    this.top = this.top.next;
  }
  return popped.value;
};

Stack.prototype.peek = function() {
  return this.top === null ? this.top.value : null;
};

Stack.prototype.isEmpty = function() {
  return this.top === null;
};
// Stack End

var stackMin = function() {
  this.stack = new Stack();
  this.minStack = new Stack();
  this.currMin = undefined;
};

stackMin.prototype.push = function(value) {
  if (this.currmin === undefined || value <= this.currMin) {
    this.minStack.push(this.currMin);
    this.currMin = value;
  }
  this.stack.push(value);
}

stackMin.prototype.pop = function() {
  let answer = this.stack.pop();
  if (answer === this.currMin) {
    this.currMin = this.minStack.pop();
  }
  return answer;
}

stackMin.prototype.peek = function() {
  return this.stack.peek();
}

stackMin.prototype.isEmpty = function() {
  return this.stack.isEmtpy();
};

stackMin.prototype.min = function () {
  return this.currMin;
}