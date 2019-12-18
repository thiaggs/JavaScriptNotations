// let val;

// //-------------DOM Methods and atributes---------------a
// val = document;
// val = document.all;
// val = document.all[2];
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;

// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].action;
// val = document.forms[0].method;

// val = document.links;
// val = document.links[0];
// val = document.links[0].id;
// val = document.links[0].className;
// val = document.links[0].classList[0];

// val = document.images;

// val = document.scripts;
// val = document.scripts[2].getAttribute('src');

// let scripts =document.scripts;

// let scriptsArr = Array.from(scripts);

// scriptsArr.forEach(function (script){
//     console.log(script.getAttribute('src'));

// });


// console.log(val);

// // --------------------------------------------------------


// // -------------------DOM Selectors --------------------

//     // • Selectors for single elements

//         // document.getElementById()

//             const taskTitle = document.getElementById('task-title');
//             console.log(taskTitle);

//             // - Get things from the element

//                 console.log(taskTitle.id);
//                 console.log(taskTitle.className);

//             // - Change styling

//                 taskTitle.style.background = '#333';
//                 taskTitle.style.color = '#fff';
//                 taskTitle.style.padding = '10px';
//                 // taskTitle.style.display = 'none'

//             // - Change content

//                 taskTitle.textContent = 'Task List';
//                 taskTitle.innerText = 'My Tasks';
//                 taskTitle.innerHTML = '<span style = "color:red"> Task List  </span>'

        
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


                
            
