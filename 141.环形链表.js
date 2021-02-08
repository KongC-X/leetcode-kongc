var hasCycle = function(head) {
  var p = [head, head]
  while (p[0] && p[1]) {
      p = [p[0].next, p[1].next ? p[1].next.next : null]
      if (p[0] && p[0] === p[1]) return true
  }
  return false
};