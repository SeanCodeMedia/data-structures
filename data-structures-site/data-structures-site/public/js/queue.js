
import Node from "./node.js"



export default class Queue{

     constructor(limit=5){
        
        this.head = null 
        this.tail = null 
        this.size = 0 
        this.limit = limit        
     }


    enqueue(value){
         
        if(this.has_space()){
        	var item_to_add = new Node(value)
        	
        	if(this.is_empty()){
              this.head = item_to_add
        	  this.tail = item_to_add
        	} else {

        	    this.tail.set_next_node(item_to_add)
        	    this.tail = item_to_add
        	}

        	this.size += 1
        	
        	console.log("adding to queue")
        } else{
        	console.log("queue overflow")
        }
          
    }


    dequeue(){
          
    	 if(this.get_size() > 0){
           
           var item_to_remove = this.head
          
           if(this.size == 1){
               this.head = null 
               this.tail = null
           }else {
           	  this.head = this.head.get_next_node()
           }
            this.size -= 1
            return item_to_remove.get_value().toString()
    	 }else {
               
    	 	 return "queue underflow"
    	 }
    }


    peek(){

    	if(this.get_size() > 0){
    		return this.head.get_value().toString()
    	} else{
    		return "Queue is empty"
    	}
    }


     has_space(){

     	 if(this.limit > this.size){
     	 	 return true
     	 } else {
     	 	return false 
     	 }
     }
       
    get_size(){
    	 return this.size
    }

     is_empty(){

     	if(this.size == 0){
     		return true
     	}
     }


}