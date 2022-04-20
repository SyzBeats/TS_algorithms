/*
 * @lc app=leetcode id=733 lang=typescript
 *
 * [733] Flood Fill
 */

// @lc code=start
function floodFill(image: number[][], sr: number, sc: number, newColor: number): number[][] {
  const color = image[sr][sc];

  if (color !== newColor) {
    dfs(image, sr, sc, newColor, color);
  }

  return image;
}

function dfs(image: number[][], sr: number, sc: number, newColor: number, color: number) {
  if (!image[sr]) {
    return;
  }

  if (image[sr][sc] === newColor) {
    return;
  }

  if (image[sr][sc] !== color) {
    return;
  }

  // fill the pixel with the new color
  image[sr][sc] = newColor;

  if (sr + 1 < image.length) dfs(image, sr + 1, sc, newColor, color);
  if (sc + 1 < image[0].length) dfs(image, sr, sc + 1, newColor, color);
  if (sr > 0) dfs(image, sr - 1, sc, newColor, color);
  if (sc > 0) dfs(image, sr, sc - 1, newColor, color);
}

// @lc code=end
