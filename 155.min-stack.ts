/*
 * @lc app=leetcode id=155 lang=typescript
 *
 * [155] Min Stack
 */

// @lc code=start
class MinStack {
	#stack = [];
	#minIndex = 0;
	constructor() {
		this.#stack = [];
	}

	push(x: number): void {
		this.#stack[this.#stack.length] = x;
		if (x < this.#stack[this.#minIndex])
			this.#minIndex = this.#stack.length - 1;
	}

	pop(): void {
		if (this.#stack.length <= 1) this.#stack = [];
		this.#stack.splice(this.#stack.length - 1, 1);
		if (this.#minIndex === this.#stack.length) {
			this.#minIndex = 0;
			for (let i = 0; i < this.#stack.length; i++) {
				if (this.#stack[this.#minIndex] > this.#stack[i]) {
					this.#minIndex = i;
				}
			}
		}
	}

	top(): number {
		return this.#stack[this.#stack.length - 1];
	}

	getMin(): number {
		return this.#stack[this.#minIndex];
	}
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end
