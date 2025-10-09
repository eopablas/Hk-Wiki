// Seleciona formulários
const registroForm = document.querySelector('#registro form');
const loginForm = document.querySelector('#login form');

// Função para salvar usuário
function salvarUsuario(nome, email, senha) {
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');

    // Verifica se já existe usuário
    if (usuarios.some(u => u.nome === nome)) {
        return false;
    }

    usuarios.push({ nome, email, senha });
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    return true;
}

// Função para logar usuário
function logarUsuario(nome, senha) {
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    const user = usuarios.find(u => u.nome === nome && u.senha === senha);
    if (user) {
        localStorage.setItem('usuarioLogado', user.nome);
        return true;
    }
    return false;
}

// Evento de registro
registroForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('usuario').value.trim();
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha-reg').value.trim();

    if (salvarUsuario(nome, email, senha)) {
        alert('Conta criada com sucesso! Você já está logado.');
        localStorage.setItem('usuarioLogado', nome);
        window.location.href = 'index.html'; // Redireciona para a wiki
    } else {
        alert('Usuário já existe. Escolha outro nome.');
    }
});

// Evento de login
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('usuario-login').value.trim();
    const senha = document.getElementById('senha-login').value.trim();

    if (logarUsuario(nome, senha)) {
        alert('Login efetuado com sucesso!');
        window.location.href = 'index.html'; // Redireciona para a wiki
    } else {
        alert('Usuário ou senha incorretos!');
    }
});
