const inputs = document.querySelectorAll('input');
const errorImg = document.querySelectorAll('form img')
const errorLabel = document.querySelectorAll('form label')
const button = document.querySelector('button');
const email = document.querySelector('#email')
const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

console.log(email.nextElementSibling.innerHTML)

button.addEventListener('click', (e) => {
    const validateEmpty = () => {
        inputs.forEach((input, index) => {
            if (input.value === '') {
                e.preventDefault();
                input.style.border = '2px solid hsl(0, 100%, 74%)'
                errorImg[index].style.visibility = 'visible'
                errorLabel[index].style.visibility = 'visible'
            }
            else if (!(regex.test(email.value))) {
                e.preventDefault();
                email.nextElementSibling.innerHTML = 'Looks like this is not an email'
                errorLabel[index].style.visibility = 'visible'
            }
            else {
                input.style.border = '1px solid rgb(219, 211, 211)'
                errorImg[index].style.visibility = 'hidden'
                errorLabel[index].style.visibility = 'hidden'
            }
        })
    }
    validateEmpty();
})

