function MaxProduct(nums){
  let maxTillIdx = [nums[0]];
  let minTillIdx = [nums[0]];
  let max = nums[0];

  for (let i = 1; i < nums.length ; i++){
    const num = nums[i];
    maxTillIdx[i] =  Math.max(num, num * maxTillIdx[i-1], num * minTillIdx[i-1]);
    minTillIdx[i] =  Math.min(num, num * maxTillIdx[i-1], num * minTillIdx[i-1]);
    

    max = Math.max(max, maxTillIdx[i])
  }

  return max;
}

T: n
S: n, create two dp arrays each same legnth as input