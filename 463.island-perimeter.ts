/*
 * @lc app=leetcode id=463 lang=typescript
 *
 * [463] Island Perimeter
 */

// @lc code=start
function islandPerimeter(grid: number[][]): number {
	const rows = grid.length;
	const cols = grid[0].length;

	var perimeter = 0;

	for (var row = 0; row < rows; row++) {
		for (var col = 0; col < cols; col++) {
			if (!grid[row][col]) continue;

			perimeter += 4;

			/**
			 * once an island was found, the perimeter of the current cell decreases by 1
			 * this means a cell with 2 neighbours has a perimeter of 2 (4-2)
			 *
			 * apply this to each cell and count up the individuall perimeter
			 */
			if (row > 0 && grid[row - 1][col]) {
				perimeter--;
			}

			if (col > 0 && grid[row][col - 1]) {
				perimeter--;
			}

			if (row < rows - 1 && grid[row + 1][col]) {
				perimeter--;
			}

			if (col < cols - 1 && grid[row][col + 1]) {
				perimeter--;
			}
		}
	}

	return perimeter;
}
// @lc code=end
