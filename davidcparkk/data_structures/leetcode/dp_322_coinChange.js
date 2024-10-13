function coinChange(coins, amount) {
  let dpMin = new Array(amount+1).fill(Infinity);

  dpMin[0] = 0;

  for( let i = 1; i < dpMin.length; i++){
    for (let j = 0; j < coins.length; j++){
      const coinValue = coins[j];
      if (coinValue <= i){
        dpMin[i] = Math.min(dpMin[i - coinValue] + 1, dp[i])
      }
    }
  }

  const answer = dpMin[dpMin.length - 1];
  return answer === Infinity ? -1 : answer;
}


