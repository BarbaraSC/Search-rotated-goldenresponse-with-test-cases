function twoSum(arr, target){
  const numsVisited = {};

  const res = [];

  for (let i =0; i < arr.length; i++){
    const num = arr[i];
    const complement = target - num;

    if (numsVisited[complement] !== undefined){
      res.push(i);
      res.push(numsVisited[complement]);
    }

    numsVisited[num] = i;
  }

  return res;

}


// Code Challenge

function targetSum(nums, target){
  let numsVisited = {};
  let res = [];

  for (let i = 0 ; i < nums.length; i ++){
    let num = nums[i];
    let complement = target - num;
    let complementVal = numsVisited[complement];

    if (complementVal !== undefined){
      res.push([i, complementVal].sort());
    }

    numsVisited[num] = i;
  }

  return res.sort();
}








