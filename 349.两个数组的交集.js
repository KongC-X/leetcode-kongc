export default (nums1,nums2) => {
  //return [...new Set(num1)].filter(n => new Set(num2).has(n))
  // return [...new Set(num1)].filter(n => num2.includes(n))
  const map = new Map()
  nums1.forEach(n => {
    map.set(n , true)
  });
  const res = []
  nums2.forEach(n => {
    if(map.get(n)){
      res.push(n)
      map.delete(n)
    }
  });
  return res
}