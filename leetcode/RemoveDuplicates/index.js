/*
* 简单
* 数组去重
* */
let list = [1, 2, 3, 4, 4, 4, 5, 6, 6, 7]

// 用ES6实现
function unique(array) {
  return [...new Set(array)]
}

// 用indexof
function unique2(array) {
  let arr = []
  for(let i = 0, len = array.length; i < len; i++) {
    if(arr.indexOf(array[i]) < 0) {
      arr.push(array[i])
    }
  }
  return arr
}

console.log(unique(list))
