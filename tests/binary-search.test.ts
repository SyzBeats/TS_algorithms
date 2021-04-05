// import binary search algorithm

import { binarySearch } from "../general/searching/binary-search";

describe("binary search tests", () => {
	it("finds in sorted small array", done => {
		const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

		expect(binarySearch(array, 7)).toBe(6);

		expect(binarySearch(array, 1)).toBe(0);

		expect(binarySearch(array, 2)).toBe(1);

		expect(binarySearch(array, 9)).toBe(8);

		expect(binarySearch(array, 3)).toBe(2);

		expect(binarySearch(array, 4)).toBe(3);
		done();
	});
	it("returns -1 if not found", done => {
		const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

		expect(binarySearch(array, 10)).toBe(-1);

		done();
	});
	it("is stable in large arrays", done => {
		const array = [-51, -21, 3, 44, 510, 6745, 7744, 80450, 900000];

		expect(binarySearch(array, 3)).toBe(2);

		expect(binarySearch(array, -51)).toBe(0);

		expect(binarySearch(array, 900000)).toBe(8);

		expect(binarySearch(array, 44)).toBe(3);

		done();
	});
});
