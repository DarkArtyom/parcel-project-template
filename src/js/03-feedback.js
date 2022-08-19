import throttle from 'lodash.throttle';

const form = document.querySelector('form');

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);
populateInputForm();
const formData = {};

function onFormInput(evt) {
  evt.preventDefault();
  formData[evt.target.name] = evt.target.value;
  console.log(formData);
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function populateInputForm(e) {
  const savedForm = localStorage.getItem('feedback-form-state');

  if (savedForm) {
    const parseForm = JSON.parse(savedForm);
    console.log(parseForm);
    form.email.value = parseForm.email;
    form.message.value = parseForm.message;
  }
}

function onFormSubmit(e) {
  e.preventDefault();
  console.log(formData);
  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}
