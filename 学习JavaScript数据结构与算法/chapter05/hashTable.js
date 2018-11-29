/*
* 散列表
*
* HashTable类，也叫HashMap类。它是Dictionary类的一种散列表实现方式。
*
* 散列算法的作用是尽可能快地在数据结构中找到一个值。在之前的章节中，你已经知道如果要在数据结构中获得一个值，
* 需要遍历整个数据结构区找到它。如果使用散列函数，就知道值的具体位置，因此能够快速检索到该值。散列函数的作
* 用就是给定一个键值，然后返回值在表中的地址。
* */
function HashTable() {
  let table = []

  /*
  * hashtable类中实现三个基本的方法
  * put(key, value): 向散列表增加一个新的项（也能更新散列表）
  * remove(key): 根据键值从散列表中移除值
  * get(key): 返回根据键值检索到的特定的值
  * */

  // 散列函数
  /*
  * 给定一个key参数，我们就能根据组成key的每个字符的ASCII码值的和得到一个数字。所以，首先需要一个变量来存储这个总和。
  * 然后，遍历key并从ASCII表中查到的每隔字符对应的ASCII值加到hash变量中。最后返回hash值。为了得到比较小的数值。
  * 我们会使用hash值和一个任意数做触发的余数。
  * */
  let loseloseHashCode = function (key) {
    let hash = 0
    for(let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i)
    }
    return hash % 37
  }


  this.put = function (key, value) {
    let position = loseloseHashCode(key)
    console.log(position + '-' + key)
    table[position] = value
  }

  this.get = function (key) {
    return table[loseloseHashCode(key)]
  }

  this.remove = function (key) {
    table[loseloseHashCode(key)] = undefined
  }

  /*
  * 要从HashTable实例中移除一个元素，只需要求出元素的位置（可以使用散列函数来获取）
  * 并赋值为undefined
  *
  * 对于HashTable类来说，我们不需要像ArrayList类一样从table数组中将位置也移除。由于元素分布于整个数组范围内，一些位置会没有任何元素占据
  * 并默认为undefined。我们也不能将位置本身从数组中移除，否则当下次需要获得或移除一个元素的时候，这个元素会不在我们用散列函数求出的位置上。
  * */


  /*
  * 使用上面hashTable时会出现冲突，导致数据丢失的情况。处理冲突有几种方法： 分离链接，线性探查和双散列法。
  * */
  /*
  * 分离链接
  * 分离链接法包括为散列表的每一个位置创建一个链表并将元素存储在里面。它是解决冲突的最简单方法，但是它在HashTable实例之外还需要额外的存储空间
  * */

  // 对于分离链接和线性探查来说，需要重写三个方法：put/get/remove。这三个方法在每种技术实现中都是不同的。
  /*、
  * 为了实现分离链接的hashtable实例，我们需要引入一个新的辅助类来表示将要加入LinkedList实例的元素。
  * */
  let ValuePair = function (key, value) {
    this.key = key
    this.value = value
    this.toString = function () {
      return '['+ this.key + '-' + this.value +']'
    }
  }

  this.push = function (key, value) {
    let position = loseloseHashCode(key)
    if(table[position] === undefined) {
      table[position] = new LinkedList()
    }
    table[position].append(new ValuePair(key, value))
  }

  this.get = function (key) {
    let position = loseloseHashCode(key)
    if(table[position] !== undefined) {
      let current = table[position].getHead()

      while (current.next) {
        if(current.element.key === key) {
          return current.element.value
        }
        current = current.next
      }
      if(current.element.key === key) {
        return current.element.value
      }
    }
    return undefined
  }

  this.remove = function (key) {
    let position = loseloseHashCode(key)
    if(table[position] !== undefined) {
      let current = table[position].getHead()
      while (current.next) {
        if(current.element.key === key) {
          table[position].remove(current.element)
          if(table[position].isEmpty()) {
            table[position] = undefined
          }
          return true
        }
        current = current.next
      }
      if(current.element.key === key) {
        table[position].remove(current.element)
        if(table[position].isEmpty()) {
          table[position] = undefined
        }
        return true
      }
    }
    return false
  }
}



































































