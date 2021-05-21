class Node: 

	def __init__(self, value, next_node=None):

		self.value = value
		self.next_node = next_node


	def set_next_node(self, next_node):
		self.next_node = next_node


	def set_value(self, value):
		self.value = value 


	def get_value(self):

		return self.value


	def get_next_node(self):
		return self.next_node





class LinkList:

	def __init__(self, value):
		self.head_node = Node(value)
		self.count = 0


	def get_head_node(self):
		return self.head_node


	def insert_at_beginning(self, value):
		newNode = Node(value)
		newNode.set_next_node(self.get_head_node())
		self.head_node = newNode


	def stringify(self): 

		text = ""

		current_node = self.get_head_node()

		while current_node != None:

			text += str(current_node.get_value()) + "\n"

			current_node = current_node.get_next_node()

		return text



	def remove_node(self, value_to_remove):

		current_node = self.get_head_node()

		current_node_next_node = current_node.get_next_node()

		if(current_node.get_value() == value_to_remove):

			self.head_node = current_node.get_next_node()

		else:

			while current_node_next_node != None:

				self.count = self.count + 1

				if (current_node_next_node.get_value() == value_to_remove): 

					print("remove")

					current_node =  current_node.set_next_node(current_node_next_node.get_next_node())

					current_node_next_node = None 

				else:

					current_node_next_node = current_node_next_node.get_next_node()
					current_node = current_node.get_next_node()

 



ll = LinkList(5)
ll.insert_at_beginning(1)
ll.insert_at_beginning(10)
ll.insert_at_beginning(20)
ll.insert_at_beginning(100)
ll.remove_node(5)
print(ll.stringify())




