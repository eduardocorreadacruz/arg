(function() {
              emailjs.init("E0KgjFNp8sivKldt3");
          })();
      
          document.getElementById("contact-form").addEventListener("submit", function(event) {
              event.preventDefault();
      
              emailjs.sendForm("genericoparatestarg", "template_kvkuboq", this)
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
    
        moveNoticia1();
    
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
    
        setTimeout(moveNoticia2, 3000);
    

function moveNoticia3() {  
    noticiasTab3.classList.add("hidden");  
    setTimeout(() => {  
        noticiasTab3.style.display = "none";  
        noticiasTab2.insertAdjacentElement('afterend', noticiasTab3);  
        noticiasTab3.style.display = "block";  
        setTimeout(() => {  
            noticiasTab3.classList.remove("hidden");  
            noticiasTab3.classList.add("appear");  
            setTimeout(moveNoticia4, 6000);  
        }, 10);  
    }, 1000);  
}  

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

setTimeout(moveNoticia3, 6000);
    });
    
    function toggleDetails1() {  
        const details1 = document.getElementById('details1');  
        details1.classList.toggle('hidden');  
    }  
    function toggleDetails2() {  
        const details2 = document.getElementById('details2');  
        details2.classList.toggle('hidden');  
    }  
    function toggleDetails3() {  
        const details3 = document.getElementById('details3');  
        details3.classList.toggle('hidden');  
    }  
    function toggleDetails4() {  
        const details4 = document.getElementById('details4');  
        details4.classList.toggle('hidden');  
    }  

