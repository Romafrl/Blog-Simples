document.addEventListener('DOMContentLoaded', () => {
    const toggleThemeBtn = document.getElementById('toggle-theme-btn');
    const body = document.body;

    // Função para alternar o tema e o ícone
    function toggleTheme() {
        body.classList.toggle('dark-theme');
        body.classList.toggle('light-theme');

        const icon = toggleThemeBtn.querySelector('i');
        if (body.classList.contains('dark-theme')) {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        } else {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }

        // Reaplicar animações
        const header = document.querySelector('header');
        const articles = document.querySelectorAll('article');
        const footer = document.querySelector('footer');

        header.classList.remove('animate__fadeInDown');
        void header.offsetWidth; // Força o reflow para reiniciar a animação
        header.classList.add('animate__fadeInDown');

        articles.forEach(article => {
            article.classList.remove('animate__fadeInUp');
            void article.offsetWidth; // Força o reflow para reiniciar a animação
            article.classList.add('animate__fadeInUp');
        });

        footer.classList.remove('animate__fadeInUp');
        void footer.offsetWidth; // Força o reflow para reiniciar a animação
        footer.classList.add('animate__fadeInUp');
    }

    // Adicionar o listener de clique ao botão
    toggleThemeBtn.addEventListener('click', toggleTheme);
});
