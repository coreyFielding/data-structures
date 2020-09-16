export default class Node {
  private value = null;
  private next = null;

  constructor(value: any, next: any = null) {
    this.value = value;
    this.next = next;
  }

  toString(cb) {
    return cb ? cb(this.value) : `${this.value}`;
  }
}
