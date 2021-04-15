const form = document.querySelector('[data-js="change-location"]');

form.addEventListener('submit', event => {
  event.preventDefault();

  const inputValue = event.target.city.value;
  console.log(inputValue);
  form.reset()
})