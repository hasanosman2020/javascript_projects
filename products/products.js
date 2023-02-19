const url = 'https://course-api.com/javascript-store-products'
const productsCentre = document.querySelector('.products_centre')

const fetchProducts = async () => {
  try {
    const response = await fetch(url)
    const data = await response.json()
    return data
  } catch (error) {
    productsCentre.innerHTML = `<p class='error'>There was an error.</p>`
  }
}

const displayProducts = list => {
  //console.log(list)
  const productsList = list
    .map(product => {
      const { id } = product
      const { name: title, price } = product.fields
      const { url: image } = product.fields.image[0]
      const priceFormat = price / 100
      console.log(id)
      return `<a href='products_page.html&id={id}' class='single_product'>
  <img src='${image}' alt='${title}' class='single_product_img image' />
  <footer>
    <h2 class='single_product_title'>${title}</h2>
    <span class='single_product_price'>${priceFormat}</span>
  </footer>
</a>`
    })
    .join('')
  productsCentre.innerHTML = `<div class='products_container'>${productsList}</div>`
}

const start = async () => {
  // console.log(fetchProducts())
  const data = await fetchProducts()
  displayProducts(data)
}

start()
