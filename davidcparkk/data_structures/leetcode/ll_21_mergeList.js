function mergeSortedList(l1, l2){
  let dummyHead = { next: null };
  let tail = dummyHead;

  while(l1 && l2){
    if (l1.val < l2.val){
      tail.next = l1;
      tail = tail.next;
      l1 = l1.next;
    } else {
      tail.next = l2;
      tail = tail.next;
      l2 = l2.next;
    }
  }

  tail.next = l1 || l2;
  return dummy.next;

}

TIME:  O(N+M)
SPACE:  O(1) always using 3 pointers