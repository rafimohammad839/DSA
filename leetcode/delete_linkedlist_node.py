# Create a class for LinkedList

class Node:
    def __init__(self, data=None):
        self.data = data
        self.next = None
    
class LinkedList:
    def __init__(self):
        self.head = None
    
    def prepend(self, data):
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node
    
    def append(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            return
        last = self.head
        while last.next:
            last = last.next
        last.next = new_node

    def delete(self, data):
        temp = self.head

        #If head node itself holds data to be deleted
        if temp is not None and temp.data == data:
            self.head = temp.next
            temp = None
            return
        
        # Search for the node to be deleted
        while temp is not None:
            if temp.data == data:
                break
            prev = temp
            temp = temp.next

        # If node was not found, return
        if temp is None:
            return
        
        # Unlink the node from linked list
        prev.next = temp.next
        temp = None

    def print_list(self):
        temp = self.head
        while temp:
            print(temp.data, end=" -> ")
            temp = temp.next
        print("None")

    def print_list_head(self, head):
        current = head
        while current:
            print(current.data, end=" -> ")
            current = current.next
        print("None")

    # Leetcode 237. Deleted Node in a LinkedList
    def delete_node(self, node):
        node.data = node.next.data
        node.next = node.next.next

# Example usage
linked_list = LinkedList()
linked_list.append(1)
linked_list.append(2)
linked_list.append(3)
linked_list.append(4)
linked_list.append(5)

linked_list.print_list()

linked_list.delete(3)
print("List after deleting Node with value 3: ")
linked_list.print_list()

# Leetcode question:

node1 = Node(3)

node2 = Node(4)

node3 = Node(5)

node1.next = node2

node2.next = node3

linked_list.delete_node(node2)

print("List after deleting Node with value 4: ")

linked_list.print_list_head(node1)