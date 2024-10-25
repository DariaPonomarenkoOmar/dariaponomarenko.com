// script.js

function openImage(src) {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modalImage");

    modal.style.display = "flex"; // Показати модальне вікно
    modalImage.src = src; // Встановити зображення в модальному вікні
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none"; // Сховати модальне вікно
}

// Закриття модального вікна при натисканні поза зображенням
window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        closeModal();
    }
}