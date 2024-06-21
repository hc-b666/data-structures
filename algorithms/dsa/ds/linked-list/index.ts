

class LinkedListNode<T> {
  data: T;
  next: LinkedListNode<T> | null = null;

  constructor(data: T) {
    this.data = data;
  }
}



class LinkedList<T> {
  head: LinkedListNode<T> | null = null;
  tail: LinkedListNode<T> | null = null;
  size: number = 0;

  add(data: T): void {
    var newLinkedListNode = new LinkedListNode(data);
    if (!this.head) {
      this.head = newLinkedListNode;
      this.tail = newLinkedListNode;
    } else {
      if (this.tail) {
        this.tail.next = newLinkedListNode;
        this.tail = newLinkedListNode;
      }
    }
    this.size++;
  }
}

let list = new LinkedList();
list.add("1");
list.add("3");
list.add("5")


console.log(list.head?.next)

