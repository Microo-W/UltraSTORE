// Array de imagens
let imagens = [
    "./src/assets/BloodIsFuel.jpg",
    "./src/assets/CyberGrind.jpg",
    "./src/assets/ULTRAKILL.jpg"
];

// Posição inicial das imagens
let index = 0;

// Tempo para trocar as imagens
let tempo = 3000; // 3 segundos

// Função do slideshow
function SlideShow() {

    // Pega o elemento pelo ID e coloca a imagem
    document.getElementById("imgBanner").src = imagens[index];

    // Incrementa a posição
    index++;

    // Se chegar ao final das imagens, volta para a primeira
    if (index == imagens.length) {
        index = 0;
    }

    // Chama a função novamente depois de 3 segundos
    setTimeout(SlideShow, tempo);
}

// Executa o slideshow
SlideShow();


// MENU HAMBÚRGUER

const menuIcone = document.getElementById("menu-icone");
const navMenu = document.getElementById("nav-menu");

menuIcone.addEventListener("click", () => {

    navMenu.classList.toggle("active");
    menuIcone.classList.toggle("open");

});

