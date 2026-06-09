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