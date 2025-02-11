// JavaScript para gerenciar a navegação do SGA
document.addEventListener("DOMContentLoaded", function() {
    const homeBtn = document.getElementById("homeBtn");
    const novoBtn = document.getElementById("novoBtn");
    const historicoBtn = document.getElementById("historicoBtn");

    const pagina1 = document.getElementById("pagina1");
    const pagina2 = document.getElementById("pagina2");
    const pagina3 = document.getElementById("pagina3");

    // Função para ocultar todas as páginas
    function hideAllPages() {
        pagina1.style.display = "none";
        pagina2.style.display = "none";
        pagina3.style.display = "none";
    }

    // Função para mostrar a página selecionada
    function showPage(page) {
        hideAllPages();
        page.style.display = "block";
    }

    // Configurando os eventos de clique nos botões do menu
    homeBtn.addEventListener("click", function() {
        showPage(pagina1);
    });

    novoBtn.addEventListener("click", function() {
        showPage(pagina2);
    });

    historicoBtn.addEventListener("click", function() {
        showPage(pagina3);
    });

    // Mostrar a página inicial por padrão
    showPage(pagina1);
});