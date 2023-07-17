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
      if (this[estilo]) {
        this[estilo].push(livro);
      } else {
        console.log("Estilo de livro inválido.");
      }
    }
  
    buscarLivroPorCodigo(codigo, area) {
      const obras = this[area];
  
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
  
  if (obraEncontrada) {
    console.log("\nInforme os novos dados do livro:");
    const titulo = prompt("\tInforme o novo título: ");
    const cdcatalog = prompt("\tInforme o novo código de catálogo: ");
    const doado = prompt("\tÉ uma doação?: ");
    const editora = prompt("\tInforme a editora: ");
    const pag = parseFloat(prompt("\tInforme o novo número de páginas: "));
  
    obraEncontrada.titulo = titulo;
    obraEncontrada.editora = editora;
    obraEncontrada.pag = pag;
    obraEncontrada.cdcatalog = cdcatalog;
    obraEncontrada.doado = doado;
  } else {
    console.log("Livro não encontrado.");
  }
  
  console.log(`\nLivros de ${gen}:`);
  console.log(obras);
  