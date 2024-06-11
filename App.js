const {
  Reader,
  Writer,
  Processor,
  Table,
  HtmlParser,
} = require("./ReaderWriter.js");
var leitor = new Reader();
var escritor = new Writer();

async function main() {
  var data = await leitor.readFile("./users.csv");
  var dadosProcessados = Processor.Process(data);
  var usuarios = new Table(dadosProcessados);
  var html = await HtmlParser.ParseToHtml(usuarios);
  escritor.writeFile("htmlGerado.html", html);
}

main();
