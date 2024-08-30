function efectoHabilidades() {
    let skills = document.getElementById("skills");
    let distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;

    if (distancia_skills >= 300) {
        let habilidades = document.querySelectorAll(".progreso");

        habilidades.forEach(function (barraSkill) {
            let percent = barraSkill.getAttribute("data-percent");
            barraSkill.style.width = percent + "%";
        });
    }
}

// Detecta el scrolling para aplicar la animación de la barra de habilidades
window.addEventListener("scroll", efectoHabilidades);

document.addEventListener('DOMContentLoaded', () => {
    // Obtener el botón de alternar modo oscuro
    const toggleButton = document.getElementById('dark-mode-toggle');

    // Verificar la preferencia guardada en localStorage y aplicar el modo correspondiente
    if (localStorage.getItem('darkMode') === 'enabled') {
        // Añadir la clase 'dark-mode' al cuerpo si está habilitado el modo oscuro
        document.body.classList.add('dark-mode');
    }

    // Función para alternar el modo oscuro
    const toggleDarkMode = () => {
        // Alternar la clase 'dark-mode' en el cuerpo
        document.body.classList.toggle('dark-mode');
        
        // Guardar la preferencia en localStorage
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    };

    // Añadir un event listener al botón para alternar el modo oscuro
    toggleButton.addEventListener('click', toggleDarkMode);
});

