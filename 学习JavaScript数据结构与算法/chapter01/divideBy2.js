function divideBy2(decNumber) {
  let remStack = new Stack(), rem, binaryString = ''
  while (decNumber > 0) {
    rem = Math.floor(decNumber % 2)
    remStack.push(rem)
    decNumber = Math.floor(decNumber / 2)
  }
  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString()
  }
  return binaryString
}
console.log(divideBy2(10))

function baseConverter(decNumber, base) {
  let remStack = new Stack(), rem, baseString = '', digits = '0123456789ABCDEF'
  while (decNumber > 0) {
    rem = Math.floor(decNumber % base)
    remStack.push(rem)
    decNumber = Math.floor(decNumber / base)
  }
  while (!remStack.isEmpty()) {
    baseString += digits[remStack.pop()]
  }
  return baseString
}
console.log(baseConverter(11, 16))
