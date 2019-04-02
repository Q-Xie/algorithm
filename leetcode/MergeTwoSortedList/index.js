/*
* 简单
* 合并两个链表，并排序，并返回
*
* */

// 定义一个单链表
function ListNode(val) {
  this.val = val
  this.next = null
}

function mergeTwoList(list1, list2) {
  let ans = []
  while (list1) {
    ans.push(new ListNode(list1.val))
    list1 = list1.next
  }
  while (list2) {
    ans.push(new ListNode(list2.val))
    list2 = list2.next
  }
  ans.sort((obj1, obj2) => {
    return obj1.val - obj2.val
  })
  if(!ans.length)return null
  for(let i = 0, len = ans.length; i < len - 1; i++) {
    ans[i].next = ans[i + 1]
  }
  return ans[0]
}

mergeTwoList()
