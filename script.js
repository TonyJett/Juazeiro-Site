// Adicionando um evento de clique ao botão
document.getElementById('abrirFormulario').addEventListener('click', function () {
    openContactModal();
});

function openContactModal() {
    const contactModal = document.getElementById('contact-modal');
    contactModal.style.display = 'block';
    $(".navbar-toggler").click();
}

function closeContactModal() {
    const contactModal = document.getElementById('contact-modal');
    contactModal.style.display = 'none';
}
function redirectToDiscord() {
    window.location.href = "https://discord.gg/JxwccEUR";
}
function redirectToInstagram() {
    window.location.href = "https://www.instagram.com/juazeiroesports.gg/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==";
}
function redirectToContutec(){
    window.location.href = "https://www.lojacondutec.com/material-eletrico-oferta/?gclid=CjwKCAiAg9urBhB_EiwAgw88mWL_d-w8wv1Dy3e-t1O_HHRXKJCdB1NEbGEx8n2lSFLID4xfm7dJShoCU4UQAvD_BwE"
}