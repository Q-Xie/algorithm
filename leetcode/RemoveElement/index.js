/*
* 简单
* 移除数组中的元素
* */
function removeElement(array, el) {
  let num = 0
  for(let i = 0, len = array.length; i < len; i++) {
    if(el !== array[i]) {
      num++
    } else {
      array.splice(i, 1)
    }
  }
  return num
}


function removeElement2(array, el) {
  for(let i = 0, len = array.length; i < len; i++) {
    if(el === array[i]) {
      array.splice(i, 1)
    }
  }
  return array.length
}
