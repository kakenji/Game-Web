const moralPovoElement = document.querySelector('.moralpovo');
const sucessoRevolucaoElement = document.querySelector('.revolucao');
const relacaoCoroaElement = document.querySelector('.coroa');

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.primeira-fase').style.display = 'block';
    document.querySelector('.segunda-fase').style.display = 'none';
    document.querySelector('.terceira-fase').style.display = 'none';
    document.querySelector('.quarta-fase').style.display = 'none';
    document.querySelector('.quinta-fase').style.display = 'none';
    document.querySelector('.final').style.display = 'none';
});

let moralPovo = parseInt(moralPovoElement.innerHTML, 10);
let sucessoRevolucao = parseInt(sucessoRevolucaoElement.innerHTML, 10);
let relacaoCoroa = parseInt(relacaoCoroaElement.innerHTML, 10);

function opcaoA(){
    sucessoRevolucao -= 15;
    moralPovo -= 10;
    relacaoCoroa += 10;

    moralPovoElement.innerHTML = moralPovo + "%";
    sucessoRevolucaoElement.innerHTML = sucessoRevolucao + "%";
    relacaoCoroaElement.innerHTML = relacaoCoroa + "%";

    document.querySelector('.primeira-fase').style.display = 'none';
    document.querySelector('.segunda-fase').style.display = 'block';

    alert("Seu discurso inspira alguns, mas outros se frustram com a lentidão do progresso.");
}

function opcaoB(){
    moralPovo += 25;
    sucessoRevolucao += 10;
    moralPovoElement.innerHTML = moralPovo + "%";
    sucessoRevolucaoElement.innerHTML = sucessoRevolucao + "%";
    relacaoCoroaElement.innerHTML = relacaoCoroa + "%";

    document.querySelector('.primeira-fase').style.display = 'none';
    document.querySelector('.segunda-fase').style.display = 'block';

    alert("Você lidera a marcha, e o povo segue com fervor. No entanto, os guardas estão em alerta.");
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function opcaoC(){
    sucessoRevolucao += 5;
    relacaoCoroa += 20;
    moralPovo -= 5;

    moralPovoElement.innerHTML = moralPovo + "%";
    sucessoRevolucaoElement.innerHTML = sucessoRevolucao + "%";
    relacaoCoroaElement.innerHTML = relacaoCoroa + "%";

    document.querySelector('.segunda-fase').style.display = 'none';
    document.querySelector('.terceira-fase').style.display = 'block';
    
    alert("Os guardas hesitam e permitem que você avance, mas isso atrasa a marcha.");
}

function opcaoD(){
    sucessoRevolucao += 10;
    moralPovo += 25;
    relacaoCoroa -= 10;
    
    moralPovoElement.innerHTML = moralPovo + "%";
    sucessoRevolucaoElement.innerHTML = sucessoRevolucao + "%";
    relacaoCoroaElement.innerHTML = relacaoCoroa + "%";

    document.querySelector('.segunda-fase').style.display = 'none';
    document.querySelector('.terceira-fase').style.display = 'block';

    alert("O povo enfrenta os guardas com coragem, mas alguns se machucam no confronto.");
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function opcaoE(){
    sucessoRevolucao += 20;
    moralPovo -= 20;
    relacaoCoroa += 20;
    
    moralPovoElement.innerHTML = moralPovo + "%";
    sucessoRevolucaoElement.innerHTML = sucessoRevolucao + "%";
    relacaoCoroaElement.innerHTML = relacaoCoroa + "%";

    document.querySelector('.terceira-fase').style.display = 'none';
    document.querySelector('.quarta-fase').style.display = 'block';

    alert("Você mantém os líderes unidos, mas alguns camponeses sentem que estão sendo ignorados.");
}

function opcaoF(){
    relacaoCoroa -= 15;
    moralPovo += 10;
    sucessoRevolucao += 5;
    
    moralPovoElement.innerHTML = moralPovo + "%";
    sucessoRevolucaoElement.innerHTML = sucessoRevolucao + "%";
    relacaoCoroaElement.innerHTML = relacaoCoroa + "%";

    document.querySelector('.terceira-fase').style.display = 'none';
    document.querySelector('.quarta-fase').style.display = 'block';

    alert("Os líderes pró-guerra ganham força, mas isso pode causar mais conflitos no futuro.");
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function opcaoG(){
    relacaoCoroa += 25;
    sucessoRevolucao += 10;
    moralPovo -= 15;
    
    moralPovoElement.innerHTML = moralPovo + "%";
    sucessoRevolucaoElement.innerHTML = sucessoRevolucao + "%";
    relacaoCoroaElement.innerHTML = relacaoCoroa + "%";

    document.querySelector('.quarta-fase').style.display = 'none';
    document.querySelector('.quinta-fase').style.display = 'block';

    alert("O rei escuta suas demandas, mas a desconfiança entre os dois lados ainda é alta.");
}

function opcaoH(){
    relacaoCoroa -= 5;
    moralPovo += 30;
    sucessoRevolucao += 20;
    
    moralPovoElement.innerHTML = moralPovo + "%";
    sucessoRevolucaoElement.innerHTML = sucessoRevolucao + "%";
    relacaoCoroaElement.innerHTML = relacaoCoroa + "%";

    document.querySelector('.quarta-fase').style.display = 'none';
    document.querySelector('.quinta-fase').style.display = 'block';

    alert("O povo vê sua determinação como um sinal de força, mas o rei se prepara para retaliação.");
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function opcaoI(){
    sucessoRevolucao -= 5;
    moralPovo -= 15;

    moralPovoElement.innerHTML = moralPovo + "%";
    sucessoRevolucaoElement.innerHTML = sucessoRevolucao + "%";
    relacaoCoroaElement.innerHTML = relacaoCoroa + "%";
  
    document.querySelector('.quinta-fase').style.display = 'none';
    document.querySelector('.final').style.display = 'block';

    alert("A nova constituição estabelece uma base sólida, mas nem todos estão satisfeitos com as mudanças.");

    if(
        sucessoRevolucao > 25 
        && moralPovo > 50 
        && relacaoCoroa <= 40) {
            titulo.innerHTML = "Revolução Bem-Sucedida";
            resultado.innerHTML = "Triunfo do Povo! Graças às suas decisões, a Revolução foi um sucesso. O povo uniu-se e resultou em uma sociedade mais igualitária. A França tornou-se um exemplo de liberdade. Sua liderança será lembrada com orgulho.";
        }
    
        else if(
        sucessoRevolucao > 30
        && moralPovo <= 25 
        && relacaoCoroa > 50){
            titulo.innerHTML = "Conciliação com a Coroa!";
            resultado.innerHTML = "O Compromisso Real! Optando pelo diálogo, você negociou reformas com a Coroa, evitando conflitos sangrentos. Muitos celebram a paz, mas outros lamentam a falta de uma mudança mais profunda. Ainda assim, a estabilidade prevaleceu.";
        }
    
        else if(
        sucessoRevolucao <= 30 
        && moralPovo <= 40 
        && relacaoCoroa >= 50){
            titulo.innerHTML = "Revolução Fracassada";
            resultado.innerHTML = "A Chama Extinta! A Revolução perdeu força devido a decisões mal planejadas e à falta de apoio popular. A Coroa reprimiu os insurgentes, e o antigo regime voltou ao poder. No entanto, as ideias revolucionárias continuarão inspirando o futuro.";
        }
        else {
            titulo.innerHTML = "Por Pouco!"
            resultado.innerHTML = "Por um deslize! A Revolução perdeu um pouco de força, mas teve apoio o suficiente para usurpar a Coroa. Apesar da aliança com os nobres, nem eles previram esta!"
        }
}

function opcaoJ(){
    relacaoCoroa -= 15;
    moralPovo += 15;
    sucessoRevolucao += 10;

    moralPovoElement.innerHTML = moralPovo + "%";
    sucessoRevolucaoElement.innerHTML = sucessoRevolucao + "%";
    relacaoCoroaElement.innerHTML = relacaoCoroa + "%";

    document.querySelector('.quinta-fase').style.display = 'none';
    document.querySelector('.final').style.display = 'block';

    alert("O fervor revolucionário aumenta, mas a instabilidade ameaça o futuro.");

    if(
        sucessoRevolucao > 25 
        && moralPovo > 50 
        && relacaoCoroa <= 40) {
            titulo.innerHTML = "Revolução Bem-Sucedida";
            resultado.innerHTML = "Triunfo do Povo! Graças às suas decisões, a Revolução foi um sucesso. O povo uniu-se e resultou em uma sociedade mais igualitária. A França tornou-se um exemplo de liberdade. Sua liderança será lembrada com orgulho.";

        }
    
        else if(
        sucessoRevolucao > 30
        && moralPovo <= 25 
        && relacaoCoroa > 50){
            titulo.innerHTML = "Conciliação com a Coroa!";
            resultado.innerHTML = "O Compromisso Real! Optando pelo diálogo, você negociou reformas com a Coroa, evitando conflitos sangrentos. Muitos celebram a paz, mas outros lamentam a falta de uma mudança mais profunda. Ainda assim, a estabilidade prevaleceu.";
        }
    
        else if(
        sucessoRevolucao <= 30 
        && moralPovo <= 40 
        && relacaoCoroa >= 50){
            titulo.innerHTML = "Revolução Fracassada";
            resultado.innerHTML = "A Chama Extinta! A Revolução perdeu força devido a decisões mal planejadas e à falta de apoio popular. A Coroa reprimiu os insurgentes, e o antigo regime voltou ao poder. No entanto, as ideias revolucionárias continuarão inspirando o futuro.";    
        }
        else {
            titulo.innerHTML = "Por Pouco!"
            resultado.innerHTML = "Por um deslize! A Revolução perdeu um pouco de força, mas teve apoio o suficiente para usurpar a Coroa. Apesar da aliança com os nobres, nem eles previram esta!"
        }
}

function jogar(){
    document.querySelector('.primeira-fase').style.display = 'block';
    document.querySelector('.final').style.display = 'none';

    moralPovo = 0;
    sucessoRevolucao = 0;
    relacaoCoroa = 0;

    moralPovoElement.innerHTML = moralPovo + "%";
    sucessoRevolucaoElement.innerHTML = sucessoRevolucao + "%";
    relacaoCoroaElement.innerHTML = relacaoCoroa + "%";
    document.querySelector('.status').style.display = 'block';
}

let resultado = document.querySelector('.resultado');
let titulo = document.querySelector('.titulo');

// sucessoRevolucao = 35;
// moralPovo = 45;
// relacaoCoroa = 20;

    
