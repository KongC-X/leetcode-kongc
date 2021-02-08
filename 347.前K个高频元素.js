var topKFrequent = function(nums, k) {
  const map = new Map()
  nums.forEach(n => {
    map.set(n , map.has(n) ? map.get(n) + 1 : 1)
  });
  const list = Array.from(map).sort((a , b) => b[1] - a[1])
  return list.slice(0 , k).map(n => n[0])
};