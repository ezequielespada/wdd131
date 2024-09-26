const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function() {
    if (input.value.trim() !== '') {
        const item = document.createElement('li');
        const deleteButton = document.createElement('button');
        
        item.textContent = input.value;
        deleteButton.textContent = 'X';
        deleteButton.classList.add('delete');

        item.append(deleteButton);
        
        list.append(item);

        deleteButton.addEventListener('click', function () {
            list.removeChild(item);
            input.focus();
        });

        input.value = '';
        input.focus();
    } else {
        input.focus();
    }
});
