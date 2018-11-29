/*
* 链表存储有序的元素集合，但不同于数组，链表中的元素在内存中并不是连续放置的。每个元素由一个存储元素本身的节点和一个指向下一个元素的引用（也称为指针或链接）组成。
* 相对于传统的数组，链表的一个好处在于，添加或移除元素的时候不需要移动其他元素。然而，链表需要使用指针，因此实现链表时需要额外注意。
* 链表中间的一个元素，需要从起点（表头）开始迭代列表直到找到所需的元素。
* */
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
    let node = new Node(element)
    let current
    if (head === null) { // 列表中第一个节点
      head = node
    } else {
      current = head
      // 循环列表，直到找到最后一项
      while (current.next) {
        current = current.next
      }
      // 找到最后一项， 将其next赋为node,建立连接
      current.next = node
    }
    length++ // 更新列表长度
  }

  this.insert = function (position, element) {
    // 检查越界值
    if(position >= 0 && position <= length) {
      let node = new Node(element)
      let current = head
      let previous = null
      let index = 0

      if(position === 0) {
        // 第一个位置添加
        node.next = current
        head = node
      } else {
        while (index ++ < position) {
          previous = current
          current = current.next
        }
        node.next = current
        previous.next = node
      }
      length++
      return true
    } else {
      return false
    }
  }

  this.removeAt = function (position) {
    // 检查越界值
    if(position > -1 && position < length ){
      let current = head
      let previous = null
      let index = 0
      // 移除第一项
      if(position === 0) {
        head = current.next
      } else {
        while (index++ < position) {
          previous = current
          current = current.next
        }
        // 将previous与current的下一项链接起来：跳过current,从而移除它
        previous.next = current.next
      }
      length--
      return current.element
    } else {
      return null
    }
  }

  this.remove = function (element) {
    let index = this.indexOf(element)
    return this.removeAt(index)
  }

  this.indexOf = function (element) {
    let current = head
    let index = -1
    while(current) {
      if(element === current.element) {
        return index
      }
      index++
      current = current.next
    }
    return -1
  }

  this.isEmpty = function () {
    return length === 0
  }

  this.size = function () {
    return length
  }

  this.getHead = function () {
    return head
  }

  this.toString = function () {
    let current = head
    let string = ''
    while (current) {
      string += current.element + (current.next ? 'n' : '' )
      current = current.next
    }
    return string
  }
}





































