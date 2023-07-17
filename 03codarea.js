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
        console.log("\n\Informe os dados do autor:");
        let nome = prompt("\tInforme o nome: ");
        let sobrenome = prompt("\tInforme o sobrenome: ");
        let nacionalidade = prompt("\tInforme o nacionalidade: ");
        let estilo = prompt("\tInforme o estilo: ");
        const autor = new Autor(nome, sobrenome, nacionalidade, estilo);

        console.log("\n\Informe os dados do livro:");
        let titulo = prompt("\tInforme o título: ");
        let cdcatalog = prompt("\tInforme o código de catálogo: ");
        let doado = prompt("\tÉ uma doação?: ");
        let editora = prompt("\tInforme a editora: ");
        let pag = prompt("\tInforme o número de páginas: ");
        const livro = new Livro(cdcatalog, doado, titulo, autor, editora, pag);
        console.log("=================================================")
        biblioteca.catalogar(livro);
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
}

const biblioteca = new Biblioteca();

for (let i = 0; i < 1; i++) {
    biblioteca.entradaDosDados();
}

cod = '';

while (cod != '-1') {
    cod = prompt('Qual o código do livro? ');
    if (cod == '-1') {
        break;
    }
    gen = prompt('Qual o gênero do livro? ');
    let obras = [];
    switch (gen) {
        case "exatas":
            obras = biblioteca.exatas;
            break;
        case "humanas":
            obras = biblioteca.humanas;
            break;
        case "biomedicas":
            obras = biblioteca.biomedicas;
            break;
    }

    let obraEncontrada = null;
    for (let i = 0; i < obras.length; i++) {
        const obra = obras[i];
        if (obra.cdcatalog === cod) {
            obraEncontrada = obra;
            break;
        }
    }

    if (obraEncontrada) {
        console.log("=================================================")
        console.log("\n\Informações da obra encontrada:");
        console.log("\t\Título:", obraEncontrada.titulo);
        console.log("\t\Autor:", obraEncontrada.autor.nome, obraEncontrada.autor.sobrenome);
        console.log("\t\Editora:", obraEncontrada.editora);
        console.log("\t\Número de páginas:", obraEncontrada.pag);
    } else {
        console.log("Obra não encontrada.");
    }


}


/*
console.log("Títulos dos livros de exatas:");
for (let i = 0; i < biblioteca.exatas.length; i++) {
    const livro = biblioteca.exatas[i];
    console.log(livro.titulo);
}

console.log("Títulos dos livros de humanas:");
for (let i = 0; i < biblioteca.humanas.length; i++) {
    const livro = biblioteca.humanas[i];
    console.log(livro.titulo);
}

console.log("Títulos dos livros de biomedicas:");
for (let i = 0; i < biblioteca.biomedicas.length; i++) {
    const livro = biblioteca.biomedicas[i];
    console.log(livro.titulo);
}

*/
