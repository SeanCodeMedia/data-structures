import SortingVisual from "./sorting_visual.js"
import BubbleSort     from "./bubble_sort.js"
import InputGenerator from "./input generator.js"

new p5(function(p5){

 
   let input_gen = new InputGenerator(50)
   let sorting_visual = new SortingVisual(p5, input_gen.get_unsorted_array())
  // create a condition to a init sorting algorithem
  let bubble_sort  =  new BubbleSort(input_gen.get_unsorted_array(), sorting_visual)

  p5.setup = function(){

	 let canvas = p5.createCanvas(800,800);
	 canvas.position(0, 0);
 	 p5.background(52, 152, 219);
     
    

   
    let sortButton = p5.createButton('Sort');
        sortButton.position(100, (p5.windowHeight/2)+150);
        sortButton.mousePressed(sort);
  }

  p5.draw = function(){
    p5.background(52, 152, 219);
    sorting_visual.draw()

  }


  function sort(){

    bubble_sort.bubble_sort()

  }

}); 
