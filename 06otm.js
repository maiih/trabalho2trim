const prompt = require("prompt-sync")({ sigint: true });

class Autor {
    constructor(nome, sobrenome, nacionalidade, estilo) {
      this.nome = nome;
      this.sobrenome = sobrenome;
      this.nacionalidade = nacionalidade;
      this.estilo = estilo;
    }
  }
  
  class Livro {
    constructor(cdcatalog, doado, titulo, autor, editora, pag) {
      this.cdcatalog = cdcatalog;
      this.doado = doado;
      this.titulo = titulo;
      this.autor = autor;
      this.editora = editora;
      this.pag = pag;
    }
  }
  
  class Biblioteca {
    constructor() {
      this.exatas = [];
      this.humanas = [];
      this.biomedicas = [];
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
      this[estilo].push(livro);
    }
  
    getExatas() {
      return this.exatas;
    }
  
    getHumanas() {
      return this.humanas;
    }
  
    getBiomedicas() {
      return this.biomedicas;
    }
  
    setExatas(livros) {
      this.exatas = livros;
    }
  
    setHumanas(livros) {
      this.humanas = livros;
    }
  
    setBiomedicas(livros) {
      this.biomedicas = livros;
    }
  }
  
  const biblioteca = new Biblioteca();
  
  for (let i = 0; i < 3; i++) {
    biblioteca.entradaDosDados();
  }
  
  const comprados = [...biblioteca.getHumanas(), ...biblioteca.getExatas(), ...biblioteca.getBiomedicas()].filter(livro => {
    return livro.doado === 'n' && livro.pag >= 100 && livro.pag <= 300;
  });
  
  console.log('\nEsses são os livros comprados com páginas entre 100 e 300:');
  
  for (const livro of comprados) {
    console.log(livro.titulo);
  }
  