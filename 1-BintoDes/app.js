const form = document.querySelector('form')
const input = document.querySelector('#bin')
const output = document.querySelector('#output')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  //   const formData = new FormData(form)
  //   const binary = formData.get('binary')
  const binary = input.value
  input.value = ''
  convert(binary)
  setTimeout(() => {
    output.innerHTML = ''
  }, 5000)
})

function convert(number) {
  const arr = number.split('')
  const newArr = arr.map((a) => {
    if (a != '0' && a != '1') {
      return
    } else {
      return a
    }
  })
  const newValue = newArr.join('')
  if (number == newValue) {
    binToDes(number)
  } else {
    output.innerHTML = `<p>please enter a valid binary number</p>`
  }
}

function binToDes(number) {
  const result = number
    .split('')
    .reverse()
    .map((n, i) => {
      return +n * Math.pow(2, i)
    })
    .reduce((a, c) => {
      return a + c
    })
  return (output.innerHTML = `the result is : ${result}`)
}
