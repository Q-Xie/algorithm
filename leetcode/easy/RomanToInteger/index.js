/*
* 简单
* 罗马数字转成整数，
* 我们最常见的罗马数字就是钟表的表盘符号：Ⅰ，Ⅱ，Ⅲ，Ⅳ（IIII），Ⅴ，Ⅵ，Ⅶ，Ⅷ，Ⅸ，Ⅹ，Ⅺ，Ⅻ
* 对应阿拉伯数字，就是1，2，3，4，5，6，7，8，9，10，11，12
* */
function romanToInt(str) {
  let hash = {}
  hash['I'] = 1
  hash['X'] = 10
  hash['C'] = 100
  hash['M'] = 1000
  hash['V'] = 5
  hash['L'] = 50
  hash['D'] = 500

  let sum = 0

  for (let i = 0, len = str.length; i < len; i++) {
    let item = hash[str[i]]
    let nextItem = i + 1 === len ? 0 : hash[str[i + 1]]
    if(nextItem > item) {
      sum += nextItem - item
      i++
    } else {
      sum += item
    }
  }
  return sum
}

console.log(romanToInt('IXC'))
console.log(romanToInt('III'))
console.log(romanToInt('IV'))
console.log(romanToInt('XC'))
