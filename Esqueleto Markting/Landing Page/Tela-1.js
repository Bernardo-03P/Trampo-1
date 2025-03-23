// Tela-1.js

// Função para validar e enviar o formulário
document.addEventListener('DOMContentLoaded', function () {
    const formSection = document.querySelector('.form-section');
    const emailInput = document.getElementById('email');
    const whatsappInput = document.getElementById('whatsapp');
    const submitButton = formSection.querySelector('button[type="submit"]');

    submitButton.addEventListener('click', function (event) {
        event.preventDefault(); // Evitar o envio padrão do formulário

        const email = emailInput.value.trim();
        const whatsapp = whatsappInput.value.trim();

        if (validateEmail(email) && validateWhatsApp(whatsapp)) {
            alert('Formulário enviado com sucesso!'); // Mensagem de sucesso
            // Aqui você pode adicionar a lógica para enviar os dados para o servidor
            emailInput.value = ''; // Limpar o campo de e-mail
            whatsappInput.value = ''; // Limpar o campo de WhatsApp
        } else {
            alert('Por favor, preencha o formulário corretamente.'); // Mensagem de erro
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex para validar e-mail
        return re.test(email);
    }

    function validateWhatsApp(whatsapp) {
        const re = /^\d{10,11}$/; // Regex para validar WhatsApp (10 ou 11 dígitos)
        return re.test(whatsapp);
    }
});

// Função para interatividade dos botões "Ver mais"
document.querySelectorAll('.card button').forEach(button => {
    button.addEventListener('click', function () {
        const cardTitle = this.parentElement.querySelector('h3').innerText;
        alert(`Você clicou em "Ver mais" sobre: ${cardTitle}`); // Exibir título do card
        // Aqui você pode redirecionar ou abrir uma nova página, se necessário
    });
});

// Exibir mensagem ao clicar em "Curtindo" ou "Compartilhar"
document.querySelectorAll('header button').forEach(button => {
    button.addEventListener('click', function () {
        const action = this.innerText.toLowerCase();
        alert(`Você clicou em ${action}.`); // Mensagem de ação
    });
});