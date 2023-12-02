var sPerguntas=[["PARIS" , "CIDADE"], ["NOVA YORK", "CIDADE"],
        ["BASQUETE" ,"ESPORTE"], ["FUTEBOL" ,"ESPORTE"],
        ["ESTADOS UNIDOS", "PAÍS"], ["CHINA", "PAÍS"],
        ["MORANGO", "FRUTA"], ["ABACAXI", "FRUTA"],
        ["BOMBEIRO", "PROFISSÃO"], ["ENGENHEIRO", "PROFISSÃO"],
        ["ELEFANTE", "ANIMAL"], ["CACHORRO", "ANIMAL"],
        ["VERMELHO", "COR"], ["AMARELO","COR"],
        ["COMPUTADOR", "TECNOLOGIA"], ["SMARTPHONE" ,"TECNOLOGIA"],
        ["PROGRAMAÇÃO" ,"TECNOLOGIA"], ["INTERNET" ,"TECNOLOGIA"],
        ["FOTOGRAFIA", "HOBBIES"] , ["COZINHAR" ,"HOBBIES"],["DANÇA", "HOBBIES"], ["JARDINAGEM", "HOBBIES"],
        ["SATURNO", "PLANETAS"], ["JÚPITER" ,"PLANETAS"],
        ["CHAVE DE FENDA", "FERRAMENTAS"], ["MARTELO" ,"FERRAMENTAS"],
        ["CAMISETA" ,"ROUPAS"], ["GRAVATA" ,"ROUPAS"],
        ["BICICLETA" ,"VEÍCULOS"], ["NAVIO" ,"VEÍCULOS"],
        ["GUITARRA", "INSTRUMENTO"], ["TROMPETE", "INSTRUMENTO"],
        ["TAYLOR SWIFT", "FAMOSOS"], ["THE WEEKND", "FAMOSOS"],
        ["KYLIE JENNER", "FAMOSOS"], ["ZENDAYA", "FAMOSOS"],
        ["WILL SMITH", "FAMOSOS "], ["UKULELE", "INSTRUMENTO MUSICAL"],
        ["INVERNO", "ESTAÇÕES DO ANO"], ["PRIMAVERA", "ESTAÇÕES DO ANO"],
        ["FELICIDADE", "EMOÇÕES"], ["SURPRESA" ,"EMOÇÕES"],
        ["JOANINHA", "INSETOS"], ["BORBOLETA" ,"INSETOS"],
        ["CATEDRAL", "ARQUITETURA"], ["PALÁCIO" ,"ARQUITETURA"],
        ["FACEBOOK", "REDES SOCIAIS"], ["INSTAGRAM" ,"REDES SOCIAIS"],
        ["SNAPCHAT", "REDES SOCAIS"], ["TWITTER" ,"REDES SOCIAIS"],
        ["TOYOTA", "CARRO"], ["MERCEDES", "CARRO"],
        ["AMAZONAS", "RIOS"], ["MICROONDAS", "COZINHA"],
        ["GELADEIRA", "COZINHA"], ["RAPUNZEL ", "PERSONAGEM"],
        ["CHAVES", "SÉRIE"], ["FRIENDS", "SÉRIE"], 
        ["MODERN FAMILY", "SÉRIE"], ["BROOKLYN NINE-NINE", "SÉRIE"]];

//Matriz para fazer o shuffle 
var iSorteados = [];
//Conto a quantidade de jogadas feitas para buscar no vetor de Sorteados
var iJogada = 0;
//Armazena a palavra da vez 
var sPalavraSorteada;
//Conto as Letras certas var 
var iAcertos = 0;
//Conto as letras erradas
var iErro = 0;
//Guarda a letra clicada para poder desabilitá-la 
var cLetraClicada = "";
//Vetor com as letras do teclado para facilitar a busca do Id 
var sLetras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '-'];
//Vartarets que contan os acertos erros 
var iCertas = 0, iErradas = 0;
// Função para criar os espaços das letras
function criaLetras(sPalavra){
//Busca o formulario 
var formula = document.getElementById("tenta");
var j = 0; 
console.log("PALAVRA: " + sPalavra);
//for do tamanho da palavra 
for (var i = 0; i < sPalavra.length; i++) {
//Se for diferente de espaço (32)
if(sPalavra[i].charCodeAt(0)!=32) {
//Cria um INPUT
var letra = document.createElement("input");
//Define os atributos para o INPUT
//Tipo
letra.setAttribute("type","text");
//Name
letra.setAttribute("name", "tenta" + j);
//id
letra.setAttribute("id", "tenta" + j);
//Tamanho máximo 
letra.setAttribute("maxlength", 1);
//Tamanho de exibição 
letra.setAttribute("size", 1);
//Desabilita a edição 
letra.setAttribute("disabled", true);
//Adiciona o INPUT no FORMULARIO
formula.appendChild(letra);
j++;
}else{
//Quando for espaço, ele separa 20px a esquerda
//e 1px a direita do input anterior 
document.getElementById("tenta" + (j-1)).style.margin = "0px 20px 0px 1px";
    }
}
//Remove todos os espaços e acentos
sPalavraSorteada = limpa(sPalavra);
//Exibe o tema e a quantidade de letras 
document.getElementById("tema").innerHTML = sPerguntas [iSorteados [iJogada]][1]+ " - "+sPalavraSorteada.length+" letras";
}
/*******************************************************************************/
// Função que confere a letra clicada 
function sorteia(){
//Insere os números dentro do vetor conforme a quantidade de itens da matriz 
for (var m = 0; m < sPerguntas.length; m++){ 
    iSorteados.push(m); 
}
//Faz a mistura 
iSorteados = shuffleArray(iSorteados);
//Chama a função que separa as letras das palavras
criaLetras(sPerguntas[iSorteados[iJogada]][0]);
}
/*******************************************************************************/
// Função que confere a letra clicada
function Confere(cLetra){
    //Atribui a letra a uma variável global
    cLetraClicada = cLetra;
    //Cria variável que definirá se a letra foi encontrada na palavra 
    var lAchou = false;
    //Percorre as Letras da palavra sorteada 
    for (var i = 0; i < sPalavraSorteada.length; i++){
        //Se a letra clicada, existir na palavra 
        if(cLetra == sPalavraSorteada.charAt(i)){
            //Insere a exibição da letra 
            document.getElementById("tenta" + i).value = cLetra;
            //Conta acertos
            iAcertos++;
            //Exibe acertos
            document.getElementById("acerto").innerHTML = "ACERTOS: " + iAcertos;
            //Indica que achou a letra na palavra 
            lAchou = true;
        }
    }
    //Se não achou a letra 
    if(lAchou == false) {
        //Conta o erro
        iErro++;
        //insere a imagem conforme a quantidade de erro
        document.getElementById("imagem").src="Imagens/forca"+(iErro+1)+".png";
    }
}
/********************************************************************************/
/*Função que verifica se o jogo acabou*/
function acabou(){
    //Cria variável que indicará se o jogo acabou 
    var lAcabou = false;
    //se a quantidade de acertos for igual ao tamanho da palavra
    if(iAcertos == sPalavraSorteada.length) {
        //0 jogo acabou
        lAcabou = true;
        //Exibe a mensagem
        alert("PARABÉNS, VOCÊ CONSEGUIU!!!!");
        iCertas++;
    //Se a quantidade de letras erradas chegou a 6
    }else if(iErro == 6){
        //0 jogo acabou
        lAcabou = true;
        //Exibe a mensagem 
        alert("ENFORCADO!!!!!");
        //document.getElementById("forca").addEventListener(
        //"mouseover", shakeme, false); 
        iErradas++;
    }
    //Desabilita a letra clicada
    document.getElementById(cLetraClicada).disabled = true;
    //Se o Jogo acabou
    if(lAcabou) {
        //Remove todos os INPUTS
        for (var i=0; i < sPalavraSorteada.length; i++) { 
            document.getElementById("tenta" + i).remove();
        }
        //Incrementa Jogadas para ir para próxima palavra 
        iJogada++;
        //Exibe quantidade de palavras jogadas CERTAS e ERRADAS
        document.getElementById("palcerta").innerHTML= "CERTAS: " +
        iCertas + "<br>ERRADAS: " + iErradas
        //Chama função que criará novo jogo 
        criaLetras(sPerguntas[iSorteados[iJogada]][0]);
        //Inicializa variáveis
        iAcertos = 0;
        iErro = 0;
        document.getElementById("acerto").innerHTML="ACERTOS: " + iAcertos;
        //Volta imagem da forca        
        document.getElementById("imagem").src="Imagens/forca"+(iErro+1)+".png";
        //Habilita todas as letras
        for (var i=0; i < sLetras.length; i++) {
            document.getElementById(sLetras[i]).disabled = false;
        }
    }
}
/*******************************************************************************/
    //Função que mistura os valores do Array
    function shuffleArray(d) {
    for (var c = d.length - 1; c > 0; c--) {
    var b = Math.floor(Math.random() * (c + 1));
    var a = d[c];
    d[c] = d[b];
    d[b]= a;
    }
    return d;
}
/*******************************************************************************/
    //Função para tirar espaços e acentos
    function limpa(sItem) {
    var sResultado = sItem;
    //Retira todos os espaços 
    sResultado = replaceAll(sResultado," ","");
    //Retira todos os acentos e cedilhas
    //O método normalize do JavaScript, serve para converter uma string
    //em seu formato Unicode normalizado. Neste caso utilizamos o parâmetro
    //NFD que é capaz de separar os acentos das letras e retornar seus
    //códigos Unicode.
    //Em seguida o método replace substitui todas as ocorrências de
    //caracteres diacriticos, combinando-os na sequencia Unicode \u8380 - \u836F.
    // VEJA: https://metring.com.br/javascript-substituir-caracteres-especiais
    sResultado = sResultado.normalize('NFD').replace(/[\u0300-\u036f]/g, ""); return sResultado;
}
/*******************************************************************************/
//Função para substituir todas as ocorrências
function replaceAll(str, de, para){
    //Procura a ocorrência
    var pos = str.indexOf(de);
    //Se achou
    while (pos > -1) {
    //substitui
    str = str.replace(de, para);
    //e procura novamente a ocorrência
    pos = str.indexOf(de);
    }
    //retorna a string sem acentos e espaços
    return (str);
}

/*******************************************************************************/
function shake(e, oncomplete, distance, time) {
    var time = 500;
    var distance = 5;

    var start = (new Date()).getTime();
    animate();

    function animate() {
        var now = (new Date()).getTime();
        // Get current time
        var elapsed = now - start;
        // How long since we started
        var fraction = elapsed / time;
        // What fraction of total time?
        if (fraction < 1) {
            var x = distance * Math.sin(fraction * 4 * Math.PI);
            e.style.left = x + "px";
            // We're aiming for a smooth 40 frames/second animation.
            setTimeout(animate, Math.min(25, time - elapsed));
        } else {
            // Otherwise, the animation is complete
            if (oncomplete) oncomplete(e); 
            // Invoke completion callback
        }
    }
}
    function shakeme(event1) {
    shake(event1.target);
}