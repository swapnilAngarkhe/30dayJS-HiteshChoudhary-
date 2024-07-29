//TASK 1 and 2

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
const node1 = new Node(10);
const node2 = new Node(10, node1);
const node3 = new Node(node1, node2);
console.log(node1);
console.log(node2);
console.log(node3);

 
class LinkedList {
  constructor(head) {
    this.head = head;
  }

  addNode(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  removeNode() {
    if (!this.head) {
      console.log("list is empty");
      return;
    }

    if (!this.head.next) {
      return null;
    }

    let current = this.head;
    let previous = null;
    while (current.next) {
      previous = current;
      current = current.next;
    }
    previous.next = null;
  }

  display() {
    if (!this.head) {
      console.log("list is empty.");
      return;
    }

    let current = this.head;
    while (current.next) {
      console.log(current.value);
      current = current.next;
    }
  }
}
const newList = new LinkedList();
newList.addNode(10);
newList.addNode(20);
newList.addNode(30);
newList.addNode(40);
console.log("after adding nodes:");
newList.display();

newList.removeNode();
console.log("after removing the last node:");
newList.display();

newList.removeNode();
newList.removeNode();
console.log("after removing all nodes:");
newList.display();