/*
* The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
  P   A   H   N
  A P L S I I G
  Y   I   R
  And then read line by line: "PAHNAPLSIIGYIR"
  Write the code that will take a string and make this conversion given a number of rows:
  string convert(string text, int nRows);
  convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".
* */

let ans, max_column
function dfs(x, y, s, n, numRows) {
  ans[x][y] = s[n]
  if(s.length === n) {
    max_column = y
    return
  }

  if(y % (numRows - 1) === 0 && x !== numRows - 1) {
    dfs(x+1, y, s, n + 1, numRows)
  } else {
    dfs(x - 1, y + 1, s, n + 1, numRows)
  }
}

function convert(s, numRows) {
  if(numRows === 1) {
    return s
  }

  ans = []
  for(let i = 0; i < numRows; i++) {
    ans[i] = []
  }

  dfs(0, 0, s, 0, numRows)

  let tmp = ''

  for(let i = 0; i < numRows; i++) {
    for(let j = 0; j <= max_column; j++) {
      if(ans[i][j] !== undefined) {
        tmp += ans[i][j]
      }
    }
  }
  return tmp
}

console.log(convert('PAYPALISHIRING', 3))
