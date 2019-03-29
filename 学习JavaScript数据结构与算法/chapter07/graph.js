/*
* 我们使用一个数组来存储图中所有顶点的名字，以及一个字典来存储邻接表。
* 字典将会使用顶点的名字作为键，邻接顶点列表作为值。vertices数组和adjList
* 字典两者都是我们Graph类的私有属性。
* */
function Graph() {
  let vertices = []
  let adjList = new Dictionary()

  /*
  * 用来向图中添加一个新的顶点(因为图实例化后是空的)
  * 这个方法接收顶点v作为参数。我们将该顶点添加到顶点列表中，并且在邻接表中，
  * 设置顶点v作为键对应的字典值为一个空数组。
  * */
  this.addVertex = function (v) {
    vertices.push(v)
    adjList.set(v, [])
  }

  /*
  * 通过将w加入到v的邻接表中，我们添加了一条自顶点v到顶点w的边。如果你想实现一个有向图，
  * 则第一行就够了。由于大多数例子是无向图，所以还需要添加一条自w向v的边
  * */
  this.addEdge = function (v, w) {
    adjList.get(v).push(w)
    adjList.get(w).push(v)
  }

  this.toString = function () {
    let s = ''
    for (let i = 0; i < vertices.length; i++) {
      s += vertices[i] + ' -> '
      let neigbors = adjList.get(vertices[i])
      for ( let j = 0; j < neigbors.length; j++) {
        s += neigbors[j] + ' '
      }
      s += '\n'
    }
    return s
  }

  let initializeColor = function () {
    let color = []
    for (let i = 0; i < vertices.length; i++) {
      color[vertices[i]] = 'white'
    }
    return color
  }

  this.bfs = function (v, callback) {
    let color = initializeColor()
    queue = new Queue()
    queue.enqueue(v)

    while (!queue.isEmpty()) {
      let u = queue.dequeue(),
      neighbors = adjList.get(u)
      color[u] = 'grey'
      for ( let i = 0; i < neighbors.length; i++) {
        let w = neighbors[i]
      }
    }
  }
}






















































