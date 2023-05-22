
const input = document.querySelector('#input');
const createButton = document.querySelector('#create_button');
const todoList = document.querySelector('#todo_list');

const createTodo = () => {
  if (input.value.trim() === '') return null;
  const div = document.createElement('div');
  const text = document.createElement('h3');
  div.setAttribute('class', 'block_text');

  const deleteButton = document.createElement('button');
  const deleteButtonName = 'delete';

  const removeText = () => {
    div.remove();
  };
  deleteButton.onclick = () => removeText();
  deleteButton.setAttribute('class', 'delete_button');

  const editButton = document.createElement('button');
  const editButtonName = 'edit';
  editButton.setAttribute('class', 'edit_button');

  const edit = () => {
    const editedText = text.innerText;
    const newText = prompt(`EDITED: ${editedText}`);
    if (newText !== null && newText.trim() !== '') {
      text.textContent = newText;
    } else {
      alert('Введите текст!');
    }
  };

  editButton.onclick = () => edit();

  text.innerText = input.value;

  div.append(text);
  editButton.append(editButtonName);
  div.append(editButton);
  deleteButton.append(deleteButtonName);
  div.append(deleteButton);
  todoList.prepend(div);
  input.value = '';
};

createButton.onclick = () => createTodo();
window.onkeydown = (event) => {
  if (event.keyCode === 13) {
    createTodo();
  }
};







