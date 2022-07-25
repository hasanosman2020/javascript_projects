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
// get parent element
const sectionCenter = document.querySelector('.section-center')
const btnContainer = document.querySelector('.btn-container')
// display all items when page loads
window.addEventListener('DOMContentLoaded', function () {
  diplayMenuItems(menu)
  displayMenuButtons()
})

function diplayMenuItems (menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`
  })
  displayMenu = displayMenu.join('')
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu
}
function displayMenuButtons () {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category)
      }
      return values
    },
    ['all']
  )
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`
    })
    .join('')

  btnContainer.innerHTML = categoryBtns
  const filterBtns = btnContainer.querySelectorAll('.filter-btn')
  console.log(filterBtns)

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem
        }
      })
      if (category === 'all') {
        diplayMenuItems(menu)
      } else {
        diplayMenuItems(menuCategory)
      }
    })
  })
}
