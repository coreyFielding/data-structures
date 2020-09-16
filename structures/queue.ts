import LinkedList from "../structures/linked-list/linked-list";

// Queue structure - Primary focus on the start (HEAD) and end (TAIL),
// performing enqueue (push) and dequeue (pop) operations accordingly.

interface IQueue<T> {
  isEmpty(): boolean;
  peek(): T | null;
  enqueue(value: T): void;
  dequeue(): T | null;
}

export default class Queue<T> implements IQueue<T> {
  constructor(private linkedList = null, private capacity: number = Infinity) {
    this.linkedList = new LinkedList();
  }

  size(): number {
    return this.linkedList.toArray().length;
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
    if (this.size() === this.capacity)
      throw Error("Queue has reached max capacity.");
    this.linkedList.append(value);
  }

  // Remove first element in queue (HEAD)
  dequeue(): T | null {
    const removedHead = this.linkedList.deleteHead();
    return removedHead ? removedHead.value : null;
  }
}
