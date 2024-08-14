"use strict";
class LinkedListNode {
    constructor(value) {
        this.previous = null;
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    addAtBegin(value) {
        const newNode = new LinkedListNode(value);
        if (!this.head) {
            this.head = newNode;
        }
        else {
            this.head.previous = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
    }
    addAtEnd(value) {
        const newNode = new LinkedListNode(value);
        if (!this.head) {
            this.head = newNode;
        }
        else {
            const lastNode = this.getLast(this.head);
            newNode.previous = lastNode;
            lastNode.next = newNode;
        }
        this.size++;
    }
    deleteNode(node) {
        if (!node.previous) {
            this.head = node.next;
        }
        else {
            const prevnode = node.previous;
            prevnode.next = node.next;
        }
        this.size--;
    }
    traverse() {
        const arr = [];
        if (!this.head) {
            return arr;
        }
        const addToArr = (node) => {
            arr.push(node.value);
            return node.next ? addToArr(node.next) : arr;
        };
        return addToArr(this.head);
    }
    getLast(node) {
        return node.next ? this.getLast(node.next) : node;
    }
    getSize() {
        return this.size;
    }
}
var linkedlist = new LinkedList();
linkedlist.addAtEnd(5);
linkedlist.addAtBegin(1);
linkedlist.addAtEnd(3);
var arr = linkedlist.traverse();
console.log(arr);
linkedlist;
console.log(linkedlist);
