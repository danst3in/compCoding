/*
Leetcode

Min Stack
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.


Example:

MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> Returns -3.
minStack.pop();
minStack.top();      --> Returns 0.
minStack.getMin();   --> Returns -2.
 */

/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.index = 0;
  this.storage = {};
  this.minStack = {};
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.storage[this.index] = x;
  this.index += 1;
  return this.index;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  let temp;
  temp = this.storage[this.index - 1];
  // console.log("temp: ", temp);
  delete this.storage[this.index - 1];
  this.index -= 1;
  // console.log("this in pop: ", this);
  return temp;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.storage[this.index - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  // console.log(Object.values(this));
  return Math.min(...Object.values(this.storage));
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
let minStack = new MinStack();
console.log(minStack.push(-2));
console.log(minStack.push(0));
console.log(minStack.push(-3));
console.log(minStack.getMin()); // --> Returns -3.
console.log(minStack.pop());
console.log(minStack.top()); //    --> Returns 0.
console.log(minStack.getMin()); //--> Returns -2.
