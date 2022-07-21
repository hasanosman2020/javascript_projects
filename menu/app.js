const menu = [
  {
    id: 1,
    title: 'the full english',
    category: 'breakfast',
    price: 9.99,
    img: './images/full_english.jpg',
    desc:
      "Two pancakes, Islington's smoked streaky bacon and 2 Yorkshire sausages, roasted cherry tomatoes, homemade baked beans, 2 fried eggs."
  },
  {
    id: 2,
    title: 'american',
    category: 'breakfast',
    price: 11.99,
    img: './images/american.jpeg',
    desc:
      "Three pancakes with Islington's smoked streaky bacon, blueberries & 100% pure maple syrup."
  },
  {
    id: 3,
    title: 'creamy mushroom',
    category: 'lunch',
    price: 10.99,
    img: './images/chicken_mushroom.jpg',
    desc:
      "Three pancakes stuffed with thinly sliced succulent chicken breast, chestnut mushrooms and coated with our own Islington's creme fraische garlic butter sauce and Dijon mustard. Served with a generous helping of creme fraiche."
  },
  {
    id: 4,
    title: 'eggs benedict',
    category: 'breakfast',
    price: 10.99,
    img: './images/eggs_benedict.jpg',
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
  },
  {
    id: 6,
    title: 'New Mexico',
    category: 'lunch',
    price: 11.99,
    img: './images/new_mexico.jpeg',
    desc:
      'Combination of chicken, jalapeno peppers, pepperoni, spring onions, meatballs and cheese, topped with salsa and sour cream and sprinkled with crushed nachos'
  }
]

const sectionCentre = document.querySelector('.section_centre')
const buttonContainer = document.querySelector('.button_container')

//console.log(filterButtons)

//load menu items
window.addEventListener('DOMContentLoaded', function () {
  //console.log('shake and bake')
  displayMenuItems(menu)
  displayMenuButtons()
})

function displayMenuItems (menuItems) {
  menuItems = menuItems.map(function (item) {
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
}

function displayMenuButtons () {
  //const categories = menu.map(function (item) {
  //return item.category

  const categories = menu.reduce(
    function (categoriesValues, currentCategory) {
      if (!categoriesValues.includes(currentCategory.category)) {
        categoriesValues.push(currentCategory.category)
      }
      return categoriesValues
    },
    ['all']
  )
  //console.log(categories)

  const categoryButtons = categories
    .map(function (category) {
      return `<button class='filter_button' data-id=${category}>${category}</button>`
    })
    .join('')
  //console.log(categoryButtons)
  buttonContainer.innerHTML = categoryButtons
  const filterButtons = buttonContainer.querySelectorAll('.filter_button')

  //filter items
  filterButtons.forEach(function (button) {
    button.addEventListener('click', function (e) {
      //console.log(e.currentTarget.dataset.id
      const category = e.currentTarget.dataset.id
      const menuCategory = menu.filter(function (menuItem) {
        //console.log(menuItem.category)
        if (menuItem.category === category) {
          return menuItem
        }
      })
      //console.log(menuCategory)
      if (category === 'all') {
        displayMenuItems(menu)
      } else {
        displayMenuItems(menuCategory)
      }
    })
  })
}
