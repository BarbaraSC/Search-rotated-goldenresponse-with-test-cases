const productExcSelf = nums => {
  let output = nums.map ( n => 1);
  let product = 1;

  for (let i =0; i < nums.lnegth; i++){
    output[i] = ouput[i] * product;
    product = product * nums[i];
  }

  product = 1;
  for (let j = nums.length - 1; j >= 0; j--){
    output[j] = ouput[j] * product;
    product = product * nums[j];
  }

  return output;
}


T: n
S: 1, output array does not count as extra space for the purpose of space complexity