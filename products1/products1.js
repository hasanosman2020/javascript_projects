const url = 'https://course-api.com/javascript-store-products'
const productsCentre = document.querySelector('products_centre')

const fetchProducts = async () => {
  productsCentre.innerHTML = `<div class="loading"><div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div></div>`
  try {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
  } catch (error) {
    productsCentre.innerHTML = `<p class="error">There was an error encountered. Please try again</p>`
  }
}
fetchProducts()
