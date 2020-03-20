/*
Given a linked list, remove the n-th node from the end of list and return its head.

Example:

Given linked list: 1->2->3->4->5, and n = 2.

After removing the second node from the end, the linked list becomes 1->2->3->5.
Note:

Given n will always be valid.

Follow up:

Could you do this in one pass?
 */

 /**
  * Definition for singly-linked list.
  * function ListNode(val) {
  *     this.val = val;
  *     this.next = null;
  * }
  */
 /**
  * @param {ListNode} head
  * @param {number} n
  * @return {ListNode}
  */
 function ListNode(val) {
   this.val = val;
   this.next = null;
 }

 let tester = new ListNode(1);
 tester.next = new ListNode(2);
 tester.next.next = new ListNode(3);
 tester.next.next.next = new ListNode(4);
 tester.next.next.next.next = new ListNode(5);


 var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0);
    dummy.next = head;
     let trailer = dummy;
     let leader = dummy;

     for (let i = 0; i <= n ; i++) {
       leader = leader.next;
     }

     while (leader !== null) {
        leader = leader.next;
        trailer = trailer.next;
        // console.log('trailer.val: ', trailer.val)
      }

     trailer.next = trailer.next.next || null;
     return dummy.next;
 };


 // //5,3
 console.log(removeNthFromEnd(tester, 2));
 console.log(tester)
