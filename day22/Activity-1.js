function listNode(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
  
  function addTwoNums(l1, l2) {
    let carry = 0;
    let dummyHead = new listNode(0); // Sentinel node
    let currentNode = dummyHead;
  
    while (l1 || l2 || carry) {
      const val1 = l1 ? l1.val : 0;
      const val2 = l2 ? l2.val : 0;
  
      const sum = val1 + val2 + carry;
      carry = Math.floor(sum / 10);
      currentNode.next = new listNode(sum % 10);
      currentNode = currentNode.next;
  
      if (l1) l1 = l1.next;
      if (l2) l2 = l2.next;
    }
  
    return dummyHead.next;
  }
  
  function printLinkedList(head) {
    let values = [];
    while (head) {
      values.push(head.val);
      head = head.next;
    }
    console.log(values.join(' -> '));
  }
  
  let l1 = new listNode(2, new listNode(4, new listNode(3))); // 342
  let l2 = new listNode(5, new listNode(6, new listNode(4))); // 465
  let result = addTwoNums(l1, l2);
  console.log("Sum:");
  printLinkedList(result);