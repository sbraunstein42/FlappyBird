export class Bird {
    
    x = 50;
    y = 50;
    width = 50;
    height = 50;
    canvas;
    pencil;

    constructor(canvas, pencil) {
        this.canvas = canvas;
        this.pencil = pencil;
    }


    draw() {
        //top pipe
        this.pencil.fillStyle = 'black'; // Set the fill color
        this.pencil.fillRect(
            this.x, 
            this.y, 
            this.width, 
            this.height
        ); // x, y, w, h
    }



    chirp() {
        console.log("Cheep!");
    }

}