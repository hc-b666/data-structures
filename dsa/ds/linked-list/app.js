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
    get(index) {
        const values = this.traverse();
        return values[index];
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
    addAtTail(value) {
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
    deleteAtIndex(index) {
        var _a;
        if (index < 0 || index >= this.size) {
            return;
        }
        if (!this.head) {
            return;
        }
        let current = this.head;
        if (index === 0) {
            this.head = current.next;
        }
        else {
            for (let i = 0; i < index - 1; i++) {
                current = current.next;
            }
            current.next = (_a = current.next) === null || _a === void 0 ? void 0 : _a.next;
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
