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