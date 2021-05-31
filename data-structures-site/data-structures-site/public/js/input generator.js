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

      
      get_unsorted_array_length(){
          return this.random_number_array.length
      }
      
      get_unsorted_array(){
      	 return this.random_number_array
      }

       
 
}
