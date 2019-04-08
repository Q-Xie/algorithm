/*
* 给定一个非负整数组成的非空数组，在该数组的基础上加一，返回一个新的数组。
* 最高位数字存放在数组的首位，数组中每个元素只存储一个数字。
* 你可以假设除了整数0之外，这个整数不会以0开头。
* 示例 1:
*   输入: [1,2,3]
* 	输出: [1,2,4]
* 	解释: 输入数组表示数字 123。
* 示例 2:
* 	输入: [4,3,2,1]
* 	输出: [4,3,2,2]
* 	解释: 输入数组表示数字 4321。
* */
function plusOne(digits) {
  let array = [], add = 0, len = digits.length

  digits[len - 1]++

  for(let i = len - 1; i >= 0; i--) {
    let sum = digits[i] + add
    array[i] = sum % 10
    add = ~~(sum / 10)
  }
  if(add) {
    array.unshift(add)
  }
  return array
}

console.log(plusOne([4,3,2,1]))

