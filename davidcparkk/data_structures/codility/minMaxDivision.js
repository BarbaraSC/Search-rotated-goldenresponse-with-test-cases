const minMaxDiv = (K,M,arr) => {
  let minSum = 0;
  let maxSum = 0;

  for(let i = 0; i < arr.length; i++){
    maxSum = maxSum + arr[i];
    minSum = Math.max(minSum, arr[i]);
  }

  let possibleResult = maxSum;

  while(minSum <= maxSum){
    let midSum = (minSum + maxSum)/2;
    let ok = checkDivisable(midSum, K, arr);

    if (ok){
      possibleResult = midSum;
      maxSum = midSum - 1;
    } else {
      minSum = midSum + 1;
    }
  }
  return possibleResult;
}

const checkDivisable = (mid, k, arr) => {
  let numBlockAllowed = k;
  let currentBlockSum = 0;

  for(let i = 0; i < arr.length; i++){
    currentBlockSum = currentBlockSum + arr[i];

    if (currentBlockSum > mid){
      numBlockAllowed--;
      currentBlockSum = arr[i];
    }

    if(numBlockAllowed === 0){
      return false;
    }
  }
  return true;
}


let arr = [2,1,5,1,2,2,2];
let K = 3;
let M = 5;

console.log(minMaxDiv(K,M,arr));