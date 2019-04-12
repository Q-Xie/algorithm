/*
* 爬台阶问题。每次能爬一个或两个台阶，问一个有n个台阶的话，一共 有多少种方法爬到顶端
* 思路：
* n<=1，此时只有一种，
* n>1，对于每一个台阶i，要到达台阶，最后一步都有两种方法，从i-1迈一步，或从i-2迈两步。也就是说达到台阶i
* 的方法数=达台阶i-1d方法数+达台阶i-2d方法数。所以问题是个动态规划的问题。
* */

function climbStairs(num) {
  let a = []
  a[0] = 1
  a[1] = 1
  for(let i = 2; i<= num; i++) {
    a[i] = a[i-1] + a[i-2]
  }
  return a[num]
}

console.log(climbStairs(2))
