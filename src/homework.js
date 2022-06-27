const compress = (s) => {
  let i = 0
  let j = 0
  const res = []
  while (j < s.length) {
    if (s[i] === s[j]) {
      j += 1
    } else {
      let num = j - i
      res.push(num)
      res.push(s[i])
      i = j
    }
  }
  let num = j - i
  res.push(num)
  res.push(s[i])
  return res
}

module.exports = {
  compress,
}
