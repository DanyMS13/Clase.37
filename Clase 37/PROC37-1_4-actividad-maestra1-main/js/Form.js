class Form {
  constructor() {
    this.inpit = createInput("").attribute("placeholder","Introduce tu nombre");
    this.playButton =creatteButton ("Jugar")
    this.titleImg = createImg("./assets/title.png", "título del juego"); 
    this.greeting = createElement("h2")
  }

  this.titleImg = createImg("./assets/title.png", "título del juego"); 
  this.greeting = createElement("h2");  

  setElementsPosition() {
    this.titleImg.position(120, 100); 
    this.input.position(width / 2 - 110, height / 2 - 80); 
    this.playButton.position(width / 2 - 90, height / 2 - 20); 
    this.greeting.position(width / 2 - 300, height / 2 - 100); }  

    /* setElementsStyle() { this.titleImg.class("gameTitle"); 
    this.input.class("customInput"); 
    this.playButton.class("customButton"); 
    this.greeting.class("greeting"); } */ 
    hide() 
    { this.greeting.hide(); 
      this.playButton.hide(); 
      this.input.hide(); } 
      
      handleMousePressed() { 
        this.playButton.mousePressed(() => { 
        this.input.hide(); 
        this.playButton.hide(); 
        var message = ` Hola ${
        this.input.value()} 
        </br>Espera a que se una otro jugador...`; 
        this.greeting.html(message); player.name = 
        this.input.value(); player.index = 1; 
        //player.addPlayer(); }); } display() { 
          this.setElementsPosition(); 
          //this.setElementsStyle(); 
          this.handleMousePressed(); }
      }
    }
