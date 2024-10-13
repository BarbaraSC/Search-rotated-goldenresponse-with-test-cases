const nextPerm = nums => {
  function swap(a,b){
    const temp = nums[a]
    nums[a] = numbs[b]
    numbs[b] = temp
  }

  function reverse(start){
    let end = nums.length - 1;
    while(start < end){
      swap(start,end)
      start++
      end--
    }
  }

  let i = nums.length - 2;
  while(i >= 0 && nums[i+1] <= nums[i]){
    i--;
  }
  if (i < 0){
    reverse(0)
    return;
  }
  let j = nums.length - 1;
  while (j >= 0 && nums[j] <= nums[i]){
    j--;
  }
  swap(i,j)
  reverse(i+1)
}