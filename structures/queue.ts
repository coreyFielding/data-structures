import LinkedList from "../structures/linked-list/linked-list";

// Queue structure - Primary focus on the start (HEAD) and end (TAIL),
// performing enqueue (push) and dequeue (pop) operations accordingly.

export default class Queue<T> {
  private linkedList = null;
  constructor() {
    this.linkedList = new LinkedList();
  }

  isEmpty(): boolean {
    return !this.linkedList.head;
  }

  peek(): any {
    if (!this.linkedList.head) return null;

    return this.linkedList.head.value;
  }

  // Append new item to end of queue (TAIL)
  enqueue(value: T): void {
    this.linkedList.append(value);
  }

  // Remove first element in queue (HEAD)
  dequeue(): T | null {
    const removedHead = this.linkedList.deleteHead();
    return removedHead ? removedHead.value : null;
  }
}
