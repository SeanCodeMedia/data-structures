import InputGenerator from "./input generator.js"

// https://www.youtube.com/watch?v=MZaf_9IZCrc

// best case n(log n) average case n(log n) worst case is O(n^2) 


function swap(array, element_1, element_2){
      
      let temp = array[element_1]
      element_1 = array[element_2]
      element_2 = temp 

    return array
}



function quicksort(array, start, end){
     
       if(start >= end){
       	  console.log(array)
       	 return array
       }

       var index = partition(array, start, end)
  	  
  	    quicksort(array,start, index-1) // left side of the list
        quicksort(array, index+1, end) // right side of the list 
     

}



function partition(array, start, end){
    
    let i = start; 
    let pivot = array[end]
    console.log("unorded array " + array)
    console.log("pivot " + pivot)

	for(let j = start; j < end; j++){

        if(array[j] < pivot) {

        	let temp = array[j]
        	array[j] = array[i]
      		array[i] = temp 
      		      i++
        	console.log(array)
        }

	}
     
    	let temp = array[end]
    	    console.log(temp)
    	 	array[end] = array[i]
      		array[i] = temp 

	console.log("array 2" + array)
	return i

}



var input =  new InputGenerator(5)
quicksort(input.get_unsorted_array(), 0, input.get_unsorted_array().length-1)
