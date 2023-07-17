const prompt = require("prompt-sync")({ sigint: true });

class Autor {
  constructor(nome, sobrenome, nacionalidade, estilo) {
    this._nome = nome;
    this._sobrenome = sobrenome;
    this._nacionalidade = nacionalidade;
    this._estilo = estilo;
  }

  get nome() {
    return this._nome;
  }

  get sobrenome() {
    return this._sobrenome;
  }

  get nacionalidade() {
    return this._nacionalidade;
  }

  get estilo() {
    return this._estilo;
  }
}

class Livro {
  constructor(cdcatalog, doado, titulo, autor, editora, pag) {
    this._cdcatalog = cdcatalog;
    this._doado = doado;
    this._titulo = titulo;
    this._autor = autor;
    this._editora = editora;
    this._pag = pag;
  }

  get cdcatalog() {
    return this._cdcatalog;
  }

  get doado() {
    return this._doado;
  }

  get titulo() {
    return this._titulo;
  }

  get autor() {
    return this._autor;
  }

  get editora() {
    return this._editora;
  }

  get pag() {
    return this._pag;
  }
}

class Biblioteca {
  constructor() {
    this._exatas = [];
    this._humanas = [];
    this._biomedicas = [];
  }

  novoAutor(nome, sobrenome, nacionalidade, estilo) {
    return new Autor(nome, sobrenome, nacionalidade, estilo);
  }

  novoLivro(cdcatalog, doado, titulo, autor, editora, pag, estilo) {
    return new Livro(cdcatalog, doado, titulo, autor, editora, pag, estilo);
  }

  entradaDosDados() {
    console.log("\nInforme os dados do autor:");
    const nome = prompt("\tInforme o nome: ");
    const sobrenome = prompt("\tInforme o sobrenome: ");
    const nacionalidade = prompt("\tInforme a nacionalidade: ");
    const estilo = prompt("\tInforme o estilo: ");
    const autor = this.novoAutor(nome, sobrenome, nacionalidade, estilo);

    console.log("\nInforme os dados do livro:");
    const titulo = prompt("\tInforme o título: ");
    const cdcatalog = prompt("\tInforme o código de catálogo: ");
    const doado = prompt("\tÉ uma doação?: ");
    const editora = prompt("\tInforme a editora: ");
    const pag = parseFloat(prompt("\tInforme o número de páginas: "));
    const livro = this.novoLivro(cdcatalog, doado, titulo, autor, editora, pag);
    console.log("=================================================");
    this.catalogar(livro);
  }

  catalogar(livro) {
    const estilo = livro.autor.estilo;
    switch (estilo) {
      case 'exatas':
        this._exatas.push(livro);
        break;
      case 'humanas':
        this._humanas.push(livro);
        break;
      case 'biomedicas':
        this._biomedicas.push(livro);
        break;
      default:
        console.log("Estilo de livro inválido.");
    }
  }

  excluirLivroPorCodigo(codigo, area) {
    let obras = [];

    switch (area) {
      case "exatas":
        obras = this._exatas;
        break;
      case "humanas":
        obras = this._humanas;
        break;
      case "biomedicas":
        obras = this._biomedicas;
        break;
    }

    let obraEncontrada = null;
    let index = -1;

    for (let i = 0; i < obras.length; i++) {
      const livro = obras[i];
      if (livro.cdcatalog === codigo) {
        obraEncontrada = livro;
        index = i;
        break;
      }
    }

    if (obraEncontrada) {
      console.log('==============================')
      console.log(`\nEste livro será excluido:`);
      console.log("\t\Título:", obraEncontrada.titulo);
      console.log("\t\Autor:", obraEncontrada.autor.nome, obraEncontrada.autor.sobrenome);
      console.log("\t\Editora:", obraEncontrada.editora);
      console.log("\t\Número de páginas:", obraEncontrada.pag);
      obras.splice(index, 1);
      console.log("Livro removido com sucesso!");
    } else {
      console.log("Livro não encontrado.");
    }
  }

  get exatas() {
    return this._exatas;
  }

  get humanas() {
    return this._humanas;
  }

  get biomedicas() {
    return this._biomedicas;
  }
}

const biblioteca = new Biblioteca();

for (let i = 0; i < 4; i++) {
  biblioteca.entradaDosDados();
}

let cod = prompt("Qual o código do livro? ");
let gen = prompt("Qual o gênero do livro? ");

biblioteca.excluirLivroPorCodigo(cod, gen);

console.log(`\nEstes são todos os livros da biblioteca:`);
console.log("\nLivros de exatas:");
for (let i = 0; i < biblioteca.exatas.length; i++) {
  const livro = biblioteca.exatas[i];
  console.log("\t\Título:", livro.titulo);
  console.log("\t\Autor:", livro.autor.nome, livro.autor.sobrenome);
}

console.log("\nLivros de humanas:");
for (let i = 0; i < biblioteca.humanas.length; i++) {
  const livro = biblioteca.humanas[i];
  console.log("\t\Título:", biblioteca.humanas.titulo);
  console.log("\t\Autor:", livro.autor.nome, livro.autor.sobrenome);
}

console.log("\nLivros de biomedicas:");
for (let i = 0; i < biblioteca.biomedicas.length; i++) {
  const livro = biblioteca.biomedicas[i];
  console.log("\t\Título:", livro.titulo);
  console.log("\t\Autor:", livro.autor.nome, livro.autor.sobrenome);
}