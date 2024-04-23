function add(...nums) {
  const result = nums.reduce((acc, num) => {
    return acc + num
  }, 0)
  return result
}
