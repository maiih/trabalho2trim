# trabalho2trim

Feito pela dupla

Os exercícios foram desenvolvidos da seguinte maneira:
O código feito pela dupla tem o número correspondente a letra da questão (Ex: C = 3 letra do alfabeto) seguido pela funcionalidade do algoritmo. A versão otimizada pelo ChatGPT possui o número e otm (abreviação de otimizado).

Inicialmente, foram desenvolvidas três classes: Autor, Livro e Biblioteca. O objeto 'Livro' recebia o atributo 'Autor', que é um objeto da classe 'Autor', e a 'Biblioteca' organizou os livros em vetores para cada uma das três áreas (Ciências Humanas, Ciências Exatas e Ciências Biomédicas).
Em seguida, foi implementada a funcionalidade de busca por meio do código de catálogo da obra e da área à qual o livro pertence. Posteriormente, realizou-se a alteração do sistema de busca: em vez de procurar pelo código de catálogo, o usuário só precisa informar o título da obra e a área correspondente.
Na sequência, foi desenvolvido um trecho do algoritmo que lista todas as obras que foram doadas. Em seguida, foi criado um segmento do algoritmo que identifica quais livros comprados possuem um número de páginas entre 100 e 300. Logo após, foi implementado um código que permite a modificação de informações de um livro já registrado.
Por último, foi adicionado um módulo para executar a exclusão de obras.


Otimização do Chat GPT

03) Essas otimizações incluem a remoção de getters desnecessários, a simplificação da lógica de catalogação usando um único objeto "Catalogo", a remoção do método "novoAutor" e outras melhorias de legibilidade. Agora, o estilo é armazenado diretamente no objeto “Livro”

04) Nesta otimização, foram removidos os getters desnecessários das classes “Autor” e “Livro". Além disso, no loop de busca de obras, foi substituída a estrutura de repetição “for” por “array.find" para encontrar a obra desejada com base no título.

05) Neste código otimizado, foram feitas as seguintes alterações:

Removido o prefixo “_” dos nomes das propriedades privadas nas classes “Autor” e “Livro”, já que não é necessário quando não há uma convenção específica a seguir.
Simplificando o método “catalogar" na classe “Biblioteca” usando um switch case.
Adicionando o getter “doacoes” na classe “Biblioteca”, que retorna uma lista com os livros doados, percorrendo os arrays de cada categoria e filtrando os livros com doado === ‘s’.
Substituíndo os loops “for” individuais pelos métodos “forEach” nas últimas linhas para exibir os títulos dos livros doados.

06) Neste código otimizado, foram feitas as seguintes alterações:

Removido o prefixo “_”  das propriedades privadas nas classes “Autor” e “Livro”, já que não é necessário quando não há uma convenção específica a seguir;
Simplificando o método “catalogar” na classe “Biblioteca" para usar diretamente a propriedade adequada com base no estilo do autor;
Substituindo os loops individuais nos blocos “for” por uma única chamada de “filter” para encontrar os livros comprados com páginas entre 100 e 300;
Utilizando um loop “for … of”  no último bloco para exibir os títulos dos livros comprados.

07) Nesse código otimizado, removemos os métodos “setCdcatalog”, “setDoado”, “setTitulo”, “setEditora” e “setPag" da classe “Livro” e substituímos as atribuições dos atributos diretamente pelos valores atribuídos. Isso simplifica o código e melhora a legibilidade.

08) Nesse código otimizado, removemos o uso de “_exatas”, “_humanas” e “_biomedicas” e substituímos por exatas, humanas e biomedicas, que são propriedades diretamente definidas na classe “Biblioteca”. Além disso, atualizamos o método “excluirLivroPorCodigo” para buscar e remover o livro corretamente da lista específica de acordo com a área.
