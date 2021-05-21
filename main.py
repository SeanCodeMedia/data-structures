# We'll be using our Node class
class Node:
  def __init__(self, value, next_node=None):
    self.value = value
    self.next_node = next_node
      
  def get_value(self):
    return self.value
  
  def get_next_node(self):
    return self.next_node
  
  def set_next_node(self, next_node):
    self.next_node = next_node

# Our LinkedList class
class LinkedList:
  def __init__(self, value=None):
    self.head_node = Node(value)

  
  def get_head_node(self):
    return self.head_node
  
# Add your insert_beginning and stringify_list methods below:

  def insert_beginning(self, new_value):
    new_node = Node(new_value)
    new_node.set_next_node(self.head_node)
    self.head_node = new_node

  def stringify_list(self):
    
    string_list = ""
    current_node = self.get_head_node()

    while (current_node != None):

      string_list += str(current_node.get_value()) + "\n"

      current_node = current_node.get_next_node()
      
    return string_list 

  def remove_node(self, value_to_remove):
    current_node = self.get_head_node()
    current_next_node = current_node.get_next_node()

    if(value_to_remove == current_node.get_value()):

      self.head_node = current_node.get_next_node()  # if the first node has the value we want to remove then great we don't loop through the list

    else:

      while current_next_node != None:
        
        if(current_next_node.get_value() == value_to_remove):

          print("remove")

          current_node.set_next_node(current_next_node.get_next_node())

          current_next_node = None

        else:
          current_node =  current_node.get_next_node()
          current_next_node =  current_node.get_next_node()

  

   

# Test your code by uncommenting the statements below - did your list print to the terminal?
ll = LinkedList(5)
ll.insert_beginning(70)
ll.insert_beginning(5675)
ll.insert_beginning(90)
ll.remove_node(5)
print(ll.stringify_list())


