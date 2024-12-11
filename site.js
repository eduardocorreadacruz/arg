(function() {
              emailjs.init("E0KgjFNp8sivKldt3");
          })();
      
          document.getElementById("contact-form").addEventListener("submit", function(event) {
              event.preventDefault();
      
              emailjs.sendForm("asserteddock", "asserteddock_template", this)
              .then(function() {
                const responseMessage = document.getElementById("response-message");
                responseMessage.innerText = "E-mail enviado com sucesso!";
                responseMessage.className = "response-message success";
            }, function(error) {
                const responseMessage = document.getElementById("response-message");
                responseMessage.innerText = "Falha no envio do e-mail: " + JSON.stringify(error);
                responseMessage.className = "response-message error";
        });
    });

    document.addEventListener("DOMContentLoaded", function() {
        const noticiasTab1 = document.getElementById("noticias_tab1");
        const noticiasTab2 = document.getElementById("noticias_tab2");
        const noticiasTab3 = document.getElementById("noticias_tab3");
        const noticiasTab4 = document.getElementById("noticias_tab4");
    
        // Função para mover a notícia 1
        function moveNoticia1() {
            noticiasTab1.classList.add("hidden");
            setTimeout(() => {
                noticiasTab1.style.display = "none";
                noticiasTab4.insertAdjacentElement('afterend', noticiasTab1);
                noticiasTab1.style.display = "block";
                setTimeout(() => {
                    noticiasTab1.classList.remove("hidden");
                    noticiasTab1.classList.add("appear");
                }, 10);
            }, 1000);
        }
    
        // Chama a função para mover a notícia 1
        moveNoticia1();
    
        // Função para mover a notícia 2
        function moveNoticia2() {
            noticiasTab2.classList.add("hidden");
            setTimeout(() => {
                noticiasTab2.style.display = "none";
                noticiasTab1.insertAdjacentElement('afterend', noticiasTab2);
                noticiasTab2.style.display = "block";
                setTimeout(() => {
                    noticiasTab2.classList.remove("hidden");
                    noticiasTab2.classList.add("appear");
                }, 10);
            }, 1000);
        }
    
        // Chama a função para mover a notícia 2 após 3000 milissegundos
        setTimeout(moveNoticia2, 3000);
    
        // Função para mover a notícia 3
// Função para mover a notícia 3  
function moveNoticia3() {  
    noticiasTab3.classList.add("hidden");  
    setTimeout(() => {  
        noticiasTab3.style.display = "none";  
        noticiasTab2.insertAdjacentElement('afterend', noticiasTab3);  
        noticiasTab3.style.display = "block";  
        setTimeout(() => {  
            noticiasTab3.classList.remove("hidden");  
            noticiasTab3.classList.add("appear");  
            // Chama a função para mover a notícia 4 após 6 segundos da notícia 3  
            setTimeout(moveNoticia4, 6000);  
        }, 10);  
    }, 1000);  
}  

// Função para mover a notícia 4  
function moveNoticia4() {  
    noticiasTab4.classList.add("hidden");  
    setTimeout(() => {  
        noticiasTab4.style.display = "none";  
        noticiasTab3.insertAdjacentElement('afterend', noticiasTab4);  
        noticiasTab4.style.display = "block";  
        setTimeout(() => {  
            noticiasTab4.classList.remove("hidden");  
            noticiasTab4.classList.add("appear");  
        }, 10);  
    }, 1000);  
}  

// Chama a função para mover a notícia 3 após 6000 milissegundos  
setTimeout(moveNoticia3, 6000);
    });
    
    function toggleDropdown() {
        document.getElementById("botao_login").classList.toggle("show");
    }

    // Fecha o dropdown se o usuário clicar fora dele
    window.onclick = function(event) {
        if (!event.target.matches('.btn')) {
            var dropdowns = document.getElementsByClassName("conteudo_botao");
            for (var i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }

