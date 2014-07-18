describe("Cell", function() {
  describe("initialize", function() {
    it("is initialized with an x and y coordinate", function() {
      var testCell = Object.create(Cell);
      testCell.initialize(1, 2);
      testCell.xCoordinate.should.equal(1);
      testCell.yCoordinate.should.equal(2);
    });
  });

  describe("create", function() {
    it("creates a new cell", function() {
      var testCell = Cell.create(1,2);
      Cell.isPrototypeOf(testCell).should.equal(true);
    });
  });

  describe("isAlive", function() {
    it("checks if cell has been marked", function() {
      var testCell = Cell.create(1, 2);
      testCell.isAlive.should.equal(false);
    });
  });
});

describe("Board", function() {
  describe("initialize", function(){
    it("creates 9 cells when it is initialized", function() {
      var testBoard = Object.create(Board);
      testBoard.initialize();
      testBoard.cells.length.should.equal(9);
    });
  });
  describe("checkIfAlive", function(){
    it("checks if a cell is alive", function(){
      var testBoard = Object.create(Board);
      testBoard.initialize();
      testBoard.aliveCells.length.should.equal(0);
    });
  });
});
