/*
* 实现一个函数，在一个字符串中找到另外一个字符串第一次出现的位置，有则返回改位置下标，如果没有则返回-1。
* */
function strStr(haystack, needle) {
  return haystack.indexOf(needle) // 也可以用search,对于字符串之间的匹配，使用indexOf更高效
}

console.log(strStr('abcdefg1111', 111))
