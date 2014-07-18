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
        } else if (neighbors >= 2 && neighbors <= 3) {
            this.isAlive = true;
        } else {
            this.isAlive = false;
        }
    },
    xCoordinate: 0,
    yCoordinate: 0,
    isAlive: false,
    aliveNeighbors: 0,
    neighbors: []
    // findNeighbors: function () {
    //     this.xCoordinate, this.yCoordinate
    //     var x = this.xCoordinate - 1
    //     var y = this.yCoordinate - 1
    //     for (x; x <= x + 3; x++) {
    //         for (y; y <= x + 3; y++) {
    //             if (!(x === this.xCoordinate && y === this.yCoordinate) && (this.xCoordinate > 0) && (this.yCoordinate > 0)) {
    //                 var newCell = Cell.create();
    //                 newCell.initialize(x, y);
    //                 this.neighbors.push(newCell);
    //             };
    //         };
    //     }
    // }
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
    checkIfAlive: function () {
        this.cells.forEach(function () {
            if (Cell.isAlive === true) {
                this.aliveCells.push(Cell);
            }
        });
    },
    nextGen: function () {
        this.aliveCells.forEach(function (aliveCell) {
            //check neighbors dog
            //set aliveCell.aliveNeighbors to whatever
        })
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
    checkNeighbors: function () {
        this.cells.forEach(function (cell) {
            cell.neighbors.forEach(function (arg) {
                if (arg.isAlive === true) {
                    cell.aliveNeighbors++
                }
            });
        });
        Cell.aliveNeighbors++
    },
    cells: []
}

// Neighbours = [[x-1, y-1, 1], [x, y-1, 1], [x+1, y-1, 1], [x-1, y, 1],
// [x+1, y, 1], [x-1, y+1, 1], [x, y+1, 1], [x+1, y+1, 1]];
