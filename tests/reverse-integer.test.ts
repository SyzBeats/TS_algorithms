import { reverseInteger } from "../7.reverse-integer";

describe("reverse integer", () => {
	it("reverses small numbers", done => {
		let reversed = reverseInteger(25);
		expect(reversed).toBe(52);

		reversed = reverseInteger(15);
		expect(reversed).toBe(51);

		reversed = reverseInteger(74);
		expect(reversed).toBe(47);

		reversed = reverseInteger(101);
		expect(reversed).toBe(101);

		reversed = reverseInteger(53);
		expect(reversed).toBe(35);

		reversed = reverseInteger(1);
		expect(reversed).toBe(1);

		reversed = reverseInteger(22);
		expect(reversed).toBe(22);
		done();
	});
	it("reverses bigger numbers", done => {
		let reversed = reverseInteger(115);
		expect(reversed).toBe(511);

		reversed = reverseInteger(333);
		expect(reversed).toBe(333);

		reversed = reverseInteger(195);
		expect(reversed).toBe(591);

		reversed = reverseInteger(911);
		expect(reversed).toBe(119);

		reversed = reverseInteger(5471);
		expect(reversed).toBe(1745);

		reversed = reverseInteger(17778);
		expect(reversed).toBe(87771);

		reversed = reverseInteger(12123);
		expect(reversed).toBe(32121);
		done();
	});
	it("reverses negative numbers", done => {
		let reversed = reverseInteger(-115);
		expect(reversed).toBe(-511);

		reversed = reverseInteger(-12123);
		expect(reversed).toBe(-32121);

		done();
	});
});
