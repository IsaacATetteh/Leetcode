class MinStack {
  constructor() {
    this.items = [];
    this.min = [];
  }

  /**
   * @param {number} val
   * @return {void}
   */
  push(val) {
    this.items.push(val);
    if (this.min.length < 1 || val < this.min[this.min.length - 1]) {
      this.min.push(val);
    } else {
      this.min.push(this.min[this.min.length - 1]);
    }
  }

  /**
   * @return {void}
   */
  pop() {
    this.min.pop();
    this.items.pop();
  }

  /**
   * @return {number}
   */
  top() {
    return this.items[this.items.length - 1];
  }

  /**
   * @return {number}
   */
  getMin() {
    console.log(this.min);
    return this.min[this.min.length - 1] || 0;
  }
}
