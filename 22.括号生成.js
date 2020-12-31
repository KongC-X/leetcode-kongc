//回溯


const generateParenthesis = function(n) {
  const res = []

  function dfs( l , r , str ) {
    if( l == n && r == n ){
      return res.push(str)
    }
    // l 小于 r 时不满足条件 剪枝
    if( l < r ){ return }
    // l 小于 n 时可以插入左括号，最多可以插入 n 个
    if( l < n ){
      dfs(l + 1 , r , str + "(")
    }
    // r < 1 时 可以插入右括号
    if( r < l ){
      dfs(l , r + 1, str + ")")
    }
  }
  dfs(0 , 0 , "")
  return res
}