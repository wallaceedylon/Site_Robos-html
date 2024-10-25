
function digitarAutomatico(elemento, texto, velocidade = 100) {
    let idx = 0;

    function digitar() {
        if (idx < texto.length) {
            document.querySelector(elemento).textContent += texto.charAt(idx);
            idx++;
            setTimeout(digitar, velocidade);
        }
    }

    digitar();
}

// Chamando a função para diferentes elementos
digitarAutomatico('.Texto-principal', 'Bem-vindo ao Amanhã: O Início da Era dos Robôs', 100);
digitarAutomatico('.Texto-secundario', 'Robôs com inteligência avançada agora fazem parte do nosso dia a dia. Junte-se à nova era.', 50);

