
export default class BubbleSort{

     
	 constructor(unsorted_array, sorting_visual){
	 	 console.log("Unsorted " + unsorted_array)
         this.temp = null 
         this.unsorted_array = unsorted_array
         this.sorting_visual = sorting_visual

	 }

      
     swap(index_1, index_2){
     	var temp = this.unsorted_array[index_1]
     	this.unsorted_array[index_1] = this.unsorted_array[index_2] 
     	this.unsorted_array[index_2] = temp
     }


     bubble_sort(){ 

     	 for  (var y = 0;  y < this.unsorted_array.length; y++) {
             
             for ( var x = 0; x < this.unsorted_array.length-y; x++) {

                       if(this.unsorted_array[x] > this.unsorted_array[x+1]){
                         this.swap(x, x+1)
                       }        

                         this.sorting_visual.set_unsorted_array(this.unsorted_array)
            
                  
             }

     	 }

     	 return this.unsorted_array
     }

}



