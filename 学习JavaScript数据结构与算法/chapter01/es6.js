/*
* ES6语法声明Stack类
* ES6语法把Stack函数转换成Stack类。这种方法不能像其他语言一样直接在类里面声明变量，只能在类的构造函数
* constructor里声明。
* 尽管代码看上去更简洁，变量items却是公共的。ES6的类是基于原型的。虽然基于原型的类比基于函数的类更节
* 内存，也更适合创建多个实例，却不能够声明私有变量或方法。而且在这种情况下，我们希望Stack类的用户只能访问
* 暴露给类的方法。否则就有可能从栈的中间移除元素。
* */
class Stack {
  constructor() {
    this.items = []
  }
  push(element) {
    this.items.push(element)
  }
  pop() {
    return this.items.pop()
  }
  peek() {
    return this.items[this.items.length - 1]
  }
  isEmpty() {
    return this.items.length === 0
  }
  clear() {
    this.items = []
  }
  size() {
    return this.items.length
  }
}
