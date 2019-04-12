/*
* 给定两个排序的整型数组A和B，将B合并到A中。
* 假设A有足够的空间来容纳B中的元素，A和并中出事的元素数目分别是m和n
* */

function mergeSortedArray(num1, num2) {
  num1 = [...num1, ...num2].sort((a, b) => {
    return a - b
  })
  return num1
}

let arr1 = [1,3,5,7,9]
let arr2 = [2,4,6,8,10]
console.log(mergeSortedArray(arr1, arr2))
