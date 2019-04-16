/*
* 两个有序数组的中位数
* */
function medianSortedArrays(array1, array2) {
  let arr = array1.concat(array2)
  arr.sort((num1, num2) => {
    return num1 - num2
  })
  let len = arr.length
  if(len & 1) return arr[~~(len / 2)]
  else return (arr[len / 2 - 1] + arr[len / 2]) / 2
}

console.log(medianSortedArrays([1, 3], [2]))
