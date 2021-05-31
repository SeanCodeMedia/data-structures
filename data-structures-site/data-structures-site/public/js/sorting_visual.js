

export default class SortingVisual {
   
   constructor(p5, unsorted_array, sortingAlgorithem = null){
     
      this.counter = 0
      this.rect_width = 15
      this.rect_x = 0
      this.previous_x_pos = 0
      this.rect_y = 400
      this.p5 = p5;
      this.unsorted_array = unsorted_array; 

    
   }
   
   draw(){
       while (this.counter < this.unsorted_array.length-1){
          
           this.counter = this.counter +1

           this.p5.rect(this.rect_x + this.previous_x_pos, this.rect_y, this.rect_width, -this.unsorted_array[this.counter]);
           this.p5.textSize(15);
		   this.p5.text(this.unsorted_array[this.counter],this.rect_x + this.previous_x_pos, this.rect_y+(this.unsorted_array[this.counter])*-1);
           this.previous_x_pos += this.rect_width

           console.log("draw") 
       }
    
       if(this.counter === this.unsorted_array.length-1){
            
            this.counter = 0
            this.rect_x = 0
      		this.previous_x_pos = 0
       	  
       }
    }


    get_unsorted_array(){


    } 

    set_unsorted_array(array){

         this.unsorted_array = array
         this.counter = 0
         this.p5.clear()
    }

}