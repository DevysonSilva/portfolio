const shadow = true;
  document.addEventListener('DOMContentLoaded', () => {
  // MENU
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav a'); // Seleciona todos os links do menu

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open'); // Fecha o menu ao clicar em um link
  });
});

  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  // FORMULÁRIO
  const form = document.getElementById("meu-formulario");
  const message = document.getElementById("form-message");

  emailjs.init("lLiLdv2wKNtAHuMoK"); // Public Key

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm(
      "service_2xoltvh",
      "template_7c70kip",
      form
    ).then(
      function () {
        message.textContent = "Obrigado! Responderei o mais breve possível.";
        message.classList.add("show");
        form.reset();
      },
      function (error) {
        alert("Ocorreu um erro ao enviar a mensagem.");
        console.log("Erro:", error);
      }
    );

    // Oculta a mensagem após 5 segundos
    setTimeout(() => {
      message.classList.remove("show");
      message.textContent = "";
    }, 5000);
  });
});
