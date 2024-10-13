function ListNode(val){
  this.val = val;
  this.next = null;
}

function reverseList(head){
  let prev = null;
  let current = head;

  while(current !== null){
    let temp = current.next;

    current.next = prev;

    prev = current;
    current = temp;
  }

  return prev;
}


TIME: O(N)
SPACE: O(1)