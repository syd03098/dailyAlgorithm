export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

export function hasCycle(head: ListNode | null): boolean {
  if (!head || !head.next) {
    return false
  }

  while (head.next !== null) {
    if (head.val === Infinity) {
      return true
    }

    head.val = Infinity
    head = head?.next
  }

  return false
}
