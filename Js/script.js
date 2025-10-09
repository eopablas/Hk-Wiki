// Estrutura de dados para os comentários (simulação)
const comentariosIniciais = [
    {
        usuario: "LittleGhost_101",
        texto: "A lore de Hollow Knight é simplesmente fantástica! Alguém já notou a conexão entre as Máscaras e a Dama Branca?",
        data: "2 dias atrás"
    },
    {
        usuario: "Hornet_Fan",
        texto: "Adorei a página de personagens! A Hornet é a melhor, mal posso esperar pelo Silksong!",
        data: "1 dia atrás"
    }
];

// Função para carregar e exibir os comentários
function carregarComentarios() {
    const comentsDiv = document.getElementById('coments');

    // 1. Cria o container para a lista de comentários
    let comentariosHTML = '<div id="lista-comentarios">';

    // 2. Adiciona os comentários iniciais (e os novos, se houver)
    comentariosIniciais.forEach(comentario => {
        comentariosHTML += `
            <div class="comentario-item">
                <span class="comentario-usuario">${comentario.usuario}</span>
                <span class="comentario-data">${comentario.data}</span>
                <p class="comentario-texto">${comentario.texto}</p>
            </div>
        `;
    });

    comentariosHTML += '</div>';

    // 3. Insere a nova lista **ANTES** do formulário de comentário
    // Isso garante que o formulário permaneça para novas publicações
    const formComentario = document.getElementById('form-comentario');
    if (comentsDiv && formComentario) {
        // Verifica se a lista já existe para não duplicar
        if (!document.getElementById('lista-comentarios')) {
            comentsDiv.insertBefore(
                document.createRange().createContextualFragment(comentariosHTML),
                formComentario
            );
        }
    }
}


// Função para lidar com a publicação de um novo comentário
function handlePublicarComentario(event) {
    // 1. Evita o envio padrão do formulário
    event.preventDefault();

    const textarea = document.getElementById('texto-comentario');
    const textoComentario = textarea.value.trim();

    if (textoComentario === "") {
        alert("Por favor, escreva um comentário antes de publicar.");
        return;
    }

    // Opcional: Simular a adição de um novo comentário (apenas no frontend)
    // Para simplificar, vou apenas limpar o formulário conforme pedido:

    // 2. Limpa o formulário (textarea)
    textarea.value = ""; 
    
    // 3. Opcional: Feedback ao usuário
    console.log("Comentário publicado (simulado):", textoComentario);
    alert("Comentário publicado! (Apenas simulação, os dados não foram salvos)");

    // Em um cenário real, você enviaria o comentário para o servidor,
    // esperaria a resposta e depois atualizaria a lista de comentários.
}


document.addEventListener('DOMContentLoaded', () => {
    carregarComentarios();
    
    // Adiciona o listener para a submissão do formulário de comentário
    const formComentario = document.getElementById('form-comentario');
    if (formComentario) {
        formComentario.addEventListener('submit', handlePublicarComentario);
    }
});