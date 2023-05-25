import get from './utils/getElement.js'
const url = 'https://randomuser.me/api'

const img = get('.user_image')
//console.log(img)
const title = get('.user_title')
const value = get('.user_value')
const btn = get('.btn')
const btns = [...document.querySelectorAll('.icon')]
console.log(btns)
