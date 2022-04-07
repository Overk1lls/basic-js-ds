const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  #head;
  #tail;

  constructor() {
    this.#head = null;
    this.#tail = null;
  }

  getUnderlyingList = () => this.#head;

  enqueue = value => {
    const node = new ListNode(value);

    if (!this.#head) this.#head = node;
    else {
      this.#tail ?
        this.#tail.next = node :
        this.#head.next = node;
      this.#tail = node;
    }
    return this;
  };

  dequeue = () => {
    const head = this.#head;

    if (!head) return head;

    if (head === this.#tail) this.#tail = null;

    this.#head = head.next;

    return head.value;
  };
}

module.exports = {
  Queue
};
