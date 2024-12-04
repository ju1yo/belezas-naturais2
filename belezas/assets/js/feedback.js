// Função para validar o formulário
function validateForm(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Limpar mensagens de erro e sucesso
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('messageError').textContent = '';
    document.getElementById('formSuccess').textContent = '';

    let isValid = true;

    // Validar Nome
    const name = document.getElementById('name').value;
    if (name.trim() === '') {
        document.getElementById('nameError').textContent = 'O nome é obrigatório.';
        isValid = false;
    }

    // Validar E-mail
    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email.trim() === '') {
        document.getElementById('emailError').textContent = 'O e-mail é obrigatório.';
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Por favor, insira um e-mail válido.';
        isValid = false;
    }

    // Validar Mensagem
    const message = document.getElementById('message').value;
    if (message.trim() === '') {
        document.getElementById('messageError').textContent = 'A mensagem é obrigatória.';
        isValid = false;
    }

    // Se todas as validações passarem, exibir sucesso
    if (isValid) {
        document.getElementById('formSuccess').textContent = 'Seu feedback foi enviado com sucesso! Agradecemos sua opinião.';
        document.getElementById('feedbackForm').reset(); // Limpar o formulário
    }
}

// Associar o evento de envio do formulário
document.getElementById('feedbackForm').addEventListener('submit', validateForm);