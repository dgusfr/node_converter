const { Reader, Processor, Table, HtmlParser } = require("./ReaderWriter.js");
var leitor = new Reader();

async function main() {
  var data = await leitor.readFile("./users.csv");
  var dadosProcessados = Processor.Process(data);
  var usuarios = new Table(dadosProcessados);
  var html = await HtmlParser.ParseToHtml(usuarios);

  console.log(html);
}

main();

//parei em 7:20 minutos do video
