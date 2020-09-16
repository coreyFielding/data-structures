interface INode<T> {
  value: T;
  next: T;
}

export default class Node<INode, T> {
  private value = null;
  private next = null;

  constructor(value: T, next: T | null = null) {
    this.value = value;
    this.next = next;
  }

  toString(cb) {
    return cb ? cb(this.value) : `${this.value}`;
  }
}
