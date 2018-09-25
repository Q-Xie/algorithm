let queue = new Queue()
console.log(queue.isEmpty())
queue.enqueue('john')
queue.enqueue('jack')
queue.enqueue('camila')

console.log(queue.size())
console.log(queue.isEmpty())
queue.dequeue()
queue.dequeue()
queue.print()



/*
* 例子：击鼓传花
* 队列的另一个修改版就是循环队列。循环队列的一个例子就是击鼓传花。
* */
function hotPotato(nameList, num) {

  let queue = new Queue()

  for(let i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i])
  }

  let eliminated = ''
  while (queue.size() > 1) {
    for(let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue())
    }
    eliminated = queue.dequeue()
    console.log(eliminated + '在击鼓传花游戏中淘汰')
  }
  return queue.dequeue()
}

let names = ['kim1', 'kim2', 'kim3', 'kim4', 'kim5', 'kim6', 'kim7', 'kim8', 'kim9']
let winner = hotPotato(names, 8)
console.log('胜利者是：' + winner)
