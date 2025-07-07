function adicionarCarrinho(produto) {
    alert(produto + " adicionado ao carrinho!");
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formContato");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Cadastro realizado com sucesso!");
        });
    }

    const carrossel = document.getElementById("carrossel-produtos");
    const container = document.getElementById("carrossel-container");

    if (carrossel && container) {
        carrossel.innerHTML += carrossel.innerHTML;
        iniciarCarrossel(container);
    }
});

function scrollCarrossel(direcao) {
    const container = document.getElementById("carrossel-container");
    const produto = container.querySelector(".produto");
    const largura = produto.offsetWidth + 20;
    container.scrollBy({
        left: direcao * largura,
        behavior: "smooth"
    });
}

function iniciarCarrossel(container) {
    let scrollAmount = 0;
    const velocidade = 1;

    function rolar() {
        scrollAmount += velocidade;
        if (scrollAmount >= container.scrollWidth / 2) {
            scrollAmount = 0;
            container.scrollLeft = 0;
        } else {
            container.scrollLeft = scrollAmount;
        }
        requestAnimationFrame(rolar);
    }

    rolar();
}
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("login-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    window.location.href = "perfil.html";
  });
});
