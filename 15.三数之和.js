var threeSum = function (nums) {
  let ans = []
  const len = nums.length
  if(nums == null || len < 3) return ans
  nums.sort((a,b) => a - b)
  for(let i = 0;i < len; i ++){
    if(nums[i] > 0) break  //如果当前数字大于0，则三数之和一定大于0，所以结束循环
    if(i > 0 && nums[i] === nums[i - 1]) continue  //去重
    let l = i + 1
    let r = len - 1
    while(l < r){
      let sum = nums[i] + nums[l] + nums[r]
      if(sum === 0){
        ans.push([nums[i],nums[l],nums[r]])
        while(l < r && nums[l] === nums[l + 1]) l++ //去重
        while(l < r && nums[r] === nums[r - 1]) r-- //去重
        l++
        r--
      }
      else if(sum < 0) l++
      else if(sum > 0) r--
    }
  }
  return ans
}