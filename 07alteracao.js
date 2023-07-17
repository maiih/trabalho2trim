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

  setCdcatalog(cdcatalog) {
    this._cdcatalog = cdcatalog;
  }

  setDoado(doado) {
    this._doado = doado;
  }

  setTitulo(titulo) {
    this._titulo = titulo;
  }

  setEditora(editora) {
    this._editora = editora;
  }

  setPag(pag) {
    this._pag = pag;
  }

  get cdcatalog() {
    return this._cdcatalog;
  }

  get doado() {
    return this._doado;
  }

  get autor() {
    return this._autor;
  }

  get titulo() {
    return this._titulo;
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
    if (livro.autor.estilo == 'exatas') {
      this._exatas.push(livro);
    }
    if (livro.autor.estilo == 'humanas') {
      this._humanas.push(livro);
    }
    if (livro.autor.estilo == 'biomedicas') {
      this._biomedicas.push(livro);
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

  buscarLivroPorCodigo(codigo, area) {
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

    for (let i = 0; i < obras.length; i++) {
      const livro = obras[i];
      if (livro.cdcatalog === codigo) {
        return livro;
      }
    }

    return null;
  }
}

const biblioteca = new Biblioteca();

for (let i = 0; i < 1; i++) {
  biblioteca.entradaDosDados();
}

let cod = prompt("Qual o código do livro? ");
let gen = prompt("Qual o gênero do livro? ");

const obras = biblioteca[gen];

let obraEncontrada = biblioteca.buscarLivroPorCodigo(cod, gen);

console.log('Livro que será modificado:');
console.log("\t\Título:", obraEncontrada.titulo);
console.log("\t\Autor:", obraEncontrada.autor.nome, obraEncontrada.autor.sobrenome);
console.log("\t\Editora:", obraEncontrada.editora);
console.log("\t\Número de páginas:", obraEncontrada.pag);


if (obraEncontrada) {
  console.log("\nInforme os novos dados do livro:");
  const titulo = prompt("\tInforme o novo título: ");
  const cdcatalog = prompt("\tInforme o novo código de catálogo: ");
  const doado = prompt("\tÉ uma doação?: ");
  const editora = prompt("\tInforme a editora: ");
  const pag = parseFloat(prompt("\tInforme o novo número de páginas: "));

  obraEncontrada.setTitulo(titulo);
  obraEncontrada.setEditora(editora);
  obraEncontrada.setPag(pag);
  obraEncontrada.setCdcatalog(cdcatalog);
  obraEncontrada.setDoado(doado);
} else {
  console.log("Livro não encontrado.");
}

console.log(`\nLivro Atualizado:`);
console.log("\t\Título:", obraEncontrada.titulo);
console.log("\t\Autor:", obraEncontrada.autor.nome, obraEncontrada.autor.sobrenome);
console.log("\t\Editora:", obraEncontrada.editora);
console.log("\t\Número de páginas:", obraEncontrada.pag);