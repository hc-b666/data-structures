

class Queue {
  constructor(size) {
    this.elements = [];
    this.size = size; 
  }

  enqueue(element) {
    this.elements.push(element);4
  }

  dequeue() {
    if (this.isEmpty()) return "Queue is empty";
    return this.elements.shift();
  }

  peek() {
    if (this.isEmpty()) return "Queue is empty";
    return this.elements[0];
  }

  isEmpty() {
    return this.elements.length === 0;
  }

  isFull() {
    return this.elements.length === this.size;
  }

}


