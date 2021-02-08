//题号215

export default (arr,k) => {
  return arr.sort((a,b) => b - a)[k - 1]
}


export default (arr,k) => {
  let len =  arr.length - 1
  for(let i = len,tmp;i > len - k;i --){
    for(let j = 0;j < i; j ++){
      tmp = arr[j]
      if(tmp > arr[j + 1]){
        arr[j] = arr[j + 1]
        arr[j + 1] = tmp
      }
    }
  }
  return arr[len - (k - 1)]
}