/* 
栈又名堆栈，它是一种运算受限的线性表。限定仅在表尾进行插入和删除操作的线性表。
表尾这一端被称为栈顶。相对的另外一段为栈顶。
向一个栈插入新元素称为进栈，入栈或者压栈，它是把新元素放到栈顶元素的上面，使之称为新的栈顶元素。
从一个栈删除元素又称作出栈或退栈，它是把栈顶元素删除掉，使其相邻的元素称为新的栈顶元素。
*/

/* 
栈作为一种数据结构，是一种只能在一端进行插入和删除操作的特殊线性表。允许进行插入和删除操作的一端称为栈顶。
另一端称为栈底。栈顶是浮动的，栈底是固定的。栈中元素个数为零称为空栈，插入一般称为进栈，删除一般称为退栈。

栈也称为先进后出表。

栈可以用来做函数调用的时候存储断点，做递归的时候要用到栈。
*/

function Stack(){
    let stack = []
    this.push = function(el){
        stack.push(el)
    }
    this.del = function(){
        stack.pop()
    }
    this.show = function(){
        console.log(stack)
    }
}

let stack  = new Stack()
stack.push(2)
stack.push(3)
stack.del()
stack.show()
