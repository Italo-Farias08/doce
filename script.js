
const inicio = new Date("2024-10-03T00:00:00"); 

function atualizar() {
    const agora = new Date();

    let anos = agora.getFullYear() - inicio.getFullYear();
    let meses = agora.getMonth() - inicio.getMonth();
    let dias = agora.getDate() - inicio.getDate();
    let horas = agora.getHours() - inicio.getHours();
    let minutos = agora.getMinutes() - inicio.getMinutes();
    let segundos = agora.getSeconds() - inicio.getSeconds();

   
    if (segundos < 0) {
        segundos += 60;
        minutos -= 1;
    }
    if (minutos < 0) {
        minutos += 60;
        horas -= 1;
    }
    if (horas < 0) {
        horas += 24;
        dias -= 1;
    }
    if (dias < 0) {
        const mesAnterior = new Date(agora.getFullYear(), agora.getMonth(), 0).getDate();
        dias += mesAnterior;
        meses -= 1;
    }
    if (meses < 0) {
        meses += 12;
        anos -= 1;
    }

  
    document.getElementById("anos").textContent = anos;
    document.getElementById("meses").textContent = meses;
    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;
}

atualizar();
setInterval(atualizar, 1000);




function criarCoracao() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    // Escolhe posição horizontal aleatória
    heart.style.left = Math.random() * window.innerWidth + 'px';
    
    // Tamanho aleatório entre 15px e 35px
    const size = Math.random() * 20 + 15;
    heart.style.fontSize = size + 'px';
    
    // Velocidade aleatória (duração da animação)
    const duracao = Math.random() * 3 + 4; // 4s a 7s
    heart.style.animationDuration = duracao + 's';
    
    // Coloca coração no body
    heart.textContent = '❤️';
    document.body.appendChild(heart);
    
    // Remove após a animação terminar
    setTimeout(() => {
        heart.remove();
    }, duracao * 1000);
}


setInterval(criarCoracao, 300); // 1 coração a cada 0.5s

