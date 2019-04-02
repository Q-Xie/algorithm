/*
* 简单
* 实现一个函数，传入一个整数，返回一个翻转整数，当翻转的整数溢出时返回0
* (ps:需要注意的是在JS中1<<31时会溢出)
* */
function reverse(num) {
  let min = -(1 << 30) * 2
  let max = (1 << 30) * 2 - 1
  let ans
  let arr = num.toString().split('')
  if(num < 0) arr.shift()
  ans = Number(arr.reverse().join(''))
  if(num < 0)ans *= -1
  if(ans < min || ans > max) return 0
  else return ans
}

console.log(reverse(-2342344))
