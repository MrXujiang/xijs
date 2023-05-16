/**
 * 定义链表结构
 * @param data
 * @param next
 * @constructor
 */
class Node<T> {
  data: T;
  next: Node<T> | undefined;
  prev: Node<T> | undefined;

  constructor(data: T) {
    this.data = data;
  }
}
class BothLinkedList<T> {
  private head: Node<T> | undefined;
  private tail: Node<T> | undefined;
  private size = 0;

  /**
   * 插入元素 采用尾插法
   * @param data
   */
  insertHead(data: T): void {
    const node = new Node(data);
    if (this.size === 0) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail!.next = node;
      this.tail = node;
    }
    this.size++;
  }

  /**
   * 根据索引插入元素
   * @param data
   * @param index
   */
  insertIndex(data: T, index: number): void {
    if (index < 0 || index > this.size) {
      throw new Error('要插入的索引已经超过了链表的最大长度');
    }
    const node = new Node(data);
    /**
     * 如果链表为空，直接插入
     */
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    }
    /**
     * 如果 index === 0 则插入的位置是头
     * 如果 index === this.size 则插入的位置是尾
     */
    if (index === 0) {
      node.next = this.head;
      this.head!.prev = node;
      this.head = node;
    } else if (index === this.size) {
      node.prev = this.tail;
      this.tail!.next = node;
      this.tail = node;
    } else {
      let current = this.head!;
      for (let i = 0; i < index - 1; i++) {
        current = current.next!;
      }
      node.prev = current;
      node.next = current.next;
      current.next!.prev = node;
      current.next = node;
    }
    this.size++;
  }

  /**
   * 删除元素(根据元素值进行删除)
   */
  deleteData(data: T): void {
    if (this.size === 0) {
      throw Error('双向链表为空，不能删除');
    }
    let current = this.head!;
    while (current) {
      if (current.data === data) {
        if (this.size === 1) {
          this.head = undefined;
          this.tail = undefined;
        } else if (current === this.head) {
          this.head = this.head!.next;
          this.head!.prev = undefined;
        } else if (current === this.tail) {
          this.tail = this.tail!.prev;
          this.tail!.next = undefined;
        } else {
          current.prev!.next = current.next;
          current.next!.prev = current.prev;
        }

        this.size--;
        return;
      }
      current = current!.next!;
    }
  }

  /**
   * 根据元素索引删除
   * @param index
   */
  deleteFrom(index: number): void {
    if (index < 0 || index >= this.size) {
      throw new Error('双向链表越界');
    }
    if (this.size === 1) {
      this.head = undefined;
      this.tail = undefined;
    } else if (index === 0) {
      this.head = this.head!.next!;
      this.head!.prev = undefined;
    } else if (index === this.size - 1) {
      this.tail = this.tail!.prev;
      this.tail!.next = undefined;
    } else {
      let current = this.head!;
      for (let i = 0; i < index; i++) {
        current = current.next!;
      }
      current.prev!.next = current.next;
      current.next!.prev = current.prev;
    }
    this.size--;
  }

  /**
   * 正向遍历
   */
  getHead(): Node<T> | undefined {
    return this.head;
  }

  /**
   * 反向遍历
   */
  getTail(): Node<T> | undefined {
    return this.tail;
  }

  /**
   * 获取链表长度
   */
  getSize(): number {
    return this.size;
  }

  /**
   * 更具索引，获取元素值
   * @param index
   */
  getData(index: number): T | undefined {
    if (index < 0 || index >= this.size) {
      throw Error('要查找的索引已经超过了链表的最大长度');
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current!.next;
    }
    return current!.data;
  }
}
export default BothLinkedList;
