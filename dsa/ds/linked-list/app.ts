class LinkedListNode<T> {
  public previous: LinkedListNode<T> | null;
  public value: T;
  public next: LinkedListNode<T> | null;

  constructor(value: T) {
    this.previous = null;
    this.value = value;
    this.next = null;
  }
}

class LinkedList<T> {
  public head: LinkedListNode<T> | null = null;
  public tail: LinkedListNode<T> | null = null;
  private size: number = 0;

  public get(index: number): T {
    const values = this.traverse();
    return values[index];
  }

  public addAtBegin(value: T): void {
    const newNode = new LinkedListNode(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      this.head.previous = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.size++;
  }

  public addAtTail(value: T): void {
    const newNode = new LinkedListNode(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      const lastNode = this.getLast(this.head);
      newNode.previous = lastNode;
      lastNode.next = newNode;
    }

    this.size++;
  }

  public deleteNode(node: LinkedListNode<T>): void {
    if (!node.previous) {
      this.head = node.next;
    } else {
      const prevnode = node.previous;
      prevnode.next = node.next;
    }

    this.size--;
  }

  public deleteAtIndex(index: number): LinkedListNode<T> | void {
    if (index < 0 || index >= this.size) {
      return;
    }

    if (!this.head) {
      return;
    }

    let current = this.head;

    if (index === 0) {
      this.head = current.next;
    } else {
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }

      current.next = current.next?.next;
    }

    this.size--;
  }

  public traverse(): T[] {
    const arr: T[] = [];
    if (!this.head) {
      return arr;
    }

    const addToArr = (node: LinkedListNode<T>): T[] => {
      arr.push(node.value);
      return node.next ? addToArr(node.next) : arr;
    };

    return addToArr(this.head);
  }

  private getLast(node: LinkedListNode<T>): LinkedListNode<T> {
    return node.next ? this.getLast(node.next) : node;
  }

  public getSize(): number {
    return this.size;
  }
}
