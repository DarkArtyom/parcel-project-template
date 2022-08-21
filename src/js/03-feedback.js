import throttle from 'lodash.throttle';

const form = document.querySelector('form');

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);
populateInputForm();
let formData = {};
const email = form.elements.email;
const message = form.elements.message;

function onFormInput(evt) {
  evt.preventDefault();
  formData[evt.target.name] = evt.target.value;
  console.log(formData);
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function populateInputForm(e) {
  const parsedForm = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (parsedForm) {
    form.email.value = parsedForm.email ? parsedForm.email : '';
    form.message.value = parsedForm.message ? parsedForm.message : '';
  }
}

function onFormSubmit(e) {
  e.preventDefault();
  if (email.value === '' || message.value === '') {
    return alert('fill email and message');
  }
  console.log(formData);
  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}
