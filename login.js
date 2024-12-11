function toggleForm(formType) {  
    document.getElementById('usuarioForm').classList.remove('active');  
    document.getElementById('funcionarioForm').classList.remove('active');  
    
    if (formType === 'usuario') {  
        document.getElementById('usuarioForm').classList.add('active');  
    } else {  
        document.getElementById('funcionarioForm').classList.add('active');  
    }  

    
}  

document.getElementById("entrarFuncionario").addEventListener("click", function() {
    const codigoAcesso = document.getElementById("codigoAcesso").value;
    const codigoCorreto = "0000"; // Substitua por seu código correto

    if (codigoAcesso === codigoCorreto) {
        window.location.href = "paginaFuncionario.html"; // Redireciona para a página do funcionário
    } else {
        const errorMessage = document.getElementById("error-message");
        errorMessage.innerText = "Código de acesso incorreto. Tente novamente.";
        errorMessage.style.display = "block"; // Exibe a mensagem de erro
    }
})