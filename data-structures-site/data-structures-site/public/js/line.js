import Queue from './queue.js';
import Box   from './box.js'


new p5 (function(p5){

  	 let queue = new Queue(4)
     var stack_to_draw = 0
     var box_X = 105
     var box_Y = 180
     var boxs_draw = []

  p5.setup = function(){ 

  	   // ask user to set Queue limit here

	 let canvas = p5.createCanvas(425,300);
	 canvas.position((p5.windowWidth/2)-100, (p5.windowHeight/2)-100);
 	 p5.background(52, 152, 219);
     

    let enqueue = p5.createButton('enqueue');
     enqueue.position((p5.windowWidth/2)+230, (p5.windowHeight/2)+150);
     enqueue.mousePressed(_enqueue);


     let dequeue = p5.createButton('dequeue');
     dequeue.position((p5.windowWidth/2)+10, (p5.windowHeight/2)+150);
     dequeue.mousePressed(_dequeue);
     

     let peek = p5.createButton('Peek');
     peek.position((p5.windowWidth/2)+100, (p5.windowHeight/2)+150);
     peek.mousePressed(_peek);
  }


	 function _enqueue() {
	        // add at the bock 
	       if(stack_to_draw != 0){

	     	box_Y -= 50
	     }
         

	     var data = prompt("What data you would like to add to the queue ?");

        if(queue.has_space()){

         queue.enqueue(data)
	     stack_to_draw += 1
	     var box = new Box(p5, box_X,box_Y, 50, data)
	     boxs_draw.push(box)
        } else {

        	 alert("queue over flow")
        }

	 }

	 function _dequeue(){
        // remove from head 
       alert( "data dequeue " + queue.dequeue())
       boxs_draw.pop()
       stack_to_draw -=1 

        if(stack_to_draw != 0){

	          box_Y += 50
	     }

	 }

	 function _peek(){

        alert( "data " + queue.peek())
	 }


   p5.draw = function(){
   	   p5.clear();
   	   p5.background(52, 152, 219);
       for (var i = 0; i <  boxs_draw.length; i++) {	
       	  boxs_draw[i].draw() 
       }
      
  }




}); 
