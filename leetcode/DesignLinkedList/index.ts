class LinkedListNode {
  public previous: LinkedListNode | null;
  public value: number;
  public next: LinkedListNode | null;

  constructor(value: number) {
    this.previous = null;
    this.value = value;
    this.next = null;
  }
}

class MyLinkedList {
  public head: LinkedListNode | null = null;
  public tail: LinkedListNode | null = null;
  private size: number = 0;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  get(index: number): number {
    if (index < 0 || index >= this.size) {
      return -1;
    }

    if (!this.head) {
      return -1;
    }

    const values = this.traverse();
    return values[index];
  }

  addAtHead(val: number): void {
    const newNode = new LinkedListNode(val);

    if (!this.head) {
      this.head = newNode;
    } else {
      this.head.previous = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.size++;
  }

  addAtTail(val: number): void {
    const newNode = new LinkedListNode(val);

    if (!this.head) {
      this.head = newNode;
    } else {
      const lastNode = this.getLast(this.head);
      newNode.previous = lastNode;
      lastNode.next = newNode;
    }

    this.size++;
  }

  addAtIndex(index: number, val: number): void {
    if (index < 0 || index > this.size) {
      return;
    }

    if (index === 0) {
      this.addAtHead(val);
    } else {
      let current = this.head;

      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }

      let newnode = new LinkedListNode(val);
      newnode.next = current.next;
      current.next = newnode;

      this.size++;
    }
  }

  deleteAtIndex(index: number): void {
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

  public traverse(): number[] {
    const arr: number[] = [];
    if (!this.head) {
      return arr;
    }

    const addToArr = (node: LinkedListNode): number[] => {
      arr.push(node.value);
      return node.next ? addToArr(node.next) : arr;
    };

    return addToArr(this.head);
  }

  private getLast(node: LinkedListNode): LinkedListNode {
    return node.next ? this.getLast(node.next) : node;
  }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
