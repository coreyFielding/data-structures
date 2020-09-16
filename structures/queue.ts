import LinkedList from "../structures/linked-list/linked-list";

// Queue structure - Primary focus on the start (HEAD) and end (TAIL),
// performing enqueue (push) and dequeue (pop) operations accordingly.

export default class Queue {
  private linkedList = null;
  constructor() {
    this.linkedList = new LinkedList();
  }

  isEmpty() {
    return !this.linkedList.head;
  }

  peek() {
    if (!this.linkedList.head) return null;

    return this.linkedList.head.value;
  }

  // Append new item to end of queue (TAIL)
  enqueue(value: any) {
    this.linkedList.append(value);
  }

  // Remove first element in queue (HEAD)
  dequeue() {
    const removedHead = this.linkedList.deleteHead();
    return removedHead ? removedHead.value : null;
  }
}
