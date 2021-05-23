


export default class Node{

	  constructor(value, next_node=null){
           
           this.value = value
           this.next_node = next_node   
	  }

	  get_previous_node(){

	  	
	  }

	  get_value () {
	  	return this.value
	  }

	 get_next_node () {
	 	return this.next_node 
	 }

	 set_next_node(next_node) {
	 	this.next_node = next_node
	 }

	 set_value(value) {
	 	this.value = value
	 }

}