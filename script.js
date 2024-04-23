function add(...nums) {
  const result = nums.reduce((acc, num) => {
    return acc + num
  })
  return result
}

function subtract(...nums) {
  const result = nums.reduce((acc, num) => {
    return acc - num
  })
  return result
}

function multiply(...nums) {
  const result = nums.reduce((acc, num) => {
    return acc * num
  })
  return result
}

function divide(...nums) {
  const result = nums.reduce((acc, num) => {
    return acc / num
  })
  return result
}

