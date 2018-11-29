/*
* 我们使用对象而不是数组来表示集合
* */
function SetDemo() {
  let items = {}

  this.has = function (value) {
    // return value in items 下面有更好的方法
    return items.hasOwnProperty(value)
  }

  this.add = function (value) {
    if(!this.has(value)) {
      items[value] = value
      return true
    }
    return false
  }

  this.remove = function (value) {
    if(this.has(value)){
      delete items[value]
      return true
    }
    return false
  }

  this.clear = function () {
    items = {}
  }

  this.size = function () {
    return Object.keys(items).length
  }

  this.sizeLegacy = function () {
    let count = 0
    for (let key in items) {
      if(items.hasOwnProperty(key)) {
        ++count
      }
    }
    return count
  }

  this.values = function () {
    let values = []
    for(let i = 0; keys = Object.keys(items); i < keys.length; i++) {
      values.push(items[keys[i]])
    }
    return values
  }

  this.valuesLegace = function () {
    let vauels = []
    for(let key in items) {
      if(items.hasOwnProperty(key)) {
        vauels.push(items[key])
      }
    }
    return values
  }
}
