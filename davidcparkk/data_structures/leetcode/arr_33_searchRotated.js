function findMinIdx(rotatedSortedArr){
  let left = 0;
  let right = rotatedSortedArr.length - 1;

  if (rotatedSortedArr.length === 1){
    return 0;
  }

  if (rotatedSortedArr[left] < rotatedSortedArr[right]){
    return 0;
  }

  while (left <= right){
    const mid = Math.floor((left+right)/2);

    if (mid > 0 && rotatedSortedArr[mid] < rotatedSortedArr[mid - 1]){
      return mid;
    }

    if (mid < rotatedSortedArr.length - 1 && rotatedSortedArr[mid] > rotatedSortedArr[mid + 1]){
      return mid + 1;
    }

    if (rotatedSortedArr[mid] < rotatedSortedArr[left]){
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return 0; // Handle the case where the array isn't rotated
}

function bSearch(arr,target, left, right){
  while (left <= right){
    const mid = Math.floor((left+right)/2);
    if (arr[mid] === target){
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

function search(nums, target){
  const minIdx = findMinIdx(nums);

  const left = minIdx === 0 ? -1 : bSearch(nums, target, 0, minIdx - 1);
  const right = bSearch(nums, target, minIdx, nums.length - 1);

  return left !== -1 ? left : right;
}


console.log(search([4,5,6,7,0,1,2], 0)); // expected: 4

console.log(search([4,5,6,7,0,1,2], 5)); // expected: 1

console.log(search([4,5,6,7,0,1,2], 3)); // expected: -1

console.log(search([1,2,3,4,5,6], 4)); // expected: 3

console.log(search([1], 1)); // expected: 0

console.log(search([2, 1], 1)); // expected: 1

console.log(search([2, 1], 3)); // expected: -1

console.log(search([5,6,7,8,1,2,3], 5)); // expected: 0

console.log(search([5,6,7,8,1,2,3], 3)); // expected: 6

console.log(search([4,4,4,5,1,2,4], 1)); // expected: 4
