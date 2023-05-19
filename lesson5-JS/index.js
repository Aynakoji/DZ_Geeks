var input = document.querySelector('#input')
var createButton = document.querySelector('#create_Button')
var todoList = document.querySelector('#todo_List')

const createTodo = () => {

    if(input.value.trim === '') {
        input.value = ''
        return alert('Нельзя вводить пустоту или пробелы')
    }

    var div = document.createElement('div')
    var text = document.createElement('h3')

    text.innerText = input.value
    
    div.append(text)

    div.setAttribute('class', 'block_text')
    input.value = ''
}

createButton.onclick = () => createTodo()