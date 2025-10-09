// Função para simular o Registro
function handleRegistro(event) {
    // 1. Evita o envio padrão do formulário (que recarrega a página)
    event.preventDefault();

    // 2. Opcional: Coletar dados (para um back-end real)
    const usuario = document.getElementById('usuario').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha-reg').value;

    console.log(`Tentativa de Registro: Usuário: ${usuario}, Email: ${email}`);

    // 3. Simula a tela de "Cadastro Realizado"
    const container = document.querySelector('.container-formularios');
    
    // Cria o novo conteúdo de sucesso
    const sucessoHTML = `
        <div class="form-box" style="text-align: center; animation: go-back 0.8s;">
            <h1>Cadastro Realizado!</h1>
            <p style="color: white; margin-bottom: 30px; font-size: 1.1rem;">
                Sua conta foi criada com sucesso. Bem-vindo(a)!
            </p>
            <a href="index.html" class="btn-form" style="display: block; text-decoration: none;">
                Voltar para a Wiki
            </a>
        </div>
    `;

    // Substitui o conteúdo do container
    container.innerHTML = sucessoHTML;
    
    // Opcional: Oculta o botão de Voltar para a Wiki que fica no canto
    document.querySelector('.btn-voltar').style.display = 'none';
}

// Função para simular o Login
function handleLogin(event) {
    // 1. Evita o envio padrão do formulário
    event.preventDefault();

    // 2. Opcional: Coletar dados
    const usuarioLogin = document.getElementById('usuario-login').value;
    const senhaLogin = document.getElementById('senha-login').value;

    console.log(`Tentativa de Login: Usuário: ${usuarioLogin}`);

    // 3. Redireciona para a tela principal (Volta à Wiki)
    window.location.href = "index.html"; 
    // Em um sistema real, você faria uma requisição ao servidor antes de redirecionar.
}

// Adiciona os event listeners aos formulários
document.addEventListener('DOMContentLoaded', () => {
    // Seleciona os formulários (pode ser o pai <form> ou o botão se for o único submit)
    const formRegistro = document.querySelector('#registro form');
    const formLogin = document.querySelector('#login form');

    if (formRegistro) {
        formRegistro.addEventListener('submit', handleRegistro);
    }

    if (formLogin) {
        formLogin.addEventListener('submit', handleLogin);
    }
});