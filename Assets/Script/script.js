document.getElementById("formulario").addEventListener("submit", function(e){
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", document.getElementById("name").value);
    formData.append("email", document.getElementById("email").value);
    formData.append("number", document.getElementById("number").value);
    formData.append("destino", document.getElementById("destino").value);

    fetch("https://script.google.com/macros/s/AKfycbxF1uv9zDXVD5DXC98IulYdKYXMxCuerx-e4MeTE-vaHbX7wCtMzBg3yh6-evl2LMN6/exec", {
        method: "POST",
        body: formData
    })
    .then(() => {
        alert("Cadastro enviado com sucesso. Em breve entraremos em contato.");
    })
    .catch(err => {
        alert("Erro ao enviar o cadastro. Por favor, tente novamente.");
        console.error(err);
    });
});

const telefone = document.getElementById("number");

telefone.addEventListener("input", function () {
    let valor = telefone.value.replace(/\D/g, ""); // Remove tudo que não for número

    if (valor.length > 11) valor = valor.slice(0, 11);

    if (valor.length > 2) {
    valor = "(" + valor.substring(0, 2) + ") " + valor.substring(2);
    }

    if (valor.length > 10) {
    valor = valor.substring(0, 10) + "-" + valor.substring(10);
    }

    telefone.value = valor;
});