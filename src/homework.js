const jgfhjgik = (s) => {
  const numbers = "0123456789"
  let i = 0
  let j = 0
  const res = []
  while (i < s.length) {
    if (numbers.includes(s[i])) {
      j++
    } else {
      let times = Number(s.slice(j, i))
      for (let t = 0; t < times; t++) {
        res.push(s[i])
      }
      i++
      j = i
    }
  }
  return res.join("")
}
jgfhjgik("3n12e2z")
console.log(jgfhjgik("3m2n12u5x"))
