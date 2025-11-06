//Uppercase p for the class name, lowercase for file name.
//This class draws the pipe obstacle on the screen.
export class PipeObstacle {

    x = 0;
    y = 5;
    height = 500;
    canvas;
    pencil;

    //pipe parts
    topPipe;
    bottomPipe;

    constructor(canvas, pencil) {
        this.pencil = pencil;
        this.canvas = canvas;
    }

    draw() {

        //top pipe
        this.pencil.fillStyle = 'blue'; // Set the fill color
        this.pencil.fillRect(
            this.x, 
            this.y - (this.height - this.y), 
            100, 
            this.height
        ); // x, y, w, h

        //bottom pipe
        this.pencil.fillStyle = 'violet'; // Set the fill color
        this.pencil.fillRect(this.x, this.y + 350, 100, 75); // x, y, w, h
    }



}