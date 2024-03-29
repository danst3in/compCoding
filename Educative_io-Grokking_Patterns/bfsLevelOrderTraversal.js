// Queue class to support solution working properly in test suite
// a node in a linked list
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Add element into a queue
  enqueue(element) {
    const node = new Node(element);

    if (this.tail === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  // Remove element from a queue
  dequeue() {
    if (this.head === null) {
      return undefined;
    }
    const value = this.head.value;
    this.head = this.head.next;
    if (this.head === null) {
      this.tail = null;
    }
    this.length--;
    return value;
  }

  // Get value of the first element
  peek() {
    if (this.head === null) {
      return undefined;
    }
    return this.head.value;
  }

  // Check if queue is empty or not
  isEmpty() {
    return this.length === 0;
  }

  // A helper function to convert the nodes' data to
  // array format string
  toString() {
    if (this.head === null) return "[]";

    let result = "[";
    let current = this.head;
    while (current.next !== null) {
      result += current.value.data + ",";
      current = current.next;
    }
    result += current.value.data + "]";
    return result;
  }
}

export default Queue;
export let levelOrderTraversal = function (root) {
  if (!root) return "None";
  let currentQueue = new Queue();
  let nextQueue = new Queue();
  let resultString = "";
  function traverseQueues(root) {
    currentQueue.enqueue(root);
    while (currentQueue.length > 0) {
      let el = currentQueue.dequeue();

      if (el.left) {
        nextQueue.enqueue(el.left);
      }
      if (el.right) {
        nextQueue.enqueue(el.right);
      }

      resultString += String(el.data);

      if (currentQueue.length !== 0) resultString += ", ";

      if (currentQueue.length === 0 && nextQueue.length !== 0) {
        resultString += " : ";
        [currentQueue, nextQueue] = [nextQueue, currentQueue];
      }
    }

    return resultString;
  }

  return traverseQueues(root);
};
