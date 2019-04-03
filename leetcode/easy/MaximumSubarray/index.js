/*
* 给定一个整数数组nums, 找到一个具有最大和的连续子数组（子数组最少包含一个元素）,返回其最大值
* 输入： [-2,1,-3,4,-1,2,1,-5,4]
* 输出：6
* 连续子数组: [4,-1,2,1]
* */

let list = [-2,1,-3,4,-1,-2,1,-5,-4]

function maximumSubArray(array) {
  let maxn = -Number.MAX_VALUE
  let sum = 0
  console.log(maxn)
  array.forEach((item, index, array) => {
    sum += item
    if(sum > maxn) {
      maxn = sum
    } else if(sum < 0) {
      sum = 0
    }
  })
  return maxn
}

/*
* 找出具有最小和的连续子数组，并返回其最小值
* */
function minimumSubArray(array){
  let minn = Number.MAX_VALUE
  let sum = 0
  array.forEach((item, index, array) => {
    sum += item
    if(sum < minn) {
      minn = sum
    } else if(sum > 0) {
      sum = 0
    }
  })
  return minn
}
console.log(minimumSubArray(list))
