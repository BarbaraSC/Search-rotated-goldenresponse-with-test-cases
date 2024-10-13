function robs(nums) {
  if (nums.length ===0) return 0;
  if (nums.length ===1) return nums[0];
  if (nums.length ===2) return Math.max(nums[0], nums[1]);

  let maxLootatN = [nums[0], Math.max(nums[0], nums[1])];

  for (let i = 2; i < nums.length ; i++) {
    maxLootatN.push(Math.max(nums[i] + maxLootatN[i-2], maxLootatN[i-1]))
  }

  return maxLootatN.pop();
}

T: N , loop through array once
S: N , maxLootAtN construction iterates through array once