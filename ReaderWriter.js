const fs = require("fs");
const util = require("util");

class Reader {
  constructor() {
    this.reader = util.promisify(fs.readFile);
  }

  async readFile(filePath) {
    try {
      const data = await this.reader(filePath, "utf8");
      return data;
    } catch (error) {
      console.error(`Error reading file from path: ${filePath}`, error);
      return null;
    }
  }
}

//Transformando .CSV em arrays
class Processor {
  static Process(data) {
    var lines = data.split("\r\n");
    var rows = [];

    lines.forEach((row) => {
      var arr = row.split(",");
      rows.push(arr);
    });
    return rows;
  }
}

class Table {
  constructor(arr) {
    if (!arr) {
      throw new Error("Array is undefined in Table constructor");
    }
    this.header = arr[0];
    arr.shift();
    this.rows = arr;
  }
  //Adiciona campovirtual que diz quantas linhas possui no arquivo no momento
  get RowCount() {
    return this.rows.length;
  }

  get ColumnCount() {
    return this.header.length;
  }
}

module.exports = { Reader, Processor, Table };
