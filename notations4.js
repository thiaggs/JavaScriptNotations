//////////////////////////// Mouse Events/////////////////////////////////

const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// • Click
    clearBtn.addEventListener('click', runEvent);

// • Double Click
    clearBtn.addEventListener('dblclick', runEvent);

// • Mousedown
    clearBtn.addEventListener('mousedown', runEvent);

// • Mouseup
    clearBtn.addEventListener('mouseup', runEvent);

// • MouseEnter
    card.addEventListener('mouseenter', runEvent);

// • Mouseleave
    card.addEventListener('mouseleave', runEvent);

// • MouseOver
card.addEventListener('mouseover', runEvent);

// • MouseOut
   card.addEventListener('mouseout', runEvent);

// • Mousemove
    card.addEventListener('mousemove', runEvent);
    
function runEvent(e){

    console.log(`EVENT TYPE: ${e.type}`);

    heading.textContent = ` MouseX:${e.offsetX} MouseY: ${e.offsetY}`;

    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 100)`;
    document.querySelector('.clear-tasks').textContent= 'red';
};

/////////////////////////////////////////////////////////////////////////////

///////////////////////////Input Events/////////////////////////////////////

const form = document.querySelector('form'); // be more specific, using the class or ID, 
                                             // here we just have only one form so thats ok
const taskInput = document.querySelector('#task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');



// • Clear input
    taskInput.value = '';

// • Submit
    form.addEventListener('submit', runEvent);

// • KeyDown/KeyUp/KeyPress
    taskInput.addEventListener('keypress', runEvent);

// • Focus (click on input)
    taskInput.addEventListener('focus', runEvent);

// • Blur (click off input)
    taskInput.addEventListener('blur', runEvent);

// • Cut (ctrl x)
    taskInput.addEventListener('cut', runEvent);

// • Paste
    taskInput.addEventListener('paste', runEvent);

// • Input (all these above )
    taskInput.addEventListener('input', runEvent);

// Change
    select.addEventListener('change', runEvent);




function runEvent(e){
    console.log(`EVENT TYPE: ${e.type}`)

    // • Get Input Value
    console.log(taskInput.value);

    heading.textContent = e.target.value;

    console.log(e.target.value);
    e.preventDefault();
};
/////////////////////////////////////////////////////////////////////////

/////////////////////Event bubbling and Delegation////////////////////////

// • EVENT BUBBLING

    document.querySelector('.card-title').addEventListener('click', 
    function(){
        console.log('card title');
    });

    document.querySelector('.card-content').addEventListener('click', 
    function(){
        console.log('card content');
    });

    document.querySelector('.card').addEventListener('click', 
    function(){
        console.log('card');
    });

    document.querySelector('.col').addEventListener('click', 
    function(){
        console.log('col');
    });

// • EVENT DELEGATION

    const delItem = document.querySelector('.delete-item');
    delItem.addEventListener('click', deleteItem);

    document.body.addEventListener('click', deleteItem);
    function deleteItem(e){

        if(e.target.parentElement.className === 'delete-item secondary-content'){
            console.log('delete item');
        }

        if(e.target.parentElement.classList.contains('delete-item')){
            console.log('delete item');

        }
        
    }

/////////////////////////////////////////////////////////////////////////

////////////////////////Local and Session Storage////////////////////////

// • Set and remove Local storage item (save in the brownser)

    localStorage.setItem('name', 'John');
    localStorage.setItem('age', '30');

    localStorage.removeItem('name');

// • Set Session storage item (cleared if browser is closed)
    sessionStorage.setItem('name', 'Beth');

// • get from storage
    const name = localStorage.getItem('name');
    const age = localStorage.getItem('age');

// • clear local storage

    localStorage.clear();

document.querySelector('form').addEventListener('submit', function(e){
    const task = document.querySelector('#task').value;

    let tasks;

    if(localStorage.getItem('tasks') === null){
        tasks = [];

    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));

    e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task){
    console.log(task);
});

///////////////////////////////////////////////////////////////////////////

