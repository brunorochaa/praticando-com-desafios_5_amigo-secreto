# [Curso de Lógica de programação: praticando com desafios](https://cursos.alura.com.br/course/logica-programacao-praticando-desafios)
Faça esse curso de Lógica de programação e:
- Pratique lógica de programação com diferentes desafios
- Utilize seus conhecimentos para implementar soluções
- Reforce seus conhecimentos em lógica de programação
- Desenvolva projetos para compor seu portfolio
- Melhore suas habilidades em programação

---

# 1. Projeto Sorteador de números: O que aprendemos?
- Analisar o código de uma página HTML para entender sua estrutura e planejar o código de sua funcionalidade;
- Declarar variáveis no JavaScript para armazenar elementos recuperados da página;
- Recuperar elementos da página com JavaScript, com o uso da função `document.getElementById()`;
- Recuperar valores digitados em campos de um formulário na página, via propriedade **value**;
- Utilizar o recurso de ***Template String***, do JavaScript, para concatenar valores de variáveis em String.
- Utilizar a função `parseInt`, no JavaScript, para converter um valor do tipo String para um número inteiro;
- Fazer uma estrutura de repetição utilizando for para gerar números aleatórios no sorteador;
- Declarar uma variável do tipo *array* para representar uma lista;
- Adicionar um elemento a um array com a função `push`;
- Utilizar um código já desenvolvido por terceiros para realizar o sorteio de um número aleatório dentro de um intervalo.
- Declarar um bloco condicional *if/else* para implementar a funcionalidade de alterar o status do botão *Reiniciar*.
- Acessar a lista de classes que um elemento da página possui, via propriedade *classList*;
- Verificar se um elemento da página possui uma determinada classe CSS, via função `classList.contains()`;
- Remover uma classe CSS de um elemento da página, via função `classList.remove()`;
- Adicionar uma classe CSS a um elemento da página, via função `classList.add()`;
- Modificar o código HTML de um elemento na página, via propriedade `innerHTML`.

## Código
```js
function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    if (de >= ate) {
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
        return;
    }

    if (quantidade > (ate - de + 1)) {
        alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
        return;
    }
    

    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);

        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
            alert('Tentando obter número inédito');
        }

        sorteados.push(numero);
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;

    alterarStatusBotao();
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');

    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>`;
    alterarStatusBotao();
}
```

## Para saber mais: Relembrando as diferenças entre HTML, CSS E JS
Para praticar lógica de programação de forma interessante e visual, optamos por trazer projetos completos, que irão compor seu portfólio e fazer com que a sua experiência em desenvolvimento de aplicativos seja mais próxima ao que é feito no mercado de trabalho.
Sendo assim, os projetos apresentados sempre têm três arquivos distintos em sua composição: um com extensão *HTML*, outro com extensão *CSS* e outro com extensão *JS*.

## Para saber mais: Entendendo o DOM
Quando uma página da web é carregada em um navegador, esse navegador cria uma representação do **DOM** dessa página. Mas o que é esse DOM, afinal?
O DOM (*Document Object Model*) é uma representação da estrutura de um documento HTML, onde os elementos são organizados em uma árvore hierárquica e cada nó possui propriedades e métodos. Isso permite que desenvolvedores acessem, modifiquem, removam ou adicionem elementos e conteúdo HTML dinamicamente através de scripts.
É por isso que, em nosso código JavaScript, frequentemente acessamos o valor de um elemento na página por meio do objeto `document`, referenciando-o pelo identificador ou por outra propriedade. Um exemplo disso é o uso de `document.getElementById()`.
No artigo [O que é o DOM?](https://www.alura.com.br/artigos/o-que-e-o-dom), da Ellen Pimentel, você poderá aprofundar seu conhecimento sobre DOM e a forma de manipulá-lo.

## Para saber mais: A função Math.random()
A função `Math.random()` em JavaScript é uma função integrada que gera um número pseudoaleatório decimal entre 0 (inclusivo) e 1 (exclusivo). Isso significa que o número gerado estará em um intervalo de [0, 1), onde 0 é incluído, mas 1 não é.
Quando você chama `Math.random()`, obtém um número aleatório como resultado. Exemplo de código:
``` js
let numeroAleatorio = Math.random();
console.log(numeroAleatorio); // Isso imprimirá um número aleatório entre 0 (inclusivo) e 1 (exclusivo)
```

Esse recurso é frequentemente utilizado em diversas aplicações para gerar números aleatórios que podem ser usados em jogos, simulações, sorteios, geração de senhas aleatórias, entre outras funcionalidades onde a aleatoriedade é necessária.
Para criar números aleatórios em um intervalo diferente de [0, 1), você pode manipular o resultado de `Math.random()` multiplicando-o e adicionando valores conforme necessário, exatamente como fizemos em vídeo no nosso projeto **Sorteador de números**.
Para saber mais sobre essa função, não deixe de ler o artigo [A função `Math.random()` no JavaScript na criação de números pseudoaleatórios](https://www.alura.com.br/artigos/funcao-math-random-javascript-numeros-pseudoaleatorios), que contém exemplos de utilização e manipulação do valor.

---

# 2. Projeto AluGames: O que aprendemos?
- Analisar o código de uma página HTML para entender sua estrutura e planejar o código de sua funcionalidade;
- Recuperar elementos da página com JavaScript, com o uso das funções `document.querySelector()` e `document.getElementById()`;
- Declarar variáveis no JavaScript para armazenar elementos recuperados da página;
- Acessar a lista de classes que um elemento da página possui, via propriedade **classList**;
- Verificar se um elemento da página possui uma determinada classe CSS, via função `classList.contains()`;
- Remover uma classe CSS de um elemento da página, via função `classList.remove()`;
- Adicionar uma classe CSS a um elemento da página, via função `classList.add()`;
- Alterar o texto de um elemento da página, via propriedade **textContent**;
- Declarar um bloco condicional **if/else**, para implementar a funcionalidade de alterar o status de um jogo.

## Código
```js
let jogosAlugados = 0;

