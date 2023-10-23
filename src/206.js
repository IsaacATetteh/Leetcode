/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let left = null;
  let current = head;
  while (current) {
    const next = current.next;
    current.next = left;
    left = current;
    current = next;
  }
  return left;
};
