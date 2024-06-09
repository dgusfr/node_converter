const { Reader, Writer, Processor } = require("./ReaderWriter.js");
var leitor = new Reader();
var escritor = new Writer();

async function main() {
  var data = await leitor.readFile("./users.csv");
  console.log(data);

  await escritor.Write("./file.txt", "Olá"); // Escrevendo "Olá" no arquivo file.txt

  Processor.Process(data);
}

main();
