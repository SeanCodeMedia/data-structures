
import Node from "./node.js"

export default class LinkList {

   constructor(value){
       this.head_node = new Node(value)
   } 


   get_head_node(){
   	   return this.head_node
   	}


   insert_at_beginning(value){
     
     /*
       insert a node at the head of the link list and set the old head to link to the new head 
     */

     var newNode = new Node(value)
     newNode.set_next_node(this.get_head_node())
     this.head_node = newNode
   }



   get_current_node(){


   }


   remove_node(value_to_remove){
        
        /*
           the var current_node_next_node (future node) look at the node next to current node and check if that node's value or data is equal to the value_to_remove
           if it is we remove the node and then we set the current node's reference to the node next to current_node_next_node(our future node)
           therefore removing reference to the node we want to remove 

        */

        var current_node = this.get_head_node() // hold a current node
        var current_node_next_node = current_node.get_next_node() // hold a future node 

        if(current_node.get_value() == value_to_remove){
        	 this.head_node = current_node.get_next_node()
        } else {
                
             while (current_node_next_node != null) {

           
                  if(current_node_next_node.get_value() == value_to_remove) {

                  	   console.log("removed")

                  	   current_node = current_node.set_next_node(current_node_next_node.get_next_node())

                  	   current_node_next_node = null
                  } else {

                  	  current_node_next_node = current_node_next_node.get_next_node()
                  	  current_node = current_node.get_next_node()
                  }

             } 

        }}



   stringify(){

   	  /*
       prints out our link list 
   	  */

   	  var text = ""

   	  var current_node = this.get_head_node()

   	  while (current_node != null){

   	  		text += current_node.get_value().toString() + "\n"
   	  		current_node =current_node.get_next_node()
   	  }
   	  
        return text 
   } 

}