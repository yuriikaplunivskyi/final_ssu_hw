
const form = document.querySelector('.form');
const nameInput = document.getElementById('name');
const surnameInput = document.getElementById('surname');
const emailInput = document.getElementById('email');

const nameRegex = /^[A-Z][a-z]+$/;
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = nameInput.value.trim();
  const surname = surnameInput.value.trim();
  const email = emailInput.value.trim();

  let errorMessages = [];

  if (!nameRegex.test(name)) {
    errorMessages.push('Invalid name..');
    nameInput.classList.add('form__input_error');
    document.getElementById('name-error').textContent = 'Invalid name.';
  } else {
    nameInput.classList.remove('form__input_error');
    document.getElementById('name-error').textContent = '';
  }

  if (!nameRegex.test(surname)) {
    errorMessages.push('Invalid surname. ');
    surnameInput.classList.add('form__input_error');
    document.getElementById('surname-error').textContent = 'Invalid surname.';
  } else {
    surnameInput.classList.remove('form__input_error');
    document.getElementById('surname-error').textContent = '';
  }

  if (!emailRegex.test(email)) {
    errorMessages.push('Invalid email address.');
    emailInput.classList.add('form__input_error');
    document.getElementById('email-error').textContent = 'Invalid email address.';
} else {
    emailInput.classList.remove('form__input_error');
    document.getElementById('email-error').textContent = '';
    }
    
    if (errorMessages.length === 0) {
    // No errors, submit form
    form.submit();
    }
    });
