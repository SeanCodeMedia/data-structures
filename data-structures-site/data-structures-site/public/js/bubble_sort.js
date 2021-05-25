

export default class InputGenerator {
 

     constructor(input_to_generate = 10){
     	   this.random_number_array = []
           this.input_to_generate = input_to_generate
           this.populate_array(input_to_generate)
          
     }


     populate_array(input_to_generate){

     	   if(this.random_number_array.length > 0){
     	   	    this.random_number_array = []
     	   }
   			
            for (var i =0; i < input_to_generate; i++) { 
            	 this.random_number_array.push(Math.floor(Math.random()*100))
            }
            

     }


      get_unsorted_array(){
      	 return this.random_number_array
      }

       
 
}


export class BubbleSort{

     
	 constructor(unsorted_array){
	 	 console.log("Unsorted " + unsorted_array)
         this.temp = null 
         this.unsorted_array = unsorted_array

	 }

      
     swap(index_1, index_2){
     	var temp = this.unsorted_array[index_1]
     	this.unsorted_array[index_1] = this.unsorted_array[index_2] 
     	this.unsorted_array[index_2] = temp
     }


     bubble_sort(){ 

     	 for  (var y in this.unsorted_array) {
             
             for (var x in this.unsorted_array) {

             	     if(x < this.unsorted_array.length-1){
 							        var index = (parseInt(x))
                    	
                       if(this.unsorted_array[index] > this.unsorted_array[index+1]){
                        console.log("swap")
                         this.swap(index, index+1)
            
                       }        

             	     }

                  
             }

     	 }

     	 return this.unsorted_array
     }

}



var input =  new InputGenerator(100)
var sort  =  new BubbleSort(input.get_unsorted_array())


console.log("Sorted " + sort.bubble_sort())

