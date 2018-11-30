function ArrayList() {

  let array = []

  this.insert = function (item) {
    array.push(item)
  }

  this.toString = function () {
    return array.join()
  }

  let swap = function (array, index1, index2) {
    let aux = array[index1]
    array[index1] = array[index2]
    array[index2] = aux
  }

  /*
  * 冒泡排序
  * 冒泡排序比较任何两个相邻的项，如果第一个比第二个大，则交换它们。元素项向上移动至正确的顺序，就好像气泡升至表面一样
  * 冒泡排序因此得名。
  * */
  this.bubbleSort = function () {
    let length = array.length
    for(let i = 0; i < length; i++) {
      for(let j = 0; j < length - 1 - i; j++) {
        if(array[j] > array[ j + 1]) {
          swap(j, j+1)
        }
      }
    }
  }

  /*
  * 选择排序
  * 选择排序算法是一种原址比较排序算法。选择排序大致的思路是找到数据结构中的最小值并将其放在第一位，接着找到第二小的值并将其放在第二位
  * 以此类推。
  * */
  this.selectionSort = function () {
    let length = array.length
    let indexMin = null
    for(let i = 0; i < length -1; i++) {
      indexMin = i
      for(let j = i; j < length; j++) {
        if(array[indexMin] > array[j]) {
          indexMin = j
        }
      }
      if(i !== indexMin) {
        swap(i, indexMin)
      }
    }
  }


  /*
  * 插入排序
  * 插入排序每次拍一个数组项，以此方式构建最后的排序数组。假定第一项已经排序了，接着，它和第二项进行比较，第二项是应该待在原位还是插到第一项之前呢？
  * 这样头两项就以正确排序，接着和第三项比较，以此类推
  * */
  this.insertionSort = function () {
    let length = array.length
    let j = null
    let temp = null
    for(let i = 1; i < length; i++) {
      j = i;
      temp = array[i]
      while (j > 0 && array[j - 1] > temp) {
        array[j] = array[j - 1]
        j--
      }
      array[j] = temp
    }
  }
}
