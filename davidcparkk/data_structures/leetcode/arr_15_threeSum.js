function threeSum(arr){
  let result = [];
  let sorted = arr.sort( (a,b) => a - b);

  for (let i = 0; i < sorted.length; i++){
    let start = i + 1;
    let end = sorted.length - 1;
    let target = 0 - sorted[i];

    if (sorted[i] === sorted[i-1]){
      continue;
    }

    while (start < end){
      if (sorted[start] + sorted[end] === target){
        result.push([sorted[i], sorted[start], sorted[end]]);
        start++;
        while(sorted[start] === sorted[start - 1]){
          left++;
        }
      } else if (sorted[start] + sorted[end] < target){
        start++;
      } else {
        end--;
      }
    }
  }

  return result;

}