let addtodobutton = document.getElementById('AddToDo');
let todoscontainer = document.getElementById('ToDosContainer');
let inputfield = document.getElementById('InputField');

addtodobutton.addEventListener('click', function(){
    var paragraph = document.createElement('p')
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText=inputfield.value;
    todoscontainer.appendChild(paragraph);
    inputfield.value="";

    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through red";
    })
    paragraph.addEventListener('dblclick', function(){
        todoscontainer.removeChild(paragraph);
    })
}
)