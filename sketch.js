//COORDENADAS & PROPORÇÕES
var Tela_Largura = window.innerWidth, Tela_Altura = window.innerHeight; 
var xBtnMenu = 610;
var yPlay = 235, yRegras = 300, yCreditos = 365;
var tamBtnX = 215, tamBtnY = 40;
var tamImgX = 250, tamImgY = 100;
var texto_regrasX = 50, texto_regrasY = 150;
var tela = 0;
var mousetx = 50,mousety = 50;

//TEXTOS
var instrucoes = ("\t\t\t\t\tVocê é um calouro recem chegado a Escola de Ciências e Tecnologia, está apenas começando sua vida academica\n\t\t\t\te precisa enfrentar o perigoso primeiro semestre do Bacharelado de Ciências e Tecnologia e para isso deve contar\n\t\t\tcom a ajuda dos outros estudantes e seguir os ensinamentos dos professores para responder e se dar bem nas avaliações");
var instrucoesobjetivos = ("Seu objetivo é passar em todas as materias do primeiro semestre:\n-Pre Calculo\n-Vetores e Geometria Analitica\n-Quimica Geral\n-Calculo 1");
var intrucoesregras = ("* Para isso precisa responder corretamente as questões das PROVAS e evitar se dar mal\n* Cada avaliação tem de 5 a 4 questões que cada uma valem 2,0 a 2,5 pontos na media\n* Assista as aulas dos professores e faça anotações para garantir vantagens durante as PROVAS\n* Pegue dicas conversando com os outros alunos e lendo o QUADRO DE AVISOS\n* Você precisa ter media igual a 5 para conseguir passar para o proximo semestre assim terminando o jogo");
var creditosdesenvolvedor = ("Desenvolvedor:\nRodrigo de Menezes Souza - Aluno de LOP graduando do Bacharelado de C&T");
var creditosorientador = ("Orientado por:\nProf. Dr. Orivaldo Vieira de Santana Junior");

//IMAGENS
var backgorund1,Imgplaybutton,Imgregrasbutton,Imgcreditosbutton, ImgTitulo,ImgCreditos1,ImgCreditos2,ImgTeste,font;
function preload() {
  backgorund1 = loadImage('assets/background_inicial.png');
  Imgplaybutton = loadImage('assets/play.gif');
  Imgregrasbutton = loadImage('assets/regras.gif');
  Imgcreditosbutton = loadImage('assets/creditos.gif');
  ImgTitulo = loadImage("assets/teste01.gif");
  ImgCreditos1 = loadImage("assets/rodrigocreditos.png");
  ImgCreditos2 = loadImage("assets/orivaldocreditos.png");
  ImgTeste = loadImage("assets/logoect.png");
  font = loadFont("assets/PixelifySansVariable.ttf");
}
//SETUP
function setup() {
  createCanvas(Tela_Largura,Tela_Altura);
  textFont(font);
}

//TEMPLATE BOTÃO RETORNAR
//O BOTÃO RETORNAR FOI CRIADO FORA DO DRAW() POIS SE REPETE EM TODAS AS TELAS
function retornar(){
  textAlign(LEFT,LEFT);
  fill(0,0,40)
  rect(25,580,100,50,10);
  fill(70,170,230);
  textSize(30);
  text("<<<", 45, 614);
}

//BOTÕES
function mouseClicked(){

  //TELA INICIAL
  if(tela == 0){
    //PLAY
    if(mouseY > yPlay+10 && mouseY < (yPlay)+tamBtnY-5 && mouseX > xBtnMenu && mouseX < (xBtnMenu)+tamBtnX){
      tela = 1;
    }
    //REGRAS
    else if(mouseY > yRegras+5 && mouseY < (yRegras)+tamBtnY-5 && mouseX > xBtnMenu && mouseX < (xBtnMenu)+tamBtnX){
      tela = 2;
    }
    //CREDITOS
    else if(mouseY > yCreditos && mouseY < (yCreditos)+tamBtnY-7 && mouseX > xBtnMenu && mouseX < (xBtnMenu)+tamBtnX){
      tela = 3;
    }
  }

  //TELA PLAY
  else if(tela == 1){
    if((mouseY > 580 && mouseY < 635 && mouseX > 25 && mouseX < 125) && keyIsDown(ESCAPE)){
      tela = 0;
    }
  }

  //TELA REGRAS
  else if(tela == 2){
    if(mouseY > 580 && mouseY < 635 && mouseX > 25 && mouseX < 125){
      tela = 0;
    }
  }

  //TELA CREDITOS
  else if(tela == 3){
    if(mouseY > 580 && mouseY < 635 && mouseX > 25 && mouseX < 125){
      tela = 0;
    }
  }
}

//TELAS
function draw() {
  //TELA INICIAL
  if(tela == 0){
    background(backgorund1);
    image(ImgTitulo, 430,-40,600,300);
    image(Imgplaybutton,xBtnMenu-20,yPlay-27,tamImgX,tamImgY);
    image(Imgregrasbutton,xBtnMenu-5,yRegras-10,tamImgX+95,tamImgY+150);
    image(Imgcreditosbutton,xBtnMenu-10,yCreditos-25,tamImgX+45,tamBtnY+170);
  }
  //TELA DE PLAY
  else if(tela == 1){
    background(255);

    image(ImgTeste,mousetx,mousety,50,50);
    square(500,300,25,5);
    if(dist(mousetx,mousety,500,300)<30){
      fill(255,130,100);
    }else{
      fill(60,170,170);
    }
    if (keyIsDown(ESCAPE)){
      retornar();
    }
    if (keyIsDown(LEFT_ARROW)) {
      mousetx -= 3;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      mousetx += 3;
    }
    if (keyIsDown(UP_ARROW)) {
      mousety -= 3;
    }
    if (keyIsDown(DOWN_ARROW)) {
      mousety += 3;
    }
  }
  //TELA DE REGRAS
  else if(tela == 2){
    background(10,10,100);
    noFill();
    fill(250,250,255);
    rect(1,75,Tela_Largura,Tela_Altura*0.8,5);
    fill(0);
    textSize(21);
    text(instrucoes, texto_regrasX-55,texto_regrasY);
    textSize(20);
    text(instrucoesobjetivos,texto_regrasX,texto_regrasY+100);
    text(intrucoesregras,texto_regrasX,texto_regrasY+230);
    retornar();
    image(ImgTitulo, Tela_Largura/2.79,-23,400,150);
  }
  //TELA DE CREDITOS
  else if(tela == 3){
    background(10,10,100);
    noFill();
    fill(255,255,255);
    rect(1,75,Tela_Largura,Tela_Altura*0.8,5);
    fill(0);
    text(creditosdesenvolvedor, 100,150);
    text(creditosorientador, 100, 360);
    textSize(14);
    retornar();
    image(ImgTitulo, Tela_Largura/2.79,-23,400,150);
    image(ImgCreditos1,100,190,115,150);
    image(ImgCreditos2,100,395,115,150);
  }
}
