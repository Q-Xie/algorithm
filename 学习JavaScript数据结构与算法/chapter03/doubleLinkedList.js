/*
* 双向链表
* 双向链表和普通链表的区别在于，在链表中，一个节点只有链向下一个节点的链接，而在双向链表中，
* 链表是双向的：一个链向下一个元素，一个链向前一个元素。
*
* 双向链表提供了两种迭代列表的方法：从头到尾，或者反过来。
* */
function DoubleLinkedList() {

  let Node = function (element) {
    this.element = element
    this.next = null
    this.prev = null // 新增的
  }

  let length = 0
  let head = null
  let tail = null // 新增的


  this.insert = function (position, element) {

    // 检查越界值
    if(position > -1 && position <= length) {

      let node = new Node(element)
      let current = head
      let previous = null
      let index = 0

      if(position === 0){
        if(!head) {
          head = node
          tail = node
        } else {
          node.next = current
          current.prev = node // 新增的
          head = node
        }

      } else if(position === length){ // 新增的
        current = tail
        current.next = node
        node.prev = current
        tail = node
      } else {
        while (index ++ < position) {
          previous = current
          current = current.index
        }
        node.next = current
        previous.next = node

        current.prev = node // 新增的
        node.prev = previous
      }
      length++
      return true
    } else {
      return false
    }
  }

  this.removeAt = function (position) {
    // 检查越界值
    if(position > -1 && position < length) {
      let current = head
      let previous = null
      let index = 0

      // 移除第一项
      if (position === 0) {
        head = current.next
        if (length === 1) {
          tail = null
        } else {
          head.prev = null
        }
      } else if (position === length - 1) {
        current = tail
        tail = current.prev
        tail.next = null
      } else {
        while (index++ < position) {
          previous = current
          current = current.next
        }
        // 将previous.next 与current 的下一项链接起来--跳过current
        previous.next = current.next
        current.next.prev = previous
      }
      length--
      return current.element
    } else {
    return null
  }
  

}
