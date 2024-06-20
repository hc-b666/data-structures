

class Arrayyy {
  constructor() {
    this.elements = [];
    this.size = 0;
  }

  insertElement(element, position = this.elements.length) {
    var i = this.elements.length - 1;
    for (i; i >= position; i--) {
      this.elements[i + 1] = this.elements[i];
    }
    this.elements[position] = element;
    this.size++;
  }

  findElement(key) {
    for (var i = 0; i < this.elements.length; i++) {
      if (this.elements[i] === key) return { message: "Found", index: i, status: true };
    }
    return { message: "Not Found", index: -1, status: false };
  }

  deleteElement(key) {
    let pos = this.findElement(key);
    
    if (pos.status === false) return pos.message; 
  
    for (var i = pos.index; i < this.elements.length - 1; i++) { 
      this.elements[i] = this.elements[i + 1];
    }
    this.elements.pop(); 
  
    return { message: "Deleted", length: this.elements.length };
  }

}


let arr = new Arrayyy();
arr.insertElement(1);
arr.insertElement(2);
arr.insertElement(3);
arr.insertElement("helo")
arr.insertElement(5)
arr.insertElement(4, 1);

console.log(arr.findElement("helo"))
console.log(arr.findElement(100))
console.log(arr.elements)
console.log(arr.deleteElement(3))
console.log(arr.elements)
