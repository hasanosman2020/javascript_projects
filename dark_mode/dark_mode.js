const toggleBtn = document.querySelector('.btn')
const articlesContainer = document.querySelector('.articles')

toggleBtn.addEventListener('click', () => {
  console.log('hello')
  document.documentElement.classList.toggle('dark_theme')
})

const articlesData = articles
  .map(article => {
    //console.log(articles)
    const { title, date, length, snippet } = article
    //format date using Temporal
    const formattedDate = moment(date).format('Do MMMM, YYYY')

    return `<article class="post">

<h2>${title}</h2>

<div class="post_info">

<span>${formattedDate}</span>

<span>${length}mins</span>

</div>

<p> ${snippet}</p>

</article>`
  })
  .join('')

articlesContainer.innerHTML = articlesData
