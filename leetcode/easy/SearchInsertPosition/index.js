/*
* 给定一个排序数组和目标值，如果找到目标则返回索引。如果没有，请返回索引顺序插入的索引。(数组中没有重复项)
* */
function searchInsert(array, num) {
  let low = 0, max = array.length - 1
  while (low <= max) {
    let mid = Math.floor((low + max) / 2)
    if(array[mid] === num) return mid
    else if(array[mid] > num) max = mid -1
    else low = mid + 1
  }
  return low
}

let arr = [1,2,3,5,7,9,10,11,12,15,20,22]
// console.log(searchInsert(arr, 13))

// 另一种解法
function searchInsert2(array, num){
  let hash = []
  for(let i = 0, len = array.length; i < len; i++) {
    hash[array[i]] = i
    if(array[len - 1] < num) return len
    if(array[i - 1] < num && num < array[i] && i > 0) {
      return i
    }
  }
  if(hash[num]) {
    return hash[num]
  }
}

console.log(searchInsert2(arr, 25))
