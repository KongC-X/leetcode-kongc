export default (input) => {
  //表示自己的钱箱（用于存储零钱）
  let hand = []
  //判断是否还有顾客还在
  while(input.length){
    //取出当前排在最前面的顾客的钱
    let money = input.shift()
    //这种情况不需要找零
    if(money === 5){
      hand.push(money)
    }else{
      //手里的零钱要降序排列，也就是说最大的面值的钱放在最前面
      hand.sort((a,b) => b - a)
      //顾客的钱减去饮料的钱就是需要找给顾客的钱
      let change = money - 5
      for(let i = 0,len = hand.length; i < len; i ++){
        if(hand[i] <= change){
          change -= hand[i]
          hand.splice(i , 1)
          //删除了元素，数组的长度发生了变化，要维持刚才的 i 不变
          i--
        }
        if(change === 0){
          break
        }
      }
      if(change !== 0){
        return false
      }else{
        //顾客的钱存起来
        hand.push(money)
      }
    }
  }
  return true
}
