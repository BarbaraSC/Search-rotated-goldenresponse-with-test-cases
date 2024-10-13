function lengthOfLIS(nums) {
  if (nums.length === 0) return 0;

  let dpSub = new Array(nums.length).fill(1);

  let currMax = 1;

  for (let j = 1; j < nums.length; j++) {
    for (let i = 0; i < j; i++) {
      if (nums[j] > nums[i]){
        dpSub[j] = Math.max(dpSub[i]+1, dpSub[j])
      }
    }
    currMax = Math.max(currMax, dpSub[j]);
  }
  return currMax;
}

// Time n^2, we do up to N work, for all N elements
// O(N) we store answer up to N problems, using DP array