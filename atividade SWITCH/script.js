let pontos = 0; // INICIALIZA A VARIAVEL DOS PONTOS

function iniciarProva() {
    const nome = document.querySelector('#nome').value.trim(); // TIRA OS ESPAÇOS VAZIOS.
    if (nome === "") {
        alert("Por favor, digite seu nome!"); // CASO O VALOR SEJA VAZIO
        return;
    }
    console.log("Iniciando prova para:", nome); // VERIFICAR SE O COD TA RECEBENDO O NOME DE VDD
    document.querySelector('#inicio').style.display = 'none'; 
    document.querySelector('#quiz1').style.display = 'block'; 
    window.nomeAluno = nome; // WINDOW FAZ COM Q ESSA CONST ESTEJA DISPONIVEL UNIVERSAMENTE NO CODIGO
}

function Resposta1() {
    let res = document.querySelector('#input1').value.toLowerCase();
    let button = document.querySelector('#quiz1 button:first-child'); // SELECIONA O PRIMEIRO BOTAO NO CASO O BOTAO RESPONDER
    if (button.disabled) return; // ARMADILHA CONTRA ALUNO ESPERTO, VE SE O BOTAO REALMENTE ESTA DESATIVADO

    switch (res) {
        case "a":
            break;
        case "b":
            pontos += 1; 
            break; 
        case "c":
            break;
        default:
            document.querySelector("#resposta1").innerHTML = "Valor não aceito. Responda com 'a', 'b' ou 'c'.";
            return; 
    }
    
    button.disabled = true; // DESATIVA O BOTÃO
    document.querySelector('#quiz1 button:last-child').style.display = 'block';  // SELECIONA O ULTIMA BOTAO NO CASO AVANÇAR, E FAZ ELE APARECER, COMO NO HTML ESTA NONE, AQUI FICA BLOCK.
}

function Resposta2() {
    let res = document.querySelector('#input2').value.toLowerCase();
    let button = document.querySelector('#quiz2 button:first-child');
    if (button.disabled) return;

    switch (res) {
        case "a":
            break;
        case "b":
            pontos += 1; 
            break; 
        case "c": 
            break;
        default:
            document.querySelector("#resposta2").innerHTML = "Valor não aceito. Responda com 'a', 'b' ou 'c'.";
            return; 
    }

    button.disabled = true; 
    document.querySelector('#quiz2 button:last-child').style.display = 'block'; 
}

function Resposta3() {
    let res = document.querySelector('#input3').value.toLowerCase();
    let button = document.querySelector('#quiz3 button:first-child');
    if (button.disabled) return;

    switch (res) {
        case "a":
            break;
        case "b":
            break; 
        case "c":
            pontos += 1; 
            break;
        default:
            document.querySelector("#resposta3").innerHTML = "Valor não aceito. Responda com 'a', 'b' ou 'c'.";
            return; 
    }
    button.disabled = true; 
    document.querySelector('#quiz3 button:last-child').style.display = 'block'; 
}

function Resposta4() {
    let res = document.querySelector('#input4').value.toLowerCase();
    let button = document.querySelector('#quiz4 button:first-child');
    if (button.disabled) return;

    switch (res) {
        case "a":
            pontos += 1; 
            break; 
        case "b":
            break;
        case "c":
            break;
        default:
            document.querySelector("#resposta4").innerHTML = "Valor não aceito. Responda com 'a', 'b' ou 'c'.";
            return; 
    }
    button.disabled = true; 
    document.querySelector('#quiz4 button:last-child').style.display = 'block'; 
}

function Resposta5() {
    let res = document.querySelector('#input5').value.toLowerCase();
    let button = document.querySelector('#quiz5 button:first-child');
    if (button.disabled) return;

    switch (res) {
        case "a":
            break;
        case "b":
            break; 
        case "c":
            pontos += 1; 
            break;
        default:
            document.querySelector("#resposta5").innerHTML = "Valor não aceito. Responda com 'a', 'b' ou 'c'.";
            return; 
    }
    button.disabled = true; 
    document.querySelector('#quiz5 button:last-child').style.display = 'block'; 
}

function Resposta6() {
    let res = document.querySelector('#input6').value.toLowerCase();
    let button = document.querySelector('#quiz6 button:first-child');
    if (button.disabled) return;

    switch (res) {
        case "a":
            break;
        case "b":
            break; 
        case "c":
            pontos += 1; 
            break;
        default:
            document.querySelector("#resposta6").innerHTML = "Valor não aceito. Responda com 'a', 'b' ou 'c'.";
            return; 
    }
    button.disabled = true; 
    document.querySelector('#quiz6 button:last-child').style.display = 'block'; 
}

function Resposta7() {
    let res = document.querySelector('#input7').value.toLowerCase();
    let button = document.querySelector('#quiz7 button:first-child');
    if (button.disabled) return;

    switch (res) {
        case "a":
            pontos += 1; 
            break; 
        case "b":
            break;
        case "c":
            break;
        default:
            document.querySelector("#resposta7").innerHTML = "Valor não aceito. Responda com 'a', 'b' ou 'c'.";
            return; 
    }
    button.disabled = true; 
    document.querySelector('#quiz7 button:last-child').style.display = 'block'; 
}

function Resposta8() {
    let res = document.querySelector('#input8').value.toLowerCase();
    let button = document.querySelector('#quiz8 button:first-child');
    if (button.disabled) return;

    switch (res) {
        case "a":
            pontos += 1; 
            break;
        case "b":
            break;
        case "c":
            break; 
        default:
            document.querySelector("#resposta8").innerHTML = "Valor não aceito. Responda com 'a', 'b' ou 'c'.";
            return; 
    }
    button.disabled = true; 
    document.querySelector('#quiz8 button:last-child').style.display = 'block'; 
}

function Resposta9() {
    let res = document.querySelector('#input9').value.toLowerCase();
    let button = document.querySelector('#quiz9 button:first-child');
    if (button.disabled) return;

    switch (res) {
        case "a": 
            break;
        case "b":
            pontos += 1; 
            break;
        case "c":
            break; 
        default:
            document.querySelector("#resposta9").innerHTML = "Valor não aceito. Responda com 'a', 'b' ou 'c'.";
            return; 
    }
    button.disabled = true; 
    document.querySelector('#quiz9 button:last-child').style.display = 'block'; 
}

function Resposta10() {
    let res = document.querySelector('#input10').value.toLowerCase();
    let button = document.querySelector('#quiz10 button:first-child');
    if (button.disabled) return;

    switch (res) {
        case "a":
            pontos += 1; 
            break;
        case "b":
            break;
        case "c":
            break; 
        default:
            document.querySelector("#resposta10").innerHTML = "Valor não aceito. Responda com 'a', 'b' ou 'c'.";
            return; 
    }
    button.disabled = true; 
    document.querySelector('#quiz10 button:last-child').style.display = 'block'; 
}

function avancar(quizAtual, proximoQuiz) {
    document.querySelector(`#${quizAtual}`).style.display = 'none'; 
    if (proximoQuiz === 'final') {
        document.querySelector('#pontuacao').innerHTML = `Sua pontuação: ${pontos}/10`;
        document.querySelector('#resultado').style.display = 'block'; 
    } else {
        document.querySelector(`#${proximoQuiz}`).style.display = 'block'; 
    }
}
