/*
* 求两个表示为字符串形式的二进制数字的和
* */
function addBinary(num1, num2) {
  num1 = num1.split('').reverse()
  num2 = num2.split('').reverse()

  let num = []
  let add = 0
  let len = Math.max(num1.length, num2.length)

  for(let i = 0; i < len; i++) {
    let sum = (num1[i] === undefined ? 0 : Number(num1[i])) + (num2[i] === undefined ? 0 : Number(num2[i])) + add
    num[i] = sum & 1
    if(sum >= 2) {
      add = 1
    } else {
      add = 0
    }
  }
  if(add) {
    num[len] = 1
  }
  return num.reverse().join('').toString()
}

console.log(addBinary('11', '1'))
