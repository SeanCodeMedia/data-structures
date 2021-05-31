
import InputGenerator from "./Input generator.js"


class MergeSort{

	constructor(){
    this.first = false
    this.start_time = 0
    this.end_time = 0
  }
      
    

      merge_sort(items){
          
        const middle_index = parseInt(items.length) / 2
      	
        if(items.length <=1 ){
      		return items
      	}

        if(this.first == false){
          
          this.start_time = new Date()
          this.first = true
        }

     
        var left_split = items.splice(0, middle_index)

        var left_sorted = this.merge_sort(left_split)
        var right_sorted = this.merge_sort(items)

        console.log("Left "  + left_sorted)
        console.log("Right " + right_sorted)

        return  this.merge(left_sorted, right_sorted)

      }


      merge(left_items, right_items){
          
          let result = []
          var left   = left_items
          var right  = right_items

          
          while (left.length !== 0 && right.length !== 0) {
              
                console.log(left[0] < right[0] )
                 console.log(left[0] > right[0] )
               if(left[0] < right[0]){
                     
                       result.push(left.shift())

                       
                
               }
                
               else if(left[0] > right[0]) {
                    
               	 		result.push(right.shift())

               }       
              
          }

          if(left.length === 0 || right.length === 0){
              this.end_time = new Date()
              var time_difference = this.end_time - this.start_time 
              console.log(time_difference /=1000)

          }
         


         return [ ...result, ...left, ...right ]
      }

}

var input =  new InputGenerator(27)
var sort  =  new MergeSort()
console.log("Sorted " + sort.merge_sort(input.get_unsorted_array()))
