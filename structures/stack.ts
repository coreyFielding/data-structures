import LinkedList from "./linked-list/linked-list";

interface IStack<T> {
  isEmpty(): boolean;
  peek(): T | null;
  push(value: T): void;
  pop(): T | null;
  toArray(): T[];
}

export default class Stack<T> implements IStack<T> {
  private linkedList = null;

  constructor() {
    this.linkedList = new LinkedList();
  }

  isEmpty(): boolean {
    return !this.linkedList.head;
  }

  // Return the value of the last item on the stack (the HEAD)
  peek(): T | null {
    if (this.isEmpty()) return null;

    return this.linkedList.head.value;
  }

  // Push item on top of stack, setting HEAD to new item value
  push(value: T): void {
    this.linkedList.prepend(value);
  }

  // Remove (Pop) item (HEAD) from top of stack and return it
  pop(): T | null {
    const removedHead = this.linkedList.deleteHead();
    return removedHead ? removedHead.value : null;
  }

  toArray(): T[] {
    return this.linkedList.toArray().map((node) => node.value);
  }
}
