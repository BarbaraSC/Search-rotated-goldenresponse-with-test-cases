import LinkedList from './LinkedList';

let Queue = function() {
  this.front = null
  this.back = null;
};

Queue.prototype.add = function(value) {
  let node = new LinkedList(value);
  if (this.front === null) {
    this.front = node;
    this.back = node;
  } else {
    let prevBack = this.back;
    this.back = node;
    prevBack.next = this.back;
  }
}

Queue.prototype.remove = function() {
  let removed = this.front;
  if (this.front === this.back) {
    this.front = null;
    this.back = null;
  } else {
    this.front = this.front.next;
  }
  return removed !== null ? removed.value : null;
}

Queue.prototype.peek = function() {
  return this.front !== null ? this.front.value : null;
};

Queue.prototype.isEmpty = function() {
  return this.front === null;
};

export default Queue;
