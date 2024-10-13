function ListNode(val){
  this.val = val;
  this.next = null;
}

function removeNthFromEnd(head,n){
  let dummyHead = {next: head};
  let start = dummyHead;
  let end = dummyHead;

  for (let i = 1; i <= n; i++){
    end = end.next;
  }

  while (end.next){
    end = end.next;
    start = start.next;
  }

  start.next = start.next.next;
  return dummayHead.next;

}