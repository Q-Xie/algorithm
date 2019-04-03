/*
* 用一个新的字符串描述上一个字符串，用数字表示上一个：
* 例如：
* n=1时输出字符串1；
* n=2时，数上次字符串中的数值个数，因为上次字符串有1个1，所以输出11；
* n=3时，由于上次字符是11，有2个1，所以输出21；
* n=4时，由于上次字符串是21，有1个2和1个1，所以输出1211；
* n=5时，由于上一次字符串是1211，所以是111221；
* n=6时，由于上一次字符串是111221，则是312211。依次类推
*
* */

function countAndSay(n) {
  let hashPos
  let hash = {}
  hash[1] = '1'
  for(let i = n; i >= 1; i--) {
    if(hash[i]) hashPos = i
  }

  let str = hash[hashPos]
  for(let i = hashPos + 1; i <= n; i++) {
    let _str = ''
    let target = ''
    let num = 0
    for(let j = 0, len = str.length; j < len; j++) {
      if(target === '') {
        target = str[j]
        num = 1
      } else if(str[j] === target) {
        num++
      } else {
        _str += num + target
        target = str[j]
        num = 1
      }
    }
    if(num) {
      _str += num + target
      str = _str
    }
    hash[i] = str
  }
  return str
}

console.log(countAndSay(6))
