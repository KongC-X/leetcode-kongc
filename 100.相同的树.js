var isSameTree = function (p,q) {
  if(!q && !p) return true
  if(p && q && p.val === q.val &&
    isSameTree(p.left,q.left) &&
    isSameTree(p.right,q.right)
    ){
      return true
    }
    return false
}