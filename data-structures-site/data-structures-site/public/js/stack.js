

import Node from "./node.js"



export default class Stack{


  constructor(limit=5){
     
      this.head_node = null
      this.size = 0
      this.limit = limit
  }


  peek(){
      
      if(this.head_node != null){
      	    return this.head_node.get_value()
      	} else {

      		return "Null is_empty stack"
      	}
 
  }


  push(value){
  
  	 if(this.has_space()){
	  	 var new_node = new Node(value)
	     new_node.set_next_node(this.head_node)
	     this.head_node = new_node
	     this.size = this.size + 1 
  	 } else{
  	 	console.log("stack over flow")
  	 }

  	 	 console.log(this.limit)
  	 console.log(this.size)
 
  }


  pop(){
      
    if (!this.is_empty()) {
       
       var item_to_remove = this.head_node
       this.head_node = item_to_remove.get_next_node()
       this.size -= 1
       return item_to_remove.get_value()

    } else {

    	 return "Stack underflow"
    }
   
  }

  is_empty(){
    if(this.size == 0){
    	return true
    } else {
    	return false
    }
  }

  has_space(){
     if(this.limit > this.size) {
     	return true
     } else {
     	return false
     }
  }
   
}