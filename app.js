const form = document.querySelector('form');

const fName = document.querySelector('#fName');
const fNameImg = document.querySelector('.fName-img');
const fNameLabel = document.querySelector('.fName-label')

const lName = document.querySelector('#lName');
const lNameImg = document.querySelector('.lName-img')
const lNameLabel = document.querySelector('.lName-label')

const email = document.querySelector('#email');
const emailImg = document.querySelector('.email-img')
const emailLabel = document.querySelector('.email-label')

const password = document.querySelector('#password');
const passwordImg = document.querySelector('.password-img')
const passwordLabel = document.querySelector('.password-label')

form.addEventListener('submit', e => {
    e.preventDefault();
    validateName();
});

const validateName = () => {
    // first name
    if (fName.value == '') {
        fName.style.border = '2px solid hsl(0, 100%, 74%)'
        fNameImg.style.visibility = 'visible';
        fNameLabel.style.visibility = 'visible'; 
    }
    else {
        fName.style.border = '1px solid rgb(219, 211, 211)'
        fNameImg.style.visibility = 'hidden';
        fNameLabel.style.visibility = 'hidden'; 
    }
    // last name
    if (lName.value == '') {
        lName.style.border = '2px solid hsl(0, 100%, 74%)'
        lNameImg.style.visibility = 'visible';
        lNameLabel.style.visibility = 'visible'; 
    }
    else {
        lName.style.border = '1px solid rgb(219, 211, 211)'
        lNameImg.style.visibility = 'hidden';
        lNameLabel.style.visibility = 'hidden'; 
    }
    // email
    if (email.value == '') {
        email.style.border = '2px solid hsl(0, 100%, 74%)'
        emailImg.style.visibility = 'visible';
        emailLabel.style.visibility = 'visible'; 
    }
    else {
        email.style.border = '1px solid rgb(219, 211, 211)'
        emailImg.style.visibility = 'hidden';
        emailLabel.style.visibility = 'hidden'; 
    }
    // password      
    if (password.value == '') {
        password.style.border = '2px solid hsl(0, 100%, 74%)'
        passwordImg.style.visibility = 'visible';
        passwordLabel.style.visibility = 'visible'; 
    }
    else {
        password.style.border = '1px solid rgb(219, 211, 211)'
        passwordImg.style.visibility = 'hidden';
        passwordLabel.style.visibility = 'hidden'; 
    }
}