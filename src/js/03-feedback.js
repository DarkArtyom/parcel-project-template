import throttle from 'lodash.throttle';

const form = document.forms[0];

const email = form.elements.email;
const message = form.elements.message;
form.addEventListener('input', throttle(onInputForm, 1000));
form.addEventListener('submit', onSubmitForm);

let formData = {};

function onInputForm(event) {
  formData[event.target.name] = event.target.value;
  console.log(event.target.name);
  localStorage.setItem('saved-input-items', JSON.stringify(formData));
}

if (localStorage.getItem('saved-input-items')) {
  formData = JSON.parse(localStorage.getItem('saved-input-items'));
  for (let key in formData) {
    // console.log(form.elements[key]);
    form.elements[key].value = formData[key];
  }
}

function onSubmitForm(evt) {
  evt.preventDefault();
  if (email.value === '' || message.value === '') {
    return alert('FILL IT NOW');
  }
  console.log(formData);
  localStorage.removeItem('saved-input-items');
  evt.currentTarget.reset();
  formData = {};
}
