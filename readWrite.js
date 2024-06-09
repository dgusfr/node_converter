const fs = require("fs");

function readFile() {
  fs.readFile("./file.txt", "utf8", (err, data) => {
    if (err) {
      console.error("Falha ao ler o arquivo.");
      return;
    }
    console.log(data);
  });
}

fs.writeFile("./file.txt", "Hello World!", (err) => {
  if (err) {
    console.error("Falha ao escrever no arquivo.");
    return;
  }
  console.log("Arquivo escrito com sucesso!");
  readFile();
});

//Lendo e escrevendo em Json
fs.readFile("./usuario.json", "utf8", (err, data) => {
  if (err) {
    console.error("Falha ao ler o arquivo.");
    return;
  } else {
    var conteudo = JSON.parse(data);
    console.log(conteudo);

    conteudo.nome = "Diego";
    conteudo.curso = "Node.js";
    conteudo.catetoria = "Programação";

    fs.writeFile("./usuario.json", JSON.stringify(conteudo), (err) => {
      if (err) {
        console.error("Falha ao escrever no arquivo.");
        return;
      }
      console.log("Arquivo escrito com sucesso!");
    });
  }
});

//escrevendo em cima o arquivo sem perder o conteudo original

function appendToFile() {
  fs.appendFile("./file.txt", "\nMinha terra tem palmeiras!", (err) => {
    if (err) {
      console.error("Falha ao escrever no arquivo.");
      return;
    }
    console.log("Arquivo escrito com sucesso!");
  });
}

appendToFile();
