
import LinkList from './linkList.js';


new p5(function(p5){

  let ll = new LinkList(5)
  ll.insert_at_beginning(30)
  ll.insert_at_beginning(40)
  ll.insert_at_beginning(60)
  ll.insert_at_beginning(62)

  var current_node = ll.get_head_node()
  var current_node_future = current_node.get_next_node()
  
  var isEnd = false

  p5.setup = function(){


	 let canvas = p5.createCanvas(425,300);
	 canvas.position((p5.windowWidth/2)-100, (p5.windowHeight/2)-100);
 	 p5.background(52, 152, 219);
     

     let prev = p5.createButton('Prev Node');
     prev.position((p5.windowWidth/2)-90, (p5.windowHeight/2)+150);
     prev.mousePressed(clicked);

     let next = p5.createButton('Next Next');
     next.position((p5.windowWidth/2)+230, (p5.windowHeight/2)+150);
     next.mousePressed(next_node);


     let add = p5.createButton('Add Node');
     add.position((p5.windowWidth/2)+10, (p5.windowHeight/2)+150);
     add.mousePressed(add_node);
     

     let remove = p5.createButton('Remove Node');
     remove.position((p5.windowWidth/2)+100, (p5.windowHeight/2)+150);
     remove.mousePressed(clicked);


  }

  p5.draw = function(){
     var card_size = 200

     p5.square(105, 20, 200);
     p5.textSize(100);

        
       
        	p5.text(current_node.get_value().toString(), card_size-20, card_size-50);
      
    
  }

  function clicked(){
  	console.log("button clicked")
  }


  function add_node(){
      
      var data = prompt("Add some data to create a new node in the link list");
      ll.insert_at_beginning(data)
      current_node = ll.get_head_node()

      
 
  }

  function remove_node(){


  }


  function next_node (){

  	  if(current_node.get_next_node() != null){
       	      current_node = current_node.get_next_node()
       	      current_node_future = current_node.get_next_node()
       	 
       } else {
       	    
			isEnd = true
       	   
       }
  }

  function previous_node (){


  }

}); 



