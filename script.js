// Exemplo de interatividade: Alerta ao clicar em um projeto
document.querySelectorAll('.projeto').forEach(projeto => {
    projeto.addEventListener('click', () => {
        alert('Você clicou em um projeto!');
    });
});