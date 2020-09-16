import LinkedList from "./linked-list/linked-list";

export default class Stack {
  private linkedList = null;

  constructor() {
    this.linkedList = new LinkedList();
  }

  isEmpty() {
    return !this.linkedList.head;
  }

  // Return the value of the last item on the stack (the HEAD)
  peek() {
    if (this.isEmpty()) return null;

    return this.linkedList.head.value;
  }

  // Push item on top of stack, setting HEAD to new item value
  push(value) {
    this.linkedList.prepend(value);
  }

  // Remove (Pop) item (HEAD) from top of stack and return it
  pop() {
    const removedHead = this.linkedList.deleteHead();
    return removedHead ? removedHead.value : null;
  }

  toArray() {
    return this.linkedList.toArray().map((node) => node.value);
  }
}
