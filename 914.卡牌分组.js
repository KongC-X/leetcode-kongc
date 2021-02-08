export default (arr) => {
  //对这副牌进行排序，升序降序都可以
  arr.sort((a,b) => a - b)       // a - b是升序 ，b - a是降序
  let min = Number.MAX_SAFE_INTEGER  //设为最大值，tmp.length长度不可能超过它
  let dst = []
  let result = true
  //tmp[]是一个临时空数组，用来存
  for(let i = 0, len = arr.length, tmp = []; i < len; i ++){
    tmp.push(arr[i])
    for(let j = i + 1; j < len - 1; j ++){
      if(arr[i] === arr[j]){
        tmp.push(arr[j])
      }else{
        if(min < tmp.length){
          min = tmp.length
        }
        dst.push([].concat(tmp))         
        //这里要用一个空数组concat，不能直接push，因为tmp数组是引用类型，下一次修改tmp的时候dst里面的数据也会跟着变
        tmp.length = 0  //清空数组
        i = j
        break
      }
    }
  }
  //这里不用forEach而是用every，因为 every可以有返回值
  dst.every(item => {
    if(item.length % min !== 0){
      result = false
      return false
    }
  })
  return result
}