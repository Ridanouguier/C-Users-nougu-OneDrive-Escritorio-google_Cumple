// script.js
document.getElementById("search-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const searchBox = document.getElementById("search-box");
    const warningMessage = document.getElementById("warning-message");

    // Verifica si el texto es exactamente "la reina del mundo"
    if (searchBox.value.toLowerCase().trim() === "la reina del mundo") {
        warningMessage.style.display = "none";
        launchBalloonsAndFireworks();
        setTimeout(loadImages, 4000); // Espera 4 segundos para cargar las imágenes
    } else {
        warningMessage.style.display = "block";
    }
});

function loadImages() {
    const imageResults = document.getElementById("image-results");
    imageResults.innerHTML = ''; // Limpiar resultados anteriores

    // URLs de imágenes personalizadas en formatos .jpg y .png
    const imageUrls = [
        "imagen1.jpg",
        "imagen2.png",
        "imagen3.jpg",
        "imagen4.png"
    ];

    imageUrls.forEach(url => {
        const img = document.createElement("img");
        img.src = url;
        img.alt = "La Reina del Mundo";
        imageResults.appendChild(img);
    });
}

function launchBalloonsAndFireworks() {
    const balloonsContainer = document.getElementById("balloons-container");
    const fireworksContainer = document.getElementById("fireworks-container");

    // Crear globos
    for (let i = 0; i < 20; i++) {
        const balloon = document.createElement("div");
        balloon.classList.add("balloon");
        balloon.style.left = Math.random() * 100 + "vw";
        balloon.style.backgroundColor = randomColor();
        balloonsContainer.appendChild(balloon);

        // Elimina el globo después de 4 segundos
        setTimeout(() => balloon.remove(), 4000);
    }

    // Crear fuegos artificiales
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const firework = document.createElement("div");
            firework.classList.add("firework");
            firework.style.left = Math.random() * 100 + "vw";
            firework.style.top = Math.random() * 100 + "vh";
            firework.style.backgroundColor = randomColor();
            fireworksContainer.appendChild(firework);

            // Eliminar el fuego artificial después de 1.5 segundos
            setTimeout(() => firework.remove(), 1500);
        }, i * 400);
    }
}

function randomColor() {
    const colors = ["#FF69B4", "#FF1493", "#FFD700", "#FF8C00", "#FFB6C1"];
    return colors[Math.floor(Math.random() * colors.length)];
}
