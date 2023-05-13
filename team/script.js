const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const pageBtns = document.querySelectorAll('.page-btn');
const mainInfo = document.querySelector('.main-info');

let currentPage = 0;

function displayPage(pageNumber) {
    mainInfo.innerHTML = '';
    const pageContent = `
        <h2>Page ${pageNumber + 1}</h2>
        <p>ESP32 est une série de microcontrôleurs de type système sur une puce (SoC) d'Espressif Systems, basé sur l'architecture Xtensa LX6 de Tensilica (en), intégrant la gestion du Wi-Fi et du Bluetooth (jusqu'à LE 5.0 et 5.11) en mode double, et un DSP. C'est une évolution d'ESP8266. Le principal outil de développement est ESP-IDF, logiciel libre développé par Espressif, écrit en C et utilisant le système temps réel FreeRTOS. Il intègre un nombre important de bibliothèques et on retrouve dans son écosystème des bibliothèques tierce libres pour différents types de périphériques liés à l'embarqué et au temps réel.</p>
        <h1>Caractéristiques techniques:</h1>
        <ul>
            <li><strong>Processeurs:</strong> Xtensa double-cœur (ou simple-cœur), microprocesseur LX 32 bits, fonctionnant à 160 ou 240 MHz et fournissant jusqu'à 600 DMIPS</li>
            <br>
            <li><strong>Mémoire: </strong>520 KiO SRAM ;</li>
            <br>
            <li><strong>Connectivité sans-fil: </strong>
                <ul>
                    <li>Wi-Fi : 802.11 b/g/n ;</li>
                    <li>Bluetooth : v 4.2 BR/EDR et BLE jusqu'à v 5.0 et v 5.1 ;</li>
                </ul>
            </li>
        </ul>
    `;
    mainInfo.insertAdjacentHTML('beforeend', pageContent);
}

function handlePageClick(event) {
    const clickedPage = Number(event.target.dataset.page);
    currentPage = clickedPage;
    displayPage(currentPage);
    updatePagination();
}

function handlePrevClick() {
    if (currentPage > 0) {
        currentPage--;
        displayPage(currentPage);
        updatePagination();
    }
}

function handleNextClick() {
    if (currentPage < pageBtns.length - 1) {
        currentPage++;
        displayPage(currentPage);
        updatePagination();
    }
}

function updatePagination() {
    for (let i = 0; i < pageBtns.length; i++) {
        if (i === currentPage) {
            pageBtns[i].classList.add('active');
        } else {
            pageBtns[i].classList.remove('active');
        }
    }
}

for (let i = 0; i < pageBtns.length; i++) {
    pageBtns[i].addEventListener('click', handlePageClick);
}

prevBtn.addEventListener('click', handlePrevClick);
nextBtn.addEventListener('click', handleNextClick);

displayPage(currentPage);
updatePagination();
