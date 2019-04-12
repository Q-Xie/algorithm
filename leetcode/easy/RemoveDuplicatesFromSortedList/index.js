/*
* 链表中删除重复的项
* */
function ListNode(val) {
  this.val = val
  this.next = null
}

function deleteDuplicates(head) {
  let ans = []
  while (head) {
    ans.push(new ListNode(head.val))
    head = head.next
  }
  if(!ans.length) {
    return null
  }

  for(let i = ans.length; i--;) {
    if(i && ans[i].val === ans[i - 1].val) {
      ans.splice(i, 1)
    }
  }
  for(let i = 0, len = ans.length; i < len - 1; i++) {
    ans[i].nect = ans[i + 1]
  }
  return ans[0]
}
