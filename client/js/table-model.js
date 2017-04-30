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
    for(let i = 0; i < this.numRows; i++) {
      let currentValue = parseInt(this.getValue({col: colNum, row: i}));
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
