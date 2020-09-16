export default class Comparator {
  private compare = null;
  constructor(compareFunction) {
    this.compare = compareFunction || Comparator.defaultCompareFunction;
  }

  static defaultCompareFunction(
    a: string | number,
    b: string | number
  ): number {
    if (a === b) return 0;
    return a < b ? -1 : 1;
  }

  equal(a: string | number, b: string | number): boolean {
    return this.compare(a, b) === 0;
  }

  lessThan(a: string | number, b: string | number): boolean {
    return this.compare(a, b) < 0;
  }

  greaterThan(a: string | number, b: string | number): boolean {
    return this.compare(a, b) > 0;
  }

  lessThanOrEqual(a: string | number, b: string | number): boolean {
    return this.lessThan(a, b) || this.equal(a, b);
  }

  greaterThanOrEqual(a: string | number, b: string | number): boolean {
    return this.greaterThan(a, b) || this.equal(a, b);
  }
}
