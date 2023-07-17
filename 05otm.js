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
        switch (livro.autor.estilo) {
            case 'exatas':
                this.exatas.push(livro);
                break;
            case 'humanas':
                this.humanas.push(livro);
                break;
            case 'biomedicas':
                this.biomedicas.push(livro);
                break;
        }
    }

    get doacoes() {
        const doacoes = [];
        [...this.exatas, ...this.humanas, ...this.biomedicas].forEach(livro => {
            if (livro.doado === 's') {
                doacoes.push(livro);
            }
        });
        return doacoes;
    }
}

const biblioteca = new Biblioteca();

for (let i = 0; i < 3; i++) {
    biblioteca.entradaDosDados();
}

console.log('\nEsses são os livros doados: ');

biblioteca.doacoes.forEach(livro => {
    console.log('\t', livro.titulo);
});
