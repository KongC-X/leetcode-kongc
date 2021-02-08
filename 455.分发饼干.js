export default (g , s) => {
  const sortFunc = function (a,b) {
    return a - b
  }
  g.sort(sortFunc)
  s.sort(sortFunc)

  let  i = 0
  s.forEach(n => {
    if(n >= g[i]){
      i += 1
    }
  })
  return i
}