function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;

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

