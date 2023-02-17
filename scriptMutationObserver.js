// MutationObserver гернерирует микротаски

const button = document.getElementById('button')
const header = document.getElementById('header')

let counter = 0

button.addEventListener('click', () => {
  counter += 1
  // header.innerText = counter.toString()
  header.appendChild(document.createElement('div'))

  console.log('After change')

  Promise.resolve().then(() => console.log('Promise'))

  setTimeout(() => {
    console.log('timer')
  }, 0)

})

const mutetionobserver = new MutationObserver((mutations) => {
  console.log(mutations)
})

mutetionobserver.observe(header, {
  subtree: true,
  attributeOldValue: true,
  childList: true
})