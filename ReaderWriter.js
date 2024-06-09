const fs = require("fs");
const util = require("util");

class Reader {
  constructor() {
    // Promisify fs.readFile para que possamos usar async/await
    this.reader = util.promisify(fs.readFile);
  }

  async Read(filepath) {
    try {
      // Tente ler o arquivo e retorne o conteúdo
      return this.reader(filepath, "utf8");
    } catch (err) {
      // Se houver um erro, imprima-o e retorne null
      console.error("Erro ao ler o arquivo:", err);
      return null;
    }
  }
}

class Writer {
  constructor() {
    // Promisify fs.writeFile para que possamos usar async/await
    this.writer = util.promisify(fs.writeFile);
  }

  async Write(filepath, data) {
    try {
      // Tente escrever no arquivo e imprima uma mensagem de sucesso
      await this.writer(filepath, data);
      console.log("Arquivo escrito com sucesso!");
    } catch (err) {
      // Se houver um erro, imprima-o
      console.error("Erro ao escrever no arquivo:", err);
    }
  }
}

class Processor {
  Process(data) {
    // Separe o conteúdo por linhas
    var lines = data.split("\n");

    // Remova a última linha (que é vazia)
    lines.pop();

    // Crie um array de objetos com os dados separados por vírgula
    var arr = [];
    lines.forEach((line) => {
      var cols = line.split(",");
      arr.push({
        name: cols[0],
        email: cols[1],
        id: cols[2],
      });
    });

    return arr;
  }
}

module.exports = { Reader, Writer, Processor };
