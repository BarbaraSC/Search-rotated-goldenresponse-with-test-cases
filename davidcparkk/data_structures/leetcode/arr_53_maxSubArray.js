function maxSubArray(nums){
  let dp = [nums[0]];
  let max = nums[0];

  for (let i = 1; i < nums.length; i++){
    const num = nums[i];
    dp[i] = Math.max(num, num + dp[i-1]);
    max = Math.max(max, dp[i])
  }

  return max;
}



// Above solution
T: N
S: N


// If you want to do constant space, change the values in the input array