function contarEExibirJogosAlugados() {
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}

function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');

    if (imagem.classList.contains('dashboard__item__img--rented')) {
    // Adiciona uma confirmação antes de devolver o jogo
        if (confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)) {
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';

            jogosAlugados--;
        }
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        jogosAlugados++;
    }

    contarEExibirJogosAlugados();
}

// Inicializa a contagem considerando que os jogos já começam alugados
document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();
});

function ordenarNumeros(a, b, c) {
    const numerosOrdenados = [a, b, c].sort((x, y) => x - y);
    console.log(`Números ordenados: ${numerosOrdenados.join(', ')}`);
}
```

---

# 3. Projeto Carrinho de Compras: O que aprendemos?
- Utilizar a função `split()` no JavaScript, para separar trechos de uma String por um determinado delimitador;
- Recuperar valores digitados em campos de um formulário na página, via propriedade `value`;
- Modificar o código HTML de um elemento na página, via propriedade `innerHTML`;
- Utilizar o recurso de *Template String* do JavaScript, para concatenar valores de variáveis em String.

## Código
```js
let valorTotal = 0;
limpar();

function adicionar() {
    // Recuperar valores, nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];;
    let quantidadeProduto = document.getElementById('quantidade').value;

    // Verificar se a quantidade inserida é válida
    if (isNaN(quantidadeProduto) || quantidadeProduto <= 0 || quantidadeProduto > 100) {
        alert("Insira uma quantidade válida!");
        return;
    }

    // Calcular o subtotal
    let subtotal = quantidadeProduto * valorUnitario;

    // Adicionar no carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidadeProduto}x</span> ${nomeProduto} <span class="texto-azul">R$ ${subtotal}</span>
    </section>`;

    // Atualizar o valor total
    valorTotal = valorTotal + subtotal;
    let total = document.getElementById('valor-total');
    total.textContent = `R$ ${valorTotal}`;

    // Limpar quantidade
    document.getElementById('quantidade').value = 0;
}

function limpar() {
    valorTotal = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'R$ 0';
}
```

---

# 4. Projeto Ingresso Online: O que aprendemos?
- Utilizar a função `parseInt` no JavaScript, para converter um valor do tipo String para um número inteiro;
- Escrever o código de funcionalidades em funções separadas;
- Utilizar um bloco condicional para determinar qual função deve ser chamada, de acordo com o valor armazenado em uma variável.
## Código
```js
function comprar() {
    let tipo = document.getElementById('tipo-ingresso');
    let quantidade = parseInt(document.getElementById('qtd').value);

    // Validação
    if (isNaN(quantidade) || quantidade <= 0) {
        alert('Por favor, insira uma quantidade válida!');
        return;
    }

    if (tipo.value == 'pista') {
        comprarPista(quantidade);
    } else if (tipo.value == 'superior') {
        comprarSuperior(quantidade);
    } else {
        comprarInferior(quantidade);
    }
}

function comprarPista(quantidade) {
    let quantidadePista = parseInt(document.getElementById('qtd-pista').textContent);

    if (quantidade > quantidadePista) {
        alert('Quantidade indisponível para esse tipo de pista!');
    } else {
        quantidadePista = quantidadePista - quantidade;
        document.getElementById('qtd-pista').textContent = quantidadePista;
        alert('Compra realizada com sucesso!');
    }
}

function comprarSuperior(quantidade) {
    let quantidadeSuperior = parseInt(document.getElementById('qtd-superior').textContent);

    if (quantidade > quantidadeSuperior) {
        alert('Quantidade indisponível para esse tipo de superior!');
    } else {
        quantidadeSuperior = quantidadeSuperior - quantidade;
        document.getElementById('qtd-superior').textContent = quantidadeSuperior;
        alert('Compra realizada com sucesso!');
    }
}

function comprarInferior(quantidade) {
    let quantidadeInferior = parseInt(document.getElementById('qtd-inferior').textContent);

    if (quantidade > quantidadeInferior) {
        alert('Quantidade indisponível para esse tipo de inferior!');
    } else {
        quantidadeInferior = quantidadeInferior - quantidade;
        document.getElementById('qtd-inferior').textContent = quantidadeInferior;
        alert('Compra realizada com sucesso!');
    }
}
```

---

# 5. Projeto Amigo Secreto: O que aprendemos?
- Declarar uma variável do tipo array para representar uma lista;
- Adicionar um elemento a um array com a função `push`;
- Utilizar um código já desenvolvido por terceiros, para realizar o embaralhamento de elementos em um array.

## Código
```js
let amigos = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    let listaDeAmigos = document.getElementById('lista-amigos');
    amigos.push(amigo.value);

    if (listaDeAmigos.textContent == '') {
        listaDeAmigos.textContent = amigo.value;
    } else {
        listaDeAmigos.textContent = listaDeAmigos.textContent + ', ' + amigo.value;
    }

    amigo.value = '';
}

function sortear() {
    embaralhar(amigos);
    let sorteio = document.getElementById('lista-sorteio');

    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '->' + amigos[0] + '<br>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '->' + amigos[i + 1] + '<br>';
        }
        
    }
}

function embaralhar(lista) {
    for (let indice = lista.lenght; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random * indice);
        
        // Atribuição via dustructuring
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio]], lista[indice -1 ];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}
```

---

# 6. Desafios complementares: O que aprendemos?
- Realizar validações das informações, com o uso de condicionais;
- Interromper a execução de uma função, com o uso do `return`;
- Obter o número de elementos em um array, com a propriedade `length`;
- Checar se um elemento existe em um array, com o uso da função `includes`.

## Código
```js
let amigos = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo');

    // Validação nome em branco
    if (amigo.value == ''){
        alert('Informe o nome do amigo!');
        return;
    }

    // Validação nome repetido
    if (amigo.includes(amigos.value)){
        alert('Nome já informado!');
        return;
    }

    let listaDeAmigos = document.getElementById('lista-amigos');
    amigos.push(amigo.value);

    if (listaDeAmigos.textContent == '') {
        listaDeAmigos.textContent = amigo.value;
    } else {
        listaDeAmigos.textContent = listaDeAmigos.textContent + ', ' + amigo.value;
    }

    amigo.value = '';
}

function sortear() {
    // Validação número de amigos
    if (amigos.length < 4){
        alert('Adicione ao menos 4 amigos!');
        return;
    }

    embaralhar(amigos);
    let sorteio = document.getElementById('lista-sorteio');

    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '->' + amigos[0] + '<br>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '->' + amigos[i + 1] + '<br>';
        }
        
    }
}

function embaralhar(lista) {
    for (let indice = lista.lenght; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random * indice);
        
        // Atribuição via dustructuring
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio]], lista[indice -1 ];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}
```

---

# Referências
### 1. [Lógica de Programação Crie seus primeiros programas usando Javascript e HTML](https://www.casadocodigo.com.br/products/livro-programacao?_pos=1&_sid=4661f8240&_ss=r)
`Este livro apresenta uma abordagem totalmente prática. Uma didática pensada no iniciante, com a qual os conceitos são apresentados com motivações práticas, através do surgimento da necessidade para depois mostrar a solução.`

### 2. [Lógica de programação com Portugol](https://www.casadocodigo.com.br/products/livro-portugol?_pos=2&_sid=4661f8240&_ss=r)
`Neste livro, Joice Mendes e Rafael Muniz apresentam todos os conceitos necessários para a criação da lógica de programação e dos algoritmos. Você vai aprimorar sua percepção lógica e aprender a aplicá-la na programação, cobrindo tópicos desde a sintaxe do Portugol, variáveis, comandos, estruturas condicionais, operadores relacionais e lógicos, estruturas de repetição, até vetores, matrizes e funções. O material é recheado com 85 exemplos de código, 55 exercícios de fixação com gabarito e um projeto prático ao longo do aprendizado. Todos os capítulos contam com um vídeo complementar disponibilizado na internet.`

### 3. [Livro: "Estruturas de Dados e Algoritmos com JavaScript"](https://www.google.com.br/books/edition/Estruturas_de_dados_e_algoritmos_com_Jav/0nWKDwAAQBAJ?hl=pt-BR&gbpv=1&dq=estrutura+de+dados+javascript&printsec=frontcover)
`Este livro aborda de forma detalhada as estruturas de dados e algoritmos mais comuns, fornecendo exemplos práticos em JavaScript.`

### 4. [Site: MDN Web Docs](https://developer.mozilla.org/pt-BR/)
`A documentação oficial da Mozilla Developer Network (MDN) é uma excelente fonte de informações sobre JavaScript. Lá você encontrará explicações detalhadas sobre a sintaxe, recursos da linguagem e exemplos de código.`

### 5. [Eloquent JavaScript 3rd edition (2018)](https://eloquentjavascript.net/)
`Este é um livro sobre JavaScript, programação e as maravilhas do mundo digital. Um guia essencial para toda a pessoa desenvolvedora web. Em inglês.`

### 6. [Alura+ Funções no JavaScript que você precisa conhecer](https://cursos.alura.com.br/extra/alura-mais/funcoes-no-javascript-que-voce-precisa-conhecer-c1503)
`Neste Alura+, o instrutor Luan Alves ensina as especificidades das funções: function declaration e function expression no JavaScript, realizando um desafio de checagem de palavras palíndromas.`

### 7. [Algoritmos - Teoria e Prática, Thomas H. Cormen](https://books.google.com.br/books/about/Algoritmos_Teoria_e_Pr%C3%A1tica.html?id=6iA4LgEACAAJ&source=kp_book_description&redir_esc=y)
`Este livro apresenta um texto abrangente sobre o moderno estudo de algoritmos para computadores. É uma obra clássica, cuja primeira edição tornou-se amplamente adotada nas melhores universidades em todo o mundo, bem como padrão de referência para profissionais da área.`

### 8. [JavaScript: O Guia Definitivo](https://www.amazon.com.br/JavaScript-Guia-Definitivo-David-Flanagan/dp/856583719X/ref=sr_1_1?keywords=javascript&qid=1701835643&sr=8-1&ufe=app_do%3Aamzn1.fos.6121c6c4-c969-43ae-92f7-cc248fc6181d)
`Referência completa para programadores, JavaScript: O guia definitivo fornece uma ampla descrição da linguagem JavaScript básica e das APIs JavaScript do lado do cliente definidas pelos navegadores Web. Recomendado para programadores experientes que desejam aprender a linguagem de programação da Web e para programadores JavaScript que desejam ampliar seus conhecimentos e dominar a linguagem, este é o guia do programador e manual de referência de JavaScript completo e definitivo.`