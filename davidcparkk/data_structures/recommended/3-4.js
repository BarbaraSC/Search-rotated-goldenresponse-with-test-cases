// Stacks and Queues
// Queue via Stacks
// Implement a MyQueue class which implements a queue using two stacks

let LinkedList = function(value){
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
  let popped = this.top;
  if (this.top !== null) {
    this.top = this.top.next;
  }
  return popped.value;
}

Stack.prototype.peek = function() {
  return this.top !== null ? this.top.value : null;
};

Stack.prototype.isEmpty = function() {
  return this.top === null;
};

let myQueue = function() {
  this.front = new Stack();
  this.back = new Stack();
  this.backUp = true;
};

myQueue.prototype.add = function(value) {
  if (!this.backUp) {
    while (!this.front.isEmpty()) {
      this.back.push(this.front.pop());
    }
    this.backUp = true;
  }
  this.back.push(value);
};

myQueue.prototype.remove = function() {
  if (this.backUp) {
    while(!this.back.isEmpty()) {
      this.front.push(this.back.pop());
    }
    this.backUp = false;
  }
  return this.front.pop();
};

myQueue.prototype.peek = function() {
  if (this.backUp) {
    while(!this.back.isEmpty()) {
      this.front.push(this.back.pop());
    }
    this.backUp = false;
  }
  return this.front.peek();
};

myQueue.prototype.isEmpty = function() {
  return this.front.isEmpty() && this.back.isEmpty();
};

let m = newMyQueue();
console.log(m.isEmpty(), true);
