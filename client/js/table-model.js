class TableModel {
  constructor(numCols=10, numRows=20) {
    this.numCols = numCols;
    this.numRows = numRows;
    this.data = {};
  }

  _getCellId(location) {
    return `${location.col}:${location.row}`;
  }

  getValue(location) {
    return this.data[this._getCellId(location)];
  }

  setValue(location, value) {
    this.data[this._getCellId(location)] = value;
  }

  getColumnValues(colNum) {
    let colValues = [];
    for(let row = 0; row < this.numRows; row++) {
      let currentValue = parseInt(this.getValue({col: colNum, row: row}));
      if(!isNaN(currentValue)) {
        colValues.push(currentValue);
      }
    }
    return colValues;
  }

  getSum(array) {
    return array.filter(function(item) {
      return typeof(item) === 'number';
    }).reduce(function(prevNum, currNum) {
      return prevNum + currNum;
    }, 0);
  }
}

module.exports = TableModel;
