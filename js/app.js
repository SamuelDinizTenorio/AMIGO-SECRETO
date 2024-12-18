// Cria um array vazio para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionar() {
    // Obtém o elemento de input onde o usuário digita o nome do amigo
    let amigo = document.getElementById("nome-amigo");
    // Obtém o elemento da lista onde os nomes dos amigos serão exibidos
    let listaAmigos = document.getElementById("lista-amigos");

    // Verifica se o campo de nome está vazio
    if (amigo.value == "") {
        // Exibe um alerta caso o campo esteja vazio
        alert("Insira o nome de um amigo!");
        // Interrompe a função
        return;
    }

    // Verifica se o amigo já foi adicionado à lista
    if (amigos.includes(amigo.value)) {
        // Exibe um alerta caso o amigo já esteja na lista
        alert("Amigo já foi incluído no sorteio!");
        // Interrompe a função
        return;
    }

    // Adiciona o nome do amigo ao array
    amigos.push(amigo.value);
    // Verifica se a lista de amigos está vazia
    if (listaAmigos.innerHTML == "") {
        // Se estiver vazia, adiciona o nome diretamente
        listaAmigos.innerHTML = amigo.value;
    } else {
        // Se não estiver vazia, adiciona uma vírgula e o nome
        listaAmigos.innerHTML += ", " + amigo.value;
    }
    // Limpa o campo de input
    amigo.value = "";
}

// Função para realizar o sorteio
function sortear() {
    // Verifica se há pelo menos 4 amigos na lista
    if (amigos.length <= 3) {
        // Exibe um alerta caso não haja amigos suficientes
        alert("Adicione pelo menos 4 amigos!");
        // Interrompe a função
        return;
    }

    // Embaralha a lista de amigos
    embaralha(amigos);
    // Obtém o elemento da lista onde o resultado do sorteio será exibido
    let sorteio = document.getElementById("lista-sorteio");

    // Percorre a lista de amigos e cria as combinações
    for (let i = 0; i < amigos.length; i++) {
        // Verifica se é o último elemento da lista
        if (i == amigos.length - 1) {
            // Se for, conecta o último elemento com o primeiro
            sorteio.innerHTML += amigos[i] + ` --> ` + amigos[0];
        } else {
            // Se não for, conecta o elemento atual com o próximo
            sorteio.innerHTML += amigos[i] + ` --> ` + amigos[i + 1] + `<br>`;
        }
    }
}

// Função para reiniciar o sorteio
function reiniciar() {
    // Limpa o array de amigos e as listas de exibição
    amigos = [];
    document.getElementById("lista-amigos").innerHTML = "";
    document.getElementById("lista-sorteio").innerHTML = "";
}

// Função para embaralhar um array
function embaralha(lista) {
    // Algoritmo de Fisher-Yates para embaralhar um array
    for (let indice = lista.length; indice; indice--) {
        // Gera um índice aleatório
        const indiceAleatorio = Math.floor(Math.random() * indice);
        // Troca os elementos de posição
        [lista[indice - 1], lista[indiceAleatorio]] =
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}