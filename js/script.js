// cria função addTarefa com o parâmetro: período
function adicionarTarefa(periodo) {
    // cria variaveis 
    var ul = document.getElementById('tarefas-' + periodo);
    var novaTarefa = prompt('Digite a nova tarefa:');

    // Verifica se o usuário inseriu algo
    if (novaTarefa !== null && novaTarefa.trim() !== '') {
        var li = document.createElement('li'); // cria um li
        li.textContent = novaTarefa; // preenche com o texto da variável novaTarefa

        // Adiciona botão de remoção
        var botaoRemover = document.createElement('button');
        botaoRemover.textContent = 'Remover Tarefa';
        botaoRemover.className = 'botao-remover';  // Adiciona a classe ao botão
        botaoRemover.onclick = function() {
            ul.removeChild(li);
        };
        
        li.appendChild(botaoRemover);
        ul.appendChild(li);
    } else {
        alert('Por favor, insira uma tarefa válida.');
    }
}