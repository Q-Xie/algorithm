/*
* 简单
* 实现一个方法，传入一个值，判断传入值是否是回文。
* */
function isPalindrome(x) {
  return x.toString() === x.toString().split('').reverse().join('')
}

console.log(isPalindrome('abccbaa'))
