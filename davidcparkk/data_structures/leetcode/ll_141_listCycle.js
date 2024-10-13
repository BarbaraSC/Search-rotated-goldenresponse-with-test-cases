function circularList(head){
  let slow = head;
  let fast = head;

  while (fast && fast.next){
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast){
      return true;
    }
  }
  return false;
}

TIME: O(N)

SPACE: O(1) using two nodes regardless of LL