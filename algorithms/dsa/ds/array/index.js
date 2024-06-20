

class Arrayyy {
  constructor() {
    this.elements = [];
    this.size = 0;
  }

  insertElement(element, position = this.size) {
    var i = this.size - 1;
    for (i; i >= position; i--) {
      this.elements[i + 1] = this.elements[i];
    }
    this.elements[position] = element;
    this.size++;
  }

  findElement(key) {
    for (var i = 0; i < this.size; i++) {
      if (this.elements[i] === key) {
        return { message: "Found", index: i, status: true };
      } 
    }
    return { message: "Not Found", index: -1, status: false };
  }

  deleteElement(key) {
    let pos = this.findElement(key);
    
    if (pos.status === false) return pos.message; 
  
    for (var i = pos.index; i < this.size - 1; i++) { 
      this.elements[i] = this.elements[i + 1];
    }
    this.elements.pop(); 
    this.size--;

    return { message: "Deleted", length: this.size };
  }

}


let arr = new Arrayyy();
arr.insertElement(1);
arr.insertElement(2);
arr.insertElement(3);
arr.insertElement("helo")
arr.insertElement(5)
arr.insertElement(4, 1);

console.log(arr.size)
console.log(arr.deleteElement(3))
console.log(arr.size)
