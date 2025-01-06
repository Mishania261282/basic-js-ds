const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = addNode(this.rootNode, data);
    function addNode(node, data) {
      // проверяем есть ли корневой узел
      if (!node) {
        // если узла нет, то добавляемый узел становится корневым узлом
        return new Node(data);
      }
      // исключаем случай когда добавляемое значение узла равно значению узла в дереве
      if (node.data === data) {
        return node;
      }
      // если добавляемое значение больше текущего значения
      if (data > node.data) {
        // добавляем узел в правую ветку
        node.right = addNode(node.right, data);
        // иначе добавляем узел в левую ветку
      } else {
        node.left = addNode(node.left, data);
      }
      return node;
    }
  }

  has(data) {
    return searchIn(this.rootNode, data);

    function searchIn(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      return data < node.data
        ? searchIn(node.left, data)
        : searchIn(node.right, data);
    }
  }

  find(data) {
    return this.search(this.rootNode, data);
  }
  search(node, data) {
    if (node === null) return null;
    if (node.data === data) {
      return node;
    } else
      return data < node.data
        ? this.search(node.left, data)
        : this.search(node.right, data);
  }

  remove(data) {
    this.rootNode = removeNode(this.rootNode, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (node.left === null) {
          node = node.right;
          return node;
        }

        if (node.right === null) {
          node = node.left;
          return node;
        }

        let min = node.right;
        while (min.left) {
          min = min.left;
        }
        node.data = min.data;

        node.right = removeNode(node.right, min.data);

        return node;
      }
    }
  }

  min() {
    if (this.rootNode === null) {
      return null;
    }
    let elem = this.rootNode;
    while (elem.left) {
      elem = elem.left;
    }
    return elem.data;
  }
  max() {
    let elem = this.rootNode;
    while (elem.right !== null) {
      elem = elem.right;
    }
    return elem.data;
  }
}

module.exports = {
  BinarySearchTree,
};
