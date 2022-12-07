let filteredProducts = [...products]
//console.log(products)

const productsContainer = document.querySelector('.products_container')

const displayProducts = () => {
  productsContainer.innerHTML = filteredProducts
    .map(({ id, image, title, price }) => {
      return `<article class='product' data-id='${id}'>
  <img
    src='${image}'
    alt='product'
    class='product_img img'
  />
  <footer>
    <h5 class='product_name'>'${title}'</h5>
    <span class='product_price'>'$${price}'</span>
  </footer>
</article>
`
    })
    .join('')
}
displayProducts()

/* Filter by Text */
const form = document.querySelector('.input_form')
const searchInput = document.querySelector('.search_input')

form.addEventListener('keyup', () => {
  if (filteredProducts.length < 1) {
    productsContainer.innerHTML = `<h6>Sorry, the search has no results.</h6>`
  }

  const inputValue = searchInput.value
  //console.log(inputValue)
  filteredProducts = products.filter(product => {
    return product.title.toLowerCase().includes(inputValue)
  })
  displayProducts()
})

/*Display Company Buttons*/
const companies = document.querySelector('.companies')

const displayButtons = () => {
  const buttons = ['all', ...new Set(products.map(product => product.company))]
  //console.log(buttons)
  companies.innerHTML = buttons
    .map(company => {
      return `<button class="company_button" data-id=${company}>${company}</button>`
    })
    .join('')
}
displayButtons()

/* Filter by Company */
companies.addEventListener('click', e => {
  //console.log(e.target)
  const el = e.target
  if (el.classList.contains('company_button')) {
    if (el.dataset.id === 'all') {
      filteredProducts = [...products]
    } else {
      filteredProducts = products.filter(product => {
        return product.company === el.dataset.id
      })
    }
    searchInput.value = ''

    displayProducts()
  }
})
