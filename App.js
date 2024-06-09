const { Reader, Processor, Table } = require("./ReaderWriter.js");
var leitor = new Reader();

async function main() {
  var data = await leitor.readFile("./users.csv");
  var dadosProcessados = Processor.Process(data);
  var usuarios = new Table(dadosProcessados);

  console.log(usuarios.header);
}

main();
