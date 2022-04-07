const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  #rootNode;

  constructor() {
    this.#rootNode = null;
  }

  root = () => this.#rootNode;

  add = data => {
    if (!this.#rootNode) this.#rootNode = new Node(data);
    else {
      let parent = this.#rootNode;
      let node = data < parent.data ? parent.left : parent.right;
      while (node) {
        parent = node;
        node = data < node.data ? node.left : node.right;
      }
      node = new Node(data);
      data < parent.data ? parent.left = node : parent.right = node;
    }
    return this;
  };

  has = data => this.find(data) ? true : false;

  find = data => {
    if (!this.#rootNode) return null;
    else if (this.#rootNode.data === data) return this.#rootNode;

    let node = data < this.#rootNode.data ? this.#rootNode.left : this.#rootNode.right;
    while (node) {
      if (node.data === data) return node;
      node = data < node.data ? node.left : node.right;
    }
    return null;
  };

  remove = data => {
    const removeNode = (node, data) => {
      if (!node) return null;

      if (node.data === data) {
        if (!node.left) return node.right;
        else if (!node.right) return node.left;

        let tempNode = node.right;
        while (tempNode.left) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      }
      data < node.data ?
        node.left = removeNode(node.left, data) :
        node.right = removeNode(node.right, data);
      return node;
    };
    this.#rootNode = removeNode(this.#rootNode, data);

    return this;
  };

  min = () => {
    let root = this.#rootNode;

    if (!root) return null;

    let min = root.data;

    if (!root.left && !root.right) return min;

    while (root) {
      if (root.data < min) min = root.data;
      root = root.left;
    }
    return min;
  };

  max = () => {
    if (!this.#rootNode) return null;

    let max = this.#rootNode.data;

    if (!this.#rootNode.left && !this.#rootNode.right) return max;

    let node = this.#rootNode.right;
    while (node) {
      if (node.data > max) max = node.data;
      node = node.right;
    }
    return max;
  };
}

module.exports = {
  BinarySearchTree
};