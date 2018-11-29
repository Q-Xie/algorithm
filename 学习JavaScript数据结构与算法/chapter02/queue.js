/*
* 队列是遵从先进先出原则的一组有序的项。队列在尾部添加新元素，并从顶部移除元素。最新添加的元素必须在队列的末尾
* */
function Queue() {
  // 存储队列
  let items = []

  /*
  * 队列的一些方法：
  * enqueue(elements): 向队列尾部添加一个或多个新的项
  * dequeue():移除队列的第一项，并返回被移除的元素
  * front():返回队列中第一个元素--最先被添加，也将是最先被移除的元素。队列不做任何比难懂
  * isEmpty():如果队列中不包含任何元素，返回true,否则返回false.
  * size():返回队列中包含的元素个数，与数组的length属性类似。
  * print():打印队列中的元素
  * */
  this.enqueue = function (element) {
    items.push(element)
  }

  this.dequeue = function () {
    return items.shift()
  }

  this.front = function () {
    return items[0]
  }

  this.isEmpty = function () {
    return items.length === 0
  }

  this.size = function () {
    return items.length
  }

  this.print = function () {
    console.log(items.toString())
  }
}
