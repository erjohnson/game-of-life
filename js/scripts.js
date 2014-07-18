var Cell = {
    initialize: function (x, y) {
        this.xCoordinate = x;
        this.yCoordinate = y;
    },
    create: function () {
        return Object.create(Cell);
    },
    amIAlive: function () {
        var neighbors = this.aliveNeighbors;

        if (neighbors < 2) {
          this.isAlive = false;
        } else if (this.isAlive === true && neighbors === 2) {
          this.isAlive = true;
        } else if (neighbors === 3) {
          this.isAlive = true;
        } else {
          this.isAlive = false;
        }
    },
    xCoordinate: 0,
    yCoordinate: 0,
    isAlive: false,
    aliveNeighbors: 0,
    neighborsArr: []
};

var Board = {
    initialize: function () {
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
    findByCoors: function (x, y) {
        var foundCell;

        for (var i = 0; i < this.cells.length; i++) {
            if (this.cells[i].xCoordinate === x &&
                this.cells[i].yCoordinate === y) {
                foundCell = this.cells[i];
            }
        };
        console.log(foundCell);
        return foundCell;
    },
    cells: []
}

// Neighbours = [[x-1, y-1, 1], [x, y-1, 1], [x+1, y-1, 1], [x-1, y, 1],
// [x+1, y, 1], [x-1, y+1, 1], [x, y+1, 1], [x+1, y+1, 1]];
