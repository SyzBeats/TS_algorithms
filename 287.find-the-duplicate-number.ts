/*
 * @lc app=leetcode id=287 lang=typescript
 *
 * [287] Find the Duplicate Number
 */

// @lc code=start
function findDuplicate(nums: number[]): number {
  const hashMap = {};

  for (let i = 0; i < nums.length; i++) {
    if (!hashMap[nums[i]]) hashMap[nums[i]] = true;
    else return nums[i];
  }
}
// @lc code=end
