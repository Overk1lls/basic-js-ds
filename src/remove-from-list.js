const { ListNode } = require('../extensions/list-node.js');
const { arrayToList } = require('./lib/utils.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} list
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
const removeKFromList = (l, k) => {
  const arr = [];

  while (l) {
    if (!(l.value === k)) {
      arr.push(l.value);
    }
    l = l.next;
  }
  return arrayToList(arr);
};

module.exports = {
  removeKFromList
};
