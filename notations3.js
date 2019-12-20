let val;

//-------------DOM Methods and atributes---------------a
val = document;
val = document.all;
val = document.all[2];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].action;
val = document.forms[0].method;

val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList[0];

val = document.images;

val = document.scripts;
val = document.scripts[2].getAttribute('src');

let scripts =document.scripts;

let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function (script){
    console.log(script.getAttribute('src'));

});


console.log(val);

// --------------------------------------------------------


// -------------------DOM Selectors --------------------

    // • Selectors for single elements

        // document.getElementById()

            const taskTitle = document.getElementById('task-title');
            console.log(taskTitle);

            // - Get things from the element

                console.log(taskTitle.id);
                console.log(taskTitle.className);

            // - Change styling

                taskTitle.style.background = '#333';
                taskTitle.style.color = '#fff';
                taskTitle.style.padding = '10px';
                // taskTitle.style.display = 'none'

            // - Change content

                taskTitle.textContent = 'Task List';
                taskTitle.innerText = 'My Tasks';
                taskTitle.innerHTML = '<span style = "color:red"> Task List  </span>'

        
             //document.querySelector()

                console.log(document.querySelector('#task-title')); //by id
                console.log(document.querySelector('.card-title')); //by class
                console.log(document.querySelector('h5')); // by the element(got first)

                document.querySelector('li').style.color = 'red';
                document.querySelector('ul li').style.color = 'blue';

                document.querySelector('li:last-child').style.color = 'red';
                document.querySelector('li:nth-child(3)').style.color = 'yellow';

                document.querySelector('li:nth-child(4)').textContent = 'HelloWorld';
                document.querySelector('li:nth-child(odd)').style.background = '#ccc';
                document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';


                document.querySelector('li:nth-child(4)').style.color = 'orange';
                document.querySelector('li:nth-child(4)').textContent = 'ceTaLoco?';
            

        // • Selectors for Multiple elements

            //document.getElementsByClassName()

                const items = document.getElementsByClassName('collection-item');

                items[0].style.color = 'red';
                items[3].textContent = 'Hello';

                console.log(items[0]);

                const listItems = document.querySelector('ul').getElementsByClassName
                ('collection-item'); // only get the elements that are inside of de query selector "ul"

                console.log(listItems); 

            //document.getElementsByTagName()

                let lis = document.getElementsByTagName('li');
                console.log(lis);

                console.log(lis[0]);
                lis[0].style.color = 'red';
                lis[3].textContent = 'Hello';

                // Convert HTML collection into array
                lis = Array.from(lis);


                lis.reverse();
                
                lis.forEach(function(li, index){

                    console.log(li.className);
                    li.textContent = `${index}: Hello`;
                });

                console.log(lis);


            // document.querySelectorAll

                const items = document.querySelectorAll(`ul.collection li.collection-item`);

                items.forEach(function(item, index){

                    item.textContent = `${index}: Hello`;
                });

                const liOdd = document.querySelectorAll(`li:nth-child(odd)`);
                const liEven = document.querySelectorAll(`li:nth-child(even)`);

                liOdd.forEach(function(li){

                    li.style.background = 'red';
                    
                });

                liEven.forEach(function(li){
                    li.style.color = 'red'
                    li.style.background = 'black';
                });
            
                console.log(items);


// -----------------------------------------------------------------

// --------------------Traversing the DOM--------------------------

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item');

val = listItem;
val = list;

// Get child nodes (Also get the text nodes)

    val = list.childNodes;

// Get children element nodes( get only the children elements)

    val = list.children;



    val = list.childNodes[1].nodeName;
    val = list.childNodes[1].nodeType; // • nodeTypes:
                                    // 1 - Element
                                    // 2 - Attribute (deprecated)
                                    // 3 - Text node
                                    // 8 - Comment
                                    // 9 - Document itself
                                    // 10 - Doctype

    list.children[1].textContent = 'foda';

// Get children of children

    list.children[3].children[0].id = 'test-link';
    val = list.children[3].children[0];

//First child/elementChild
    val =list.firstChild;
    val = list.firstElementChild;

// Last child/elementChild
    val = list.lastChild;
    val = list.lastElementChild;

// childElementCount
    val = list.childElementCount;

// Get parent node
    val = listItem.parentNode;
    val = listItem.parentElement;
    val = listItem.parentElement.parentElement;

// Get next sibling
    val = listItem.nextSibling;
    val = listItem.nextElementSibling;

// Get previous sibling

    val = listItem.previousSibling;
    val = listItem.previousElementSibling;

console.log(val);

////////////////////////////////////////////////////////////////////////////

/////////////////////////Creating Elements////////////////////////////////

//Create Element
    const li = document.createElement('li');

// Add a class
    li.className = 'collection-item';

// Add id
    li.id = 'new-item';

// add atribute;
    li.setAttribute('title', 'New item');

// create text node and append
    li.appendChild(document.createTextNode('Hello World'));
    
// create new link element
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';

    //Append link as child li
    li.appendChild(link);

//Append li as child to ul
    document.querySelector('ul.collection').appendChild(li);

console.log(li);

/////////////////////////////////////////////////////////////////////////

/////////////////////Removing & Replacing Elements///////////////////////

//Replace Element
    const newHeading = document.createElement('h2');
    newHeading.className = 'task-title';
    newHeading.appendChild(document.createTextNode('Task List'));

    const oldHeading = document.querySelector('#task-title');
    const cardAction = document.querySelector('.card-action');

    cardAction.replaceChild(newHeading, oldHeading);

//Remove Element
    const lis = document.querySelectorAll('li');
    const list = document.querySelector('ul');

    //Removing a list item
        lis[0].remove();

    //Removing child element
        list.removeChild(lis[3]);

// Classes and Atributes

    //Classes
        let val;
        const firstLi = document.querySelector('li:first-child');
        const link = firstLi.children[0];

        val = link.className;
        val = link.classList;
        val = link.classList[0];
        link.classList.add('test');
        link.classList.remove('test');
        val = link;

    //Attributes
        val = link.getAttribute('href');
        val = link.setAttribute('href', 'http://google.com');
        link.setAttribute('test', 'google');
        val = link.hasAttribute('test');
        val = link;
        link.removeAttribute('test');


        console.log(val);

////////////////////////////////////////////////////////////////////////////

/////////////////////Event Listeners & The Event Object/////////////////////

document.querySelector('.clear-tasks').addEventListener('click', function(e){
    console.log('Hellox');

    // e.preventDefault();
});

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){
    // console.log('hellox');
    let val;

    val = e;
    
    // Event target element
    val = e.target;
    val = e.target.id;
    val = e.target.className;
    val = e.target.classList;
    e.target.innerText = 'Hello';

    //Event type
    val = e.type;

    //timestamp
    val = e.timeStamp;

    //Coords event relative to the window
    val = e.clientY;
    val = e.clientX;

    //coords event relative to the element
    val = e.offsetY;
    val = e.offsetX;

    console.log(val);
}

///////////////////////////////////////////////////////////////////////////

