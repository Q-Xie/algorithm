/*
* 简单
* 实现一个函数，验证输入的字符串是否包含大括号，中括号和小括号。
* */
// 校验是否有大括号中括号小括号的字符
function isValid(str) {
  for(let i = 0, len = str.length; i < len; i++) {
    switch (str[i]) {
      case '(':
      case ')':
      case '[':
      case ']':
      case '{':
      case '{':
        return true
        break
    }
  }
  return false
}


// 校验是否有完整的大括号中括号小括号
function valid(str) {
  let arr = []
  for(let i = 0, len = str.length; i < len; i++) {
    switch (str[i]) {
      case '(':
      case '{':
      case '[':
        arr.push(str[i])
        break
      case ')':
        if(arr[arr.length - 1] === '('){
          arr.push(str[i])
        }
        break
      case '}':
        if(arr[arr.length - 1] === '{') {
          arr.push(str[i])
        }
        break
      case ']':
        if(arr[arr.length - 1] === '[') {
          arr.push(str[i])
        }
        break
    }
  }
  if(arr.length > 1)return true
  return false
}

console.log(valid('[234]{}'))















