const form = document.querySelector('.form')
const input = document.querySelector('.form__input')

input.addEventListener('focus', () => {
  form.classList.add('form--active')
})

input.addEventListener('blur', () => {
  form.classList.remove('form--active')
})