type element = number | object | string;
type index = number;
interface compareFunction {
  (a: element, b: element): number;
}
enum Larger {
  FALSE,
  TRUE,
}

export default class PriorityQueue {
  private pq: Array<element>;
  private _size: number;
  private compare: compareFunction;

  constructor(fn?: compareFunction) {
    this.pq = [-1];
    this._size = 0;
    this.compare = fn || (this.larger as compareFunction);
  }

  private parent(cur: index): index {
    return cur >> 1;
  }

  private left(cur: index): index {
    return cur * 2;
  }

  private right(cur: index): index {
    return cur * 2 + 1;
  }

  private larger(a: number | string, b: number | string): number {
    return a > b ? Larger.TRUE : Larger.FALSE;
  }

  private swim(i: index) {
    let parentIndex: number = this.parent(i);

    while (i > 1 && this.compare(this.pq[parentIndex], this.pq[i]) > 0) {
      // 与父元素交换
      [this.pq[parentIndex], this.pq[i]] = [this.pq[i], this.pq[parentIndex]];

      i = parentIndex;
      parentIndex = this.parent(i);
    }
  }

  private sink(i: index) {
    while (this.left(i) <= this._size) {
      let bestIndex: number = this.left(i);

      // 右边的子元素比左边的子元素小或者大
      if (
        this.right(i) <= this._size &&
        this.compare(this.pq[bestIndex], this.pq[this.right(i)]) > 0
      ) {
        bestIndex = this.right(i);
      }

      if (this.compare(this.pq[bestIndex], this.pq[i]) > 0) break;

      [this.pq[bestIndex], this.pq[i]] = [this.pq[i], this.pq[bestIndex]];

      i = bestIndex;
    }
  }
  public enqueue(ele: element) {
    this.pq[++this._size] = ele;
    this.swim(this._size);
  }
  public dequeue(): element | null {
    if (this._size === 0) {
      return null;
    }
    const bestVal = this.pq[1];
    [this.pq[1], this.pq[this._size]] = [this.pq[this._size], this.pq[1]];
    this.pq.pop();
    this._size--;
    this.sink(1);
    return bestVal;
  }
  public getHead(): element | null {
    return this._size > 0 ? this.pq[1] : null;
  }

  get size() {
    return this._size;
  }
}
