function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("white");
  fill("black");
  textSize(64);
  textAlign(CENTER, CENTER);
  
   let palavra = "Caminhante"; 
  if(mouseX < 50) {  
    let palavra = "C";
        text(palavra, 200, 200);
   }else {
    let palavra = "Caminhante";
    text(palavra, 200, 200);
    
     }
}
