const productsCentre = document.querySelector('products_centre')
const url = 'https://course-api.com/javascript-store-products'

const fetchProducts = async () => {
  try {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
  } catch (error) {
    productsCentre.innerHTML = `<p class="error">There was an error encountered. Please try again</p>`
  }
}
fetchProducts()
