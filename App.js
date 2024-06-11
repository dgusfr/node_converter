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
  //date.now gera um novo arquivo a cada vez que o codigo é rodado
  escritor.writeFile(Date.now() + ".html", html);
}

main();
