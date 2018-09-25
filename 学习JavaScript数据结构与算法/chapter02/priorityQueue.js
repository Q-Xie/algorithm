/*
* 实现一个优先队列，有两种选项：设置优先级，然后在正确的位置添加元素；或者用入列操作添加元素，然后按照优先级移除它们。
* PriorityQueue中的其他方法跟queue中的方法一样。
* */
function PriorityQueue() {

  let items = []

  function QueueElement(element, priority) {
    this.element = element
    this.priority = priority
  }

  this.enqueue = function (element, priority) {
    let queueElement = new QueueElement(element, priority)

    let added = false

    for(let i = 0; i < items.length; i++) {
      if (queueElement.priority < items[i].priority) {
        items.splice(i, 0, queueElement)
        added = true
        break;
      }
    }
    if(!added) {
      items.push(queueElement)
    }
  }

  this.print = function () {
    for(let i = 0; i < items.length; i++) {
      console.log(`${items[i].element} - ${items[i].priority}`)
    }
  }
}
