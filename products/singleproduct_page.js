const product = document.querySelector('.product')
const url = 'https://course-api.com/javascript-store-single-product'

const fetchProduct = async () => {
  try {
    product.innerHTML = `<h4 class="product_loading">Loading...</h4>`
    //console.log(window.location.search)
    const params = new URLSearchParams(window.location.search)
    const id = params.get('id')
    //console.log(id)
    const response = await fetch(`${url}?id=${id}`)
    const data = await response.json()
    console.log(data)
  } catch (error) {
    product.innerHTML = `<p class="error">There was an error encountered.Please try again.</p>`
  }
}

const displayProduct = product => {
  //console.log(product)
  //image, title, company, price, colours, description
  const {
    company,
    colors,
    price,
    name: title,
    description,
    image
  } = product.fields
  document.title = title.toUpperCase()
  const { url: image_url } = image[0]
  const priceFormat = price / 100
  product.innerHTML = `<div class='product_wrapper'>
  <img src='' class='img' alt='' />
  <div class='product_info'>
    <h3>${name}</h3>
    <h5>${company}</h5>
    <span>${priceFormat}}</span>
    <div class='colours'>
      <span class='product_colour'></span>
      <span class='product_colour' style='background: ${colors}'></span>
    </div>
    <p>
      ${description}
    </p>
    <button class='btn'>add to cart</button>
  </div>
</div>
`
}

const start = async () => {
  const data = await fetchProduct()
  displayProduct(data)
}

start()
