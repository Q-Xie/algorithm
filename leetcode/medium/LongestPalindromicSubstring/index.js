/*
* 求最长回文子串，即在一个字符串中的那个最常的回文子串
* */

function Manacher(s){
  let str = '*#', dp = [], maxn = 0, idx = 0
  for(let i = 0, len = s.length; i < len; i++) {
    str += s[i] + '#'
  }

  for(let i = 1, len = str.length; i < len; i++) {
    if(maxn > i) {
      dp[i] = Math.min(dp[2 * idx - i], maxn - i)
    } else {
      dp[i] = 1
    }
    while (str[i - dp[i]] === str[i + dp[i]]) {
      dp[i]++
    }
    if(dp[i] + i > maxn) {
      maxn = dp[i] + i, idx = i
    }
  }

  let ans = 0, pos

  for(let i = 1, len = str.length; i < len; i++) {
    if(dp[i] > ans) {
      ans = dp[i], pos = i
    }
  }

  let f = str[pos] === '#'
    , tmp = f ? '' : str[pos]
    , startPos = f ? pos + 1 : pos + 2
    , endPos = f ? dp[pos] - 3 + startPos : dp[pos] - 4 + startPos

  for(let i = startPos; i <= endPos; i += 2) {
    tmp = str[i] + tmp + str[i]
  }
  return tmp
}

function logestPalindrome(s) {
  return Manacher(s)
}

console.log(logestPalindrome('levelddleveldd'))
