const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('li')
const item = document.createElement('li');
const deleteButton = document.createElement('button');
item.textContent = input.value;
deleteButton.textContent = 'X';
item.append(deleteButton);
list.append(item);

