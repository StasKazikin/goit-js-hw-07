const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const list = document.querySelector('#ingredients');

const potato = document.createElement('li');
potato.textContent = ingredients[0];

const mushrooms = document.createElement('li');
mushrooms.textContent = ingredients[1];

const garlic = document.createElement('li');
garlic.textContent = ingredients[2];

const tomato = document.createElement('li');
tomato.textContent = ingredients[3];

const salad = document.createElement('li');
salad.textContent = ingredients[4];

const spices = document.createElement('li');
spices.textContent = ingredients[5];

list.append(potato, mushrooms, garlic, tomato, salad, spices);