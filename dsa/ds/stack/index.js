
// LIFO - Last In First Out
// FILO - First In Last Out

class Stack {
  constructor() {
    this.elements = [];
  }

  push(element) {
    this.elements.push(element);
  }

  pop() {
    if (this.isEmpty()) return "Stack is empty";
    return this.elements.pop();
  }

  peek() {
    if (this.isEmpty()) return "Stack is empty";
    return this.elements[this.elements.length - 1];
  }

  isEmpty() {
    return this.elements.length === 0;
  }

  size() {
    return this.elements.length;
  }
}

