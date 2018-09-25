function LinkedList() {

  // LinkedList数据结构中的Node辅助类
  let Node = function (element) {
    this.element = element
    this.next = null
  }

  /*
  * LinkList类中的方法
  * append(element):向列表尾部添加一个新的项
  * insert(position, element): 向列表的特定位置插入一个新的项
  * remove(element): 从列表中移除一项
  * indexOf(element): 返回元素在列表中的索引，如果列表中没有该元素则返回-1
  * removeAt(position): 从列表的特定位置移除一项
  * isEmpty():如果链表中不包含任何元素，则返回true。否则返回false
  * size():返回链表包含的元素个数。与数组的length属性类似。
  * toString():由于列表项使用了Node类，就需要重写继承自JS对象默认的toString方法，让其只输出元素的值。
  * */

  let length = 0
  let head = null

  this.append = function (element) {

  }

  this.insert = function (position, element) {

  }

  this.removeAt = function (position) {

  }

  this.remove = function (element) {

  }

  this.indexOf = function (element) {

  }

  this.isEmpt = function () {

  }

  this.size = function () {

  }

  this.getHead = function () {

  }

  this.toString = function () {

  }

  this.print = function () {

  }
}
