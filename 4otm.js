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

    entradaDosDados() {
        console.log("\nInforme os dados do autor:");
        let nome = prompt("\tInforme o nome: ");
        let sobrenome = prompt("\tInforme o sobrenome: ");
        let nacionalidade = prompt("\tInforme o nacionalidade: ");
        let estilo = prompt("\tInforme o estilo: ");
        const autor = new Autor(nome, sobrenome, nacionalidade, estilo);

        console.log("\nInforme os dados do livro:");
        let titulo = prompt("\tInforme o título: ");
        let cdcatalog = prompt("\tInforme o código de catálogo: ");
        let doado = prompt("\tÉ uma doação?: ");
        let editora = prompt("\tInforme a editora: ");
        let pag = prompt("\tInforme o número de páginas: ");
        const livro = new Livro(cdcatalog, doado, titulo, autor, editora, pag);
        console.log("=================================================");
        this.catalogar(livro);
    }

    catalogar(livro) {
        if (livro.autor.estilo === 'exatas') {
            this.exatas.push(livro);
        } else if (livro.autor.estilo === 'humanas') {
            this.humanas.push(livro);
        } else if (livro.autor.estilo === 'biomedicas') {
            this.biomedicas.push(livro);
        }
    }
}

const biblioteca = new Biblioteca();

for (let i = 0; i < 1; i++) {
    biblioteca.entradaDosDados();
}

let nomelivro = '';

while (nomelivro !== '-1') {
    nomelivro = prompt('Qual o nome do livro? ');
    if (nomelivro === '-1') {
        break;
    }
    let gen = prompt('Qual o gênero do livro? ');
    let obras = [];
    switch (gen) {
        case 'exatas':
            obras = biblioteca.exatas;
            break;
        case 'humanas':
            obras = biblioteca.humanas;
            break;
        case 'biomedicas':
            obras = biblioteca.biomedicas;
            break;
    }

    let obraEncontrada = obras.find(obra => obra.titulo === nomelivro);

    if (obraEncontrada) {
        console.log("=================================================");
        console.log("\nInformações da obra encontrada:");
        console.log("\tTítulo:", obraEncontrada.titulo);
        console.log("\tAutor:", obraEncontrada.autor.nome, obraEncontrada.autor.sobrenome);
        console.log("\tEditora:", obraEncontrada.editora);
        console.log("\tNúmero de páginas:", obraEncontrada.pag);
    } else {
        console.log("Obra não encontrada.");
    }
}
