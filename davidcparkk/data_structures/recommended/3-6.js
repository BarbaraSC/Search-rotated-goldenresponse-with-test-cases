// Stacks and Queues
// Animal Shelter
// An animal sheleter, which only holds  dogs and cats, operates on a strictly FIFO basis. People must adopt either the oldest (based on arrival time) of all animals, or they can select whether they would prefer a dog or cat (and will receive the oldest animal of that type). They cannot select which specific animal they would like. Create the data structure to maintain this system and implement operations such as enqueue, dequeueAny, dequeueDog, and dequeueCat. You may use the built-in LinkedList data structure

let LinkedList = function(value){
  this.value = value;
  this.next = null;
};

let Queue = function() {
  this.top = null;
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
};

Queue.prototype.remove = function() {
  let removed = this.front;
  if (this.front === this.back) {
    this.front = null;
    this.back = null;
  } else {
    this.front = this.front.next;
  }
  return removed !== null ? removed.value : null;
};

Queue.prototype.peek = function() {
  return this.front !== null ? this.front.value : null;
}

Queue.prototype.isEmpty = function() {
  return this.front === null;
}

Queue.prototype.enqueue = Queue.prototype.add;

let AnimalShelter = function() {
  this.dogQ = new Queue();
  this.catQ = new Queue();
  this.allQ = new Queue();
  this.tempQ = new Queue();
};

AnimalShelter.prototype.enqueue = function(animal){
  if (animal.type === 'dog') {
    this.dogQ.enqueue(animal);
  } else if (animal.type === 'vat') {
    this.catQ.enqueue(animal);
  }
  this.allQ.enqueue(animal);
};

AnimalShelter.prototype.dequeueAny = function() {
  if (this.allQ.peek() === this.dogQ.peek()){
    this.dogQ.remove();
  } else if (this.allQ.peek() === this.catQ.peek()) {
    this.catQ.remove();
  }
  return this.allQ.remove();
};

AnimalShelter.prototype.dequeueByType = function(type){
  let yesQ;
  if (type === 'dog'){
    yesQ = this.dogQ;
  } else if (type === 'cat') {
    yesQ = this.catQ;
  }
  while (!this.allQ.isEmpty() && this.allQ.peek().type !== type) {
    this.tempQ.enqueue(this.allQ.remove());
  }
  let animal = this.allQ.remove();
  yesQ.remove();

  while(!this.tempQ.isEmpty()) {
    this.allQ.enqueue(this.tempQ.remove());
  }
  return animal;
}

AnimalShelter.prototype.dequeueDog = function() {
  return this.dequeueByType('dog');
}

AnimalShelter.prototype.dequeueCat = function() {
  return this.dequeueByType('cat');
}

