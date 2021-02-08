export default root => {
  if(!root) return []
  const q = [[root,0]]
  const res = []
  while(q.length){
    const[n , level] = q.shift()
    if(!res[level]){
      res.push([n.val])
    }else{
      res[level].push(n.val)
    }
    if(n.left) q.push([n.left , level + 1])
    if(n.right) q.push([n.right , level + 1])
  }
  return res
}