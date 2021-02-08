var invertTree = function(root){
  if(!root) {return null}
  return {
    val:root.val,
    left:invertTree(root.right),
    right:invertTree(root.left)
  }
}