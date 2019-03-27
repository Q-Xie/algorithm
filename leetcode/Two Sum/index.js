/*
* 实现一个方法，从数组中找到两个数据，使得两个数之和等于目标值，并返回该数组的下标。
* */
function twoSum(array, target) {
  let arr = []
  for(let i = 0, len = array.length; i < len; i++) {
    temp = target - array[i]
    if(arr[temp])return [arr[temp], i]
    arr[array[i]] = i
  }
}

let arr = [1,2,3,4,5,6,7,8,9]
console.log(twoSum(arr, 17))