const prompt = require("prompt-sync")({ sigint: true });

class Autor {
    constructor(nome, sobrenome, nacionalidade, estilo) {
        this._nome = nome;
        this._sobrenome = sobrenome;
        this._nacionalidade = nacionalidade;
        this._estilo = estilo;
    }

    get info() {
        return {
            nome: this._nome,
            sobrenome: this._sobrenome,
            nacionalidade: this._nacionalidade,
            estilo: this._estilo
        };
    }
}

class Livro {
    constructor(cdcatalog, doado, titulo, autorNome, autorSobrenome, nacionalidade, estilo, editora, pag) {
        this._cdcatalog = cdcatalog;
        this._doado = doado;
        this._titulo = titulo;
        this._autorNome = autorNome;
        this._autorSobrenome = autorSobrenome;
        this._nacionalidade = nacionalidade;
        this._estilo = estilo;
        this._editora = editora;
        this._pag = pag;
    }

    get info() {
        return {
            cdcatalog: this._cdcatalog,
            doado: this._doado,
            titulo: this._titulo,
            autor: {
                nome: this._autorNome,
                sobrenome: this._autorSobrenome,
                nacionalidade: this._nacionalidade,
                estilo: this._estilo
            },
            editora: this._editora,
            pag: this._pag
        };
    }
}

class Biblioteca {
    constructor() {
        this._catalogo = {
            exatas: [],
            humanas: [],
            biomedicas: []
        };
    }

    novoLivro(cdcatalog, doado, titulo, autorNome, autorSobrenome, nacionalidade, estilo, editora, pag) {
        return new Livro(cdcatalog, doado, titulo, autorNome, autorSobrenome, nacionalidade, estilo, editora, pag);
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
        const livro = this.novoLivro(cdcatalog, doado, titulo, nome, sobrenome, nacionalidade, estilo, editora, pag);

        console.log("=================================================");
        this.catalogar(livro);
    }

    catalogar(livro) {
        const estilo = livro.info.autor.estilo;
        this._catalogo[estilo].push(livro);
    }

    get exatas() {
        return this._catalogo.exatas;
    }

    get humanas() {
        return this._catalogo.humanas;
    }

    get biomedicas() {
        return this._catalogo.biomedicas;
    }
}

const biblioteca = new Biblioteca();

for (let i = 0; i < 1; i++) {
    biblioteca.entradaDosDados();
}

let cod = '';

while (cod !== '-1') {
    cod = prompt('Qual o código do livro? ');
    if (cod === '-1') {
        break;
    }
    let gen = prompt('Qual o gênero do livro? ');
    const obras = biblioteca[gen];
    let obraEncontrada = null;
    for (let i = 0; i < obras.length; i++) {
        const obra = obras[i];
        if (obra.info.cdcatalog === cod) {
            obraEncontrada = obra;
            break;
        }
    }

    if (obraEncontrada) {
        console.log("=================================================");
        console.log("\nInformações da obra encontrada:");
        console.log("\tTítulo:", obraEncontrada.info.titulo);
        console.log("\tAutor:", obraEncontrada.info.autor.nome, obraEncontrada.info.autor.sobrenome);
        console.log("\tEditora:", obraEncontrada.info.editora);
        console.log("\tNúmero de páginas:", obraEncontrada.info.pag);
    } else {
        console.log("Obra não encontrada.");
    }
}
