const numberSolitaire = arr => {
  let dp = new Array(arr.length);
  dp[0] = arr[0];

  for (let i = 1; i < arr.length; i++){
    let max = 0;

    for (let die = 1; die <= 6; die++){
      if (i - die >= 0){
        max = Math.max( dp[i - die] + arr[i], max);
      }
    }

    dp[i] = max;
  }
  console.log(dp);
  return dp[arr.length - 1];
}

let arr = [1,-2,0,9,-1,-2];
console.log(numberSolitaire(arr));