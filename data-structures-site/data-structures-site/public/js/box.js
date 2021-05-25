export default class Box {

	 constructor( p5, x, y, size, data){

	 	this.x = x
	 	this.y = y
	 	this.size = size
	 	this.data = data
	 	this.p5 = p5
	 	this.color = Math.floor(Math.random() * 219)

	 }

      
     draw(){
    	this.p5.fill(this.color);
        this.p5.square(this.x, this.y, this.size);
        this.p5.fill(255);
        this.p5.text(this.data.toString(), this.x+30, this.y+30);
     }

}
