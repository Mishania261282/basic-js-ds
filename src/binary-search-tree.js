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

  remove(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree,
};
