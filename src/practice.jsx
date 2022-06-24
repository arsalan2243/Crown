const nums = [4, 7, 2, 8, 10, 9]
const maxValue = (nums) => {
  let maxN = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > maxN) {
      maxN = nums[i]
    }
  }
  return maxN
}
maxValue(nums)
