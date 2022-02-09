const input1 = document.querySelector('#one');
const dubText = document.querySelector('#duplicateField');

input1.oninput = function() {
  dubText.innerHTML = input1.value;
};

my_form.addEventListener('submit', () => {
  console.log(input1.value);
  input1.querySelector.value = "";
})

