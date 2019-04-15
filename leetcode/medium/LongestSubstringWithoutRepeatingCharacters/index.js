/*
* 找出字符串中最常的不含有重复字符的子串长度。
* */
function lengthOfLongestSubstring(str) {
  let hash = {}
  let start = 0
  let ans = 0
  for(let i = 0, len = str.length; i < len; i++) {
    let item = str[i]
    if(!hash[item]) {
      hash[item] = true
    } else {
      for(; ;) {
        console.log('~~~')
        if(str[start] === item) {
          start++
          break
        }
        hash[str[start]] = false
        start++
      }
    }
    ans = Math.max(ans, i - start + 1)
  }
  return ans
}

console.log(lengthOfLongestSubstring('1234567890qwertyuiop'))
