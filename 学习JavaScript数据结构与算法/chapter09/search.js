/*
* 顺序搜索
* 顺序或线性搜索是最基本的搜索算法。它的机制是，将每一个数据结构中的元素和我们要找的元素进行比较。
* 顺序搜索是最低效的一种搜索算法。
* 顺序搜索迭代整个数组，并将每个数组元素和搜索项作比较。如果搜索到了，算法将用返回值来标示搜索成功。
* */

function sequentialSearch(item) {
  for(let i = 0; i < array.length; i++) {
    if(item === array[i]) {
      return i
    }
  }
  return -1
}

/*
* 二分法搜索
* 这个算法要求被搜索的数据结构已排序。
* 1.选择数组的中间值。
* 2.如果选中值是待搜索值，那么算法执行完毕（值找到了）
* 3.如果待搜索值比选中值要小，则返回步骤1，在选中值的左边子数组中寻找。
* 4.如果待搜索值比选中值要打，则返回步骤1，在选中值右边的子数组中寻找。
* */

function binarySearch(item) {
  let array = [1,2,3,4,5,6] // 排好序的数组
  let low = 0
  let high = array.length - 1
  let mid = null
  let element = null

  while (low <= high) {
    mid = Math.floor((low + high) / 2)
    element = array[mid]
    if(element < item) {
      low = mid + 1
    } else if(element > item) {
      high = mid - 1
    } else {
      return mid
    }
  }
  return -1
}
