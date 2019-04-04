/*
* 传入一个字符串，求字符串中最后一个单词的长度。
* */
function lengthOfLastWord(str) {
  str = str.trim()
  let _str = str.replace(/\s/g, '')
  if(!_str.length)return 0
  for(let i = str.length; i--;) {
    if(str[i] === ' ') {
      return str.length - i - 1
    }
    if(i === 0) {
      return str.length - i
    }
  }
}


console.log(lengthOfLastWord('Hello Wrld'))
