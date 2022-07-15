const menu = [
  {
    id: 1,
    title: 'the full english',
    category: 'all-day',
    price: 9.99,
    img: './images/full_english.jpg',
    desc:
      "Two pancakes, Islington's smoked streaky bacon and 2 Yorkshire sausages, roasted cherry tomatoes, homemade baked beans, 2 fried eggs."
  },
  {
    id: 2,
    title: 'american',
    category: 'all-day',
    price: 11.99,
    img: './images/american.jpeg',
    desc:
      "Three pancakes with Islington's smoked streaky bacon, blueberries & 100% pure maple syrup."
  },
  {
    id: 3,
    title: 'creamy mushroom',
    category: 'all-day',
    price: 10.99,
    img: './images/chicken_mushroom.jpeg',
    desc:
      "Three pancakes stuffed with thinly sliced succulent chicken breast, chestnut mushrooms and coated with our own Islington's creme fraische garlic butter sauce and Dijon mustard. Served with a generous helping of creme fraiche."
  },
  {
    id: 4,
    title: 'eggs florentine',
    category: 'all-day',
    price: 10.99,
    img: './images/eggs_benedict.jpeg',
    desc:
      'Three pancakes filled with creamed spinach with cheese and honey-glazed ham, topped with baby spinach, homemade Hollondaise sauce and sunny side up eggs.'
  },
  {
    id: 5,
    title: 'Banana Caramel',
    category: 'dessert',
    price: 9.99,
    img: './images/banana_caramel.jpg',
    desc:
      'Perfect for those with a sweet tooth! Sliced banana tossed with warm bourbon caramel sauce and served with a ramekin of fresh vanilla cream. '
  }
]

const sectionCentre = document.querySelector('.section_centre')

window.addEventListener('DOMContentLoaded', function () {
  //console.log('shake and bake')

  let menuItems = menu.map(function (item) {
    //console.log(item)
    return `<article class='menu_item'>
  <img class='image_container' src=${item.img} />
  <header class='menu_item_info'>
    <h4 class='menu_item_name'>${item.title}</h4>
    <p class='menu_item_cost'>$${item.price}</p>
  </header>

  <p class='menu_item_description'>
    ${item.desc}
  </p>
</article>
`
  })
  console.log(menuItems)
  menuItems = menuItems.join('')
  sectionCentre.innerHTML = menuItems
})
