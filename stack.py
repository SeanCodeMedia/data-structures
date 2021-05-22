
from node import Node


class Stack: 

	def __init__(self, limit=5000):
		self.top_item = None
		self.size = 0
		self.limit = limit 


	def push(self, value):
		if self.has_space():
			new_item = Node(value) # create a new node 
			new_item.set_next_node(self.top_item) # set the new node next node to the previous top node
			self.top_item = new_item # set the stack top item to the new node we created
			self.size += 1
		else:
			print("stack has no space")


	def pop(self): 

		if not self.is_empty():
			item_to_remove = self.top_item
			self.top_item = item_to_remove.get_next_node()
			self.size -= 1
			return item_to_remove
		print("cannot pop off stack because its empty")


	def peek(self):
		return self.top_item 


	def is_empty(self):
		if self.size == 0: 
			print("stack is empty")
			return True
		else:
			print("stack is not empty")
			return False


	def has_space(self):
		if self.limit > self.size:
			print("Stack has space")
			return True
		else:
			print("Stack is Full")
			return False 




pizza_stack = Stack(6)
# Adding pizzas as they are ready until we have 
pizza_stack.push("pizza #1")
pizza_stack.push("pizza #2")
pizza_stack.push("pizza #3")
pizza_stack.push("pizza #4")
pizza_stack.push("pizza #5")
pizza_stack.push("pizza #6")

# Uncomment the push() statement below:
pizza_stack.push("pizza #7")



# Delivering pizzas from the top of the stack down
print("The first pizza to deliver is " + str(pizza_stack.peek()))

pizza_stack.pop()
pizza_stack.pop()
pizza_stack.pop()
pizza_stack.pop()
pizza_stack.pop()
pizza_stack.pop()

# Uncomment the pop() statement below:
pizza_stack.pop()