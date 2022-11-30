const items = [...document.querySelectorAll('.number')]
console.log(items)

const updateCount = el => {
  //console.log(el)
  const value = parseInt(el.dataset.value)
  //console.log(value)
  const increment = Math.ceil(value / 10000)
  let initialValue = 0

  const increaseCount = setInterval(() => {
    initialValue += increment
    if (initialValue > value) {
      el.textContent = `${value}+`
      clearInterval(increaseCount)
      return
    }
    el.textContent = `${initialValue}`
  }, 100)
}

items.forEach(item => {
  //console.log(item)
  updateCount(item)
})
