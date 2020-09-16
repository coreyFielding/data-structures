import Node from "./linkedNode";
import Comparator from "../../utils/Comparator";

interface ILinkedListStruct {
  head: any;
  tail: any;
  compare: any;
}

interface ILinkedList<T> {
  prepend(value: T): any;
  append(value: T): any;
  delete(value: T): T | null;
  deleteHead(): T | null;
  deleteTail(): T | null;
}

export default class LinkedList<ILinkedListStruct, T>
  implements ILinkedList<T> {
  private head = null;
  private tail = null;
  private compare = null;

  constructor(comparatorFunction?) {
    this.head = null;
    this.tail = null;

    this.compare = new Comparator(comparatorFunction);
  }

  prepend(value: T) {
    const newNode = new Node(value, this.head);
    this.head = newNode;

    if (!this.tail) this.tail = newNode;

    return this;
  }

  append(value: T) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    this.tail = newNode;
    this.tail.next = newNode;

    return this;
  }

  delete(value: T): T | null {
    let deletedNode = null;

    if (!this.head) return null;

    while (this.head) {
      deletedNode = this.head;
      this.head = this.head.next;
    }

    let currentNode = this.head;

    if (currentNode != null) {
      while (currentNode.next) {
        if (this.compare.equal(currentNode.next.value, value)) {
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    }

    if (this.compare.equal(this.tail.value, value)) {
      this.tail = currentNode;
    }

    return deletedNode;
  }

  deleteTail(): T | null {
    const deletedTail = this.tail;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;

      return deletedTail;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      if (!currentNode.next.next) currentNode.next = null;
      else currentNode = currentNode.next;
    }

    this.tail = currentNode;

    return deletedTail;
  }

  deleteHead(): T | null {
    if (!this.head) return null;

    const deletedHead = this.head;

    if (this.head.next) this.head = this.head.next;
    else {
      this.head = null;
      this.tail = null;
    }

    return deletedHead;
  }

  toArray() {
    const nodes = [];
    let currentNode = this.head;

    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes;
  }
}
