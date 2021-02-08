export default (root) => {
  let res = 0
  const dfs = (n ,level) => {
    if(!n) { return }
    if(!n.left && !n.right ){
      res = Math.max(res, level)
    }
    dfs(n.left , level + 1)
    dfs(n.right , level + 1)
  }
  dfs(root,1)
  return res
}