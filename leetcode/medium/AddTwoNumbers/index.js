/*
* 给定两个代表两个非负数的链表，按数位逆置方式存储（即123存储为3-2-1-null），要求返回两数之和的链表
* */
function ListNode(val) {
  this.val = val
  this.next = null
}

function addTwoNumbers(l1, l2) {
  let add = 0, ans, head

  while (l1 || l2) {
    let a = l1 ? l1.val : 0 ,
        b = l2 ? l2.val : 0

    let sum = a + b + add
    add = ~~(sum / 10)

    let node = new ListNode(sum % 10)

    if(!ans) {
      ans = head = node
    } else {
      head.next = node
      head = node
    }

    if(l1)l1 = l1.next
    if(l2)l2 = l2.next
  }
  if(add) {
    let node = new ListNode(add)
    head.next = node
    head = node
  }
  return ans
}
