//题号41

export default (arr) => {
  //过滤掉非正整数
  arr= arr.filter(item => item > 0)
  //正整数数组是不是为空
  if(arr.length){
    //升序，目的：方便从左到右取最小值arr[0]
    arr.sort((a,b) => a - b)
    //如果第一个元素不为 1，返回 1
    if(arr[0] !== 1){
      return 1
    }else{
      //从左边开始遍历，只要下一个元素和当前元素差值  >  1 ，说嘛当前元素的下一个值 + 1
      for(let i = 0,len = arr.length - 1;i < len; i ++){
        if(arr[i + 1] - arr[i] > 1){
          return arr[i] + 1
        }
      }
      return arr.pop() + 1
    }
  }else{
    return 1
  }
}