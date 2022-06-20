//local reviews data
const reviews = [
  {
    id: 'hasanosman',
    name: 'Hasan Osman',
    job: 'web developer',
    img: './images/Cartoon-Image-1.jpg',
    text:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet ratione iure eligendi at, repudiandae reprehenderit nostrum eos eum iste quaerat laudantium. Animi in doloremque perspiciatis officia cumque libero repellat numquam!'
  },
  {
    id: 2,
    name: 'michael jackson',
    job: 'web designer',
    img: './images/Cartoon-Image-2.jpg',
    text:
      'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.'
  },
  {
    id: 3,
    name: 'madonna',
    job: 'intern',
    img: './images/Cartoon-Image-3.jpg',
    text:
      'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.'
  },
  {
    id: 4,
    name: 'elvis presley',
    job: 'tea boy',
    img: './images/Cartoon-Image-4.jpg',
    text:
      'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. '
  },
  {
    id: 5,
    name: 'james brown',
    job: 'the boss',
    img: './images/Cartoon-Image-5.jpg',
    text:
      'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. '
  }
]

//select items
const img = document.getElementById('person_img')
const author = document.getElementById('author')
const job = document.getElementById('job')
const info = document.getElementById('info')

const prevBtn = document.querySelector('.prev_btn')
const nextBtn = document.querySelector('.next_btn')
const randomBtn = document.querySelector('.random_btn')

//set starting item
let currentItem = 1

//load initial item
window.addEventListener('DOMContentLoaded', function () {
  //console.log('shake&bake')
  /*const item = reviews[currentItem]
  img.src = item.img
  author.textContent = item.name
  job.textContent = item.job
  info.textContent = item.text*/
  showPerson(currentItem)
})

//show person based on item
function showPerson (person) {
  const item = reviews[person]
  img.src = item.img
  author.textContent = item.name
  job.textContent = item.job
  info.textContent = item.text
}

//show next person
nextBtn.addEventListener('click', function () {
  currentItem++
  if (currentItem > reviews.length - 1) {
    currentItem = 0
  }
  showPerson(currentItem)
})

//show previous person
prevBtn.addEventListener('click', function () {
  currentItem--
  if (currentItem < 0) {
    currentItem = reviews.length - 1
  }
  showPerson(currentItem)
})

//show random person
randomBtn.addEventListener('click', function () {
  currentItem = Math.floor(Math.random() * reviews.length)
  console.log(currentItem)
  showPerson(currentItem)
})
