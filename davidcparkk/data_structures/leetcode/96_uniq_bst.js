var numTrees = function(n) {
  var dp = [];
   dp[0] = 1;
   dp[1] = 1;
   for(let i = 2; i <= n; i++) {
       dp[i] = 0;
       for(let j = 0; j <= i-1; j++) {
           dp[i] += dp[j]*dp[i-1-j];
       }
   }
   return dp[n];
};