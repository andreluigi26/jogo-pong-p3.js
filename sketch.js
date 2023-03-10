//váriaveis Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;

//váriaveis Bolinha
let velocidadexBolinha = 5;
let velocidadeyBolinha = 5;

//váriaveis da raquete
let  xRaquete = 5;
let  yRaquete = 150;
let  comprimentoRaquete = 10;
let  alturaRaquete = 90;
let colisao = false

//Váriaveis do Advesário
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;

let velocidadeyOponente;

//pontuação
let meusPontos = 0;
let pontosOponente = 0;


//Sons do jogo
let raquetada;
let ponto;
let trilha;

function preload(){
trilha = loadSound("trilha.mp3");
ponto = loadSound("ponto.mp3");
raquetada = loadSound ("raquetada.mp3");

}


function setup() {
  createCanvas(600, 400);
  trilha.loop();
  
}

function draw() {
  background(0);
  mostraBolinha ();
  movimentoBolinha ();
  colisaoBolinha ();
  mostraRaquete(xRaquete,yRaquete);
  movimentoRaquete();
  //colisaoRaquete ();
  colisaoBolinhaRaqueteBiblioteca (xRaquete, yRaquete);
  mostraRaqueteOponente(xRaqueteOponente, yRaqueteOponente);
  movimentoRaqueteOponente();
colisaoBolinhaRaqueteBiblioteca(xRaqueteOponente, yRaqueteOponente);
  placar();
  marcaPonto();

  
  
}
function  mostraBolinha (){
  circle (xBolinha,yBolinha,diametro)
}
function movimentoBolinha () {
   xBolinha += velocidadexBolinha
  yBolinha += velocidadeyBolinha
}
function colisaoBolinha (){
if (xBolinha + raio > width || xBolinha - raio < 0){
    velocidadexBolinha *= -1;
}
if (yBolinha  + raio > height || yBolinha - raio < 0){
    velocidadeyBolinha *= -1;
  }
}
function mostraRaquete(x,y){
  rect(x,y,comprimentoRaquete,alturaRaquete)
}
function movimentoRaquete(){
 if (keyIsDown (87)){
   yRaquete -= 10;
   
 }
    if (keyIsDown (83)){
   yRaquete += 10;
}
}
function colisaoRaquete(){
  if (xBolinha - raio < xRaquete + comprimentoRaquete && yBolinha - raio < yRaquete + alturaRaquete && yBolinha + raio > yRaquete){
    velocidadexBolinha *= -1;
    raquetada.play();
      }
    
}
function colisaoBolinhaRaqueteBiblioteca(x,y){
  colisao = collideRectCircle(x, y, comprimentoRaquete, alturaRaquete, xBolinha, yBolinha, raio);
  if (colisao){
     velocidadexBolinha *= -1;
    raquetada.play();
  }
}
function mostraRaqueteOponente(x,y){
  rect(x,y,comprimentoRaquete,alturaRaquete)
}
function movimentoRaqueteOponente(){
 if (keyIsDown (UP_ARROW)){
   yRaqueteOponente -= 10;
   
 }
    if (keyIsDown (DOWN_ARROW)){
   yRaqueteOponente += 10;

    }
}
function placar(){
  stroke (255);
  textAlign (CENTER);
  textSize (16);
  fill (color(173,216,230))
  rect (150,10,40,20);
  fill (255);
  text(meusPontos, 170,26);
  fill (color(173,216,230))
  rect (450,10,40,20);
  fill (255);
  text(pontosOponente, 470,26);
  
}
function marcaPonto(){
  if (xBolinha > 590){
    meusPontos += 1;
    ponto.play();
    
  }
  if (xBolinha < 10){
    pontosOponente += 1;
     ponto.play();
    
  }
}


