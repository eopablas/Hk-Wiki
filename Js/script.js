// Seleciona os elementos do DOM
const formComentario = document.getElementById('form-comentario');
const textarea = document.getElementById('texto-comentario');
const comentsDiv = document.getElementById('coments');

// Função para carregar comentários do localStorage
function carregarComentarios() {
    const comentarios = JSON.parse(localStorage.getItem('comentarios') || '[]');
    comentarios.forEach(c => criarComentarioNaTela(c));
}

// Função para criar um comentário na tela
function criarComentarioNaTela({ usuario, texto }) {
    const mensagem = document.createElement('div');
    mensagem.classList.add('mensagem', 'usuario');
    mensagem.innerHTML = `<strong>${usuario}:</strong> ${texto}`;
    comentsDiv.appendChild(mensagem);
}

// Evento de submit do formulário
formComentario.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Pega usuário logado
    const usuarioLogado = localStorage.getItem('usuarioLogado');
    if (!usuarioLogado) {
        alert('Você precisa estar logado para comentar!');
        return;
    }

    const texto = textarea.value.trim();
    if (texto === '') return;

    const comentario = {
        usuario: usuarioLogado,
        texto
    };

    // Salva no localStorage
    const comentarios = JSON.parse(localStorage.getItem('comentarios') || '[]');
    comentarios.push(comentario);
    localStorage.setItem('comentarios', JSON.stringify(comentarios));

    // Adiciona na tela
    criarComentarioNaTela(comentario);

    // Limpa o textarea
    textarea.value = '';
});

// Carrega comentários ao iniciar
carregarComentarios();
