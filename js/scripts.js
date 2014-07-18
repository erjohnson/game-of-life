var Cell = {
  initialize: function (x, y){
    this.xCoordinate = x;
    this.yCoordinate = y;
  },
  create: function() {
    return Object.create(Cell);
  },
  xCoordinate: 0,
  yCoordinate: 0,
  isAlive: false,
  aliveNeighbors: 0
}

var Board = {
  initialize: function(){
    var x;
    var y;

    for (x = 1; x <= 3; x++) {
      for (y = 1; y <= 3; y++) {
        var newCell = Cell.create();
        newCell.initialize(x, y);
        console.log(newCell);
        this.cells.push(newCell);
      };
    };
  },
  checkIfAlive: function(){
      this.cells.forEach(function(){
        if (Cell.isAlive === true) {
          this.aliveCells.push(Cell);
        }
      });
  },
  cells: [],
  aliveCells: []
}

