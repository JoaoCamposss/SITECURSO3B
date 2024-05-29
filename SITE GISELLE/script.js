// Adicionando um evento de clique ao botão de enviar do formulário de contato
document.querySelector('form button[type="submit"]').addEventListener('click', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtendo os valores dos campos do formulário
    var nome = document.querySelector('form input[type="text"]').value;
    var email = document.querySelector('form input[type="email"]').value;
    var mensagem = document.querySelector('form textarea').value;

    // Exibindo os valores na console (poderia ser enviado para o servidor ou processado de outras maneiras)
    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Mensagem:', mensagem);

    // Limpando os campos do formulário
    document.querySelector('form input[type="text"]').value = '';
    document.querySelector('form input[type="email"]').value = '';
    document.querySelector('form textarea').value = '';

    alert('Mensagem enviada com sucesso!'); // Exibindo uma mensagem de alerta
});