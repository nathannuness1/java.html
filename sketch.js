//variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2 ;
//movimento da bolinha
let velocidadeXbolinha = 6;
let velocidadeYbolinha = 6;
let raqueteComprimento = 10;
let raqueteAltura = 90;
//variaveis da raquete
let xRaquete = 5;
let yRaquete = 150;
//variaveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;


let colidiu = false
//placar do jogo
let MeusPontos = 0;
let PontosDoOponente = 0;


function setup (){
  createCanvas(600,400);
  
}
function draw (){
  background(0)
  mostraBolinha()
  movimentoBolinha() 
  verificaColisaoBolinha()
  mostraRaquete(xRaquete, yRaquete)
  movimentaMinhaRaquete()
  mostraRaquete(xRaqueteOponente, yRaqueteOponente)
  movimentoRaqueteOponente()
  verificaColisaoRaquete(xRaquete, yRaquete)
  verificaColisaoRaquete (xRaqueteOponente, yRaqueteOponente)
  incluiPlacar()
  marcaPonto()
  }
function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}
function movimentoBolinha(){
  xBolinha += velocidadeXbolinha;
  yBolinha += velocidadeYbolinha;
}
function verificaColisaoBolinha(){
  if (xBolinha + raio > width ||
     xBolinha - raio < 0){
    velocidadeXbolinha *= -1;
  }
  if (yBolinha + raio > height ||
     yBolinha - raio < 0){
    velocidadeYbolinha *= -1;
  }
}
  function mostraRaquete(x, y){
    rect (x, y, raqueteComprimento, raqueteAltura);
}

   
  function movimentaMinhaRaquete(){
    if (keyIsDown(UP_ARROW)){
      yRaquete -= 10;
    }
    if (keyIsDown(DOWN_ARROW)){
      yRaquete += 10;
    }
  }
function verificaColisaoRaquete(x, y){
 if (xBolinha - raio < x + raqueteComprimento&& yBolinha - raio < y + raqueteAltura&& yBolinha + raio > y){
   velocidadeXbolinha *= -1;
  }
 }
function movimentoRaqueteOponente(){
  velocidadeYOponente = yBolinha -yRaqueteOponente -raqueteComprimento / 2- 30
  ;
  yRaqueteOponente += velocidadeYOponente
  
}

    function verificaColisaoRaquete(x, y){
    colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);}
    if (colidiu) {
        velocidadeXbolinha *= -1;
      

  }
function verificaColisaoRaquete(x, y) {
    colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
    if (colidiu){
        velocidadeXbolinha *= -1;
      
    }
}
    function incluiPlacar() {
    stroke(255);
    textAlign(CENTER);
    textSize(16);
    fill(color(255, 140, 0));
    rect(150, 10, 40, 20);
    fill(255);
    text(MeusPontos, 170, 26);
    fill(color(255, 140, 0));
    rect(450, 10, 40, 20);
    fill(255);
    text(PontosDoOponente, 470, 26);
}

  
function marcaPonto(){
  if (xBolinha > 590){
    meusPontos += 1;
  }
  if (xBolinha < 10){
    PontosDoOponente += 1;
  }
}