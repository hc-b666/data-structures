
// My own simple array in typescript xD
// In this array you cannot store different types of data like [1, "hi", true]

type FindReturn = { message: string; index: number; status: boolean }
type DeleteReturn = { message: string; length: number }

interface ArrayyInterface<T> {
  elements: T[];
  size: number;
  insert(element: T, position: number): void;
  find(key: T): FindReturn;
  delete(key: T): FindReturn | DeleteReturn;
}

class Arrayy<T> implements ArrayyInterface<T> {
  public elements: T[];
  public size: number;

  constructor() {
    this.elements = [];
    this.size = 0;
  }

  insert(element: T, position: number = this.size ): void {
    var i = this.size - 1;
    for (i; i >= position; i--) {
      this.elements[i + 1] = this.elements[i];
    }
    this.elements[position] = element;
    this.size++;
  }

  find(key: T): FindReturn {
    for(var i = 0; i < this.size; i++) {
      if (this.elements[i] === key) {
        return { message: "Found", index: i, status: true };
      }
    }
    return { message: "Not Found", index: -1, status: false };
  }

  delete(key: T): FindReturn | DeleteReturn {
    let pos = this.find(key);

    if (pos.status === false) {
      return pos;
    }

    for (var i = pos.index; i < this.size - 1; i++) {
      this.elements[i] = this.elements[i + 1];
    }
    this.elements.pop();
    this.size--;

    return { message: "Deleted", length: this.size };
  }
}


