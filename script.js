document.getElementById('logForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Limites
    const limites = {
        fuzil: 1,
        municoes_fuzil: 200,
        colete_meta_fuzil: 3,
        cocaina_fuzil: 5,
        radio_fuzil: 1,
        pistola: 1,
        municoes_pistola: 80
    };

    // Coletar valores do formulário
    const valores = {
        fuzil: parseInt(document.getElementById('fuzil').value),
        municoes_fuzil: parseInt(document.getElementById('municoes_fuzil').value),
        colete_meta_fuzil: parseInt(document.getElementById('colete_meta_fuzil').value),
        cocaina_fuzil: parseInt(document.getElementById('cocaina_fuzil').value),
        radio_fuzil: parseInt(document.getElementById('radio_fuzil').value),
        pistola: parseInt(document.getElementById('pistola').value),
        municoes_pistola: parseInt(document.getElementById('municoes_pistola').value)
    };

    // Verificar limites
    let caixa2 = false;
    let excedidos = [];

    for (let item in limites) {
        if (valores[item] > limites[item]) {
            caixa2 = true;
            excedidos.push(item);
        }
    }

    // Exibir resultado
    const resultadoDiv = document.getElementById('resultado');
    if (caixa2) {
        resultadoDiv.innerHTML = `<strong>Caixa2!</strong> Os seguintes itens excederam os limites: ${excedidos.join(', ')}.`;
        resultadoDiv.style.backgroundColor = '#f8d7da';
        resultadoDiv.style.borderColor = '#f5c6cb';
    } else {
        resultadoDiv.innerHTML = `<strong>Retirada dentro dos limites.</strong>`;
        resultadoDiv.style.backgroundColor = '#d4edda';
        resultadoDiv.style.borderColor = '#c3e6cb';
    }
});