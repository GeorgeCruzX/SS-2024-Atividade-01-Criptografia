const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();

        console.log("[Login Process] Iniciando validação de dados...");

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        console.log("[Login Process] Dados enviados para autenticação: ", email);

        const data = {
            email: email,
            password: password
        };

        axios.post("http://localhost:4000/login", data)
            .then((response) => {
                if (response.data.status) {
                    showAlert("success", response.data.message);
                    // Login bem-sucedido, redirecionar para a página de CRUD
                    window.location.href = "../crud/crud.html";
                } else {
                    showAlert("danger", response.data.message);
                }
            })
            .catch((error) => {
                // Erro de conexão ou servidor
                showAlert("danger", "Erro de login. Tente novamente mais tarde.");
                console.error("[Login Error] Erro ao tentar fazer login: ", error);
            });
    });
}

// Evento para o formulário de recuperação de senha
const forgotPasswordForm = document.getElementById("forgotPasswordForm");
if (forgotPasswordForm) {
    forgotPasswordForm.addEventListener("submit", (event) => {
        event.preventDefault();

        console.log("[Forgot Password] Solicitação de recuperação de senha iniciada...");

        const email = document.getElementById("forgotPasswordEmail").value;
        if (email) {
            console.log("[Forgot Password] Email para recuperação: ", email);

            axios.post(`http://localhost:4000/forgotPassword/${email}`)
                .then((response) => {
                    // Sucesso, exibir alerta de sucesso
                    showAlert("success", "E-mail de recuperação enviado!");
                    console.log(response.data.message);
                })
                .catch((error) => {
                    // Erro, exibir alerta de erro
                    const errorMessage = error.response && error.response.data && error.response.data.error
                        ? error.response.data.error
                        : "Erro ao enviar e-mail de recuperação.";
                    showAlert("danger", errorMessage);
                    console.error("[Forgot Password Error] Erro ao enviar e-mail de recuperação: ", errorMessage);
                });
        } else {
            showAlert("danger", "Por favor, informe um e-mail válido.");
        }
    });
}