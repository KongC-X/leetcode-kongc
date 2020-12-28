var threeSumClosest = function (nums,target,q = []) {
  nums.sort((a,b) => a - b)
  for(let i = 0;i < nums.length - 1;i++){
    let l = i + 1,r = nums.length - 1
    while(l - r){
      let sum = nums[i] + nums[l] + nums[r]
      sum >= target ? (q[sum - target] = sum, r--) : (q[target - sum] = sum, l++)
    }
  }
  return q.find(v => v != undefined)
}