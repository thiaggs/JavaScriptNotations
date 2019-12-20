let val;
//-----timer---------
console.time('Timer');

console.log('tic');
console.log('tic');
console.log('tic');
console.log('tic');
console.log('tic');
console.log('tic');

console.timeEnd('Timer');
//--------------------

//-----JS object (JSON)------
const adress = {
    street: 'capitao',
    number: 45
}
//-----------------------------


// ----------------Conversions --------------

    //Number to string
        val = String(4+4);

    //boolean to string
        val = String(true);

    //date to string
        val = String(new Date());

    //array to string
        val = String([1,2,3,4]);

    // string to number
        val = parseFloat('101.99');

//---------------------------------------------

//----------Math Object--------------

val = Math.PI;
val = Math.E;
val = Math.round(2.8);
val = Math.ceil(2.4);
val = Math.floor(2.4);
val = Math.sqrt(64);
val = Math.abs(-3);
val = Math.pow(8, 2);
val = Math.min(2,33,44,1,55,6,38,-2);
val = Math.max(2,33,54,84);
val = Math.random();
val = Math.floor(Math.random() * 20 + 1); // Número inteiro entre 1 e 20

//-------------------------------------------

// ---------------Concatenation--------------

const firstName = 'William';
const lastName = 'Jhonson';
const age = 36;
const str = 'Hello there fuck you';
const tags = 'web design, web development';

val = firstName + ' ' + lastName;
val = 'Brad ';
val += 'Traversy';
val = firstName.length;

val = firstName.concat(' ', lastName);
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[0];

val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');

val = firstName.charAt(2);

val = firstName.charAt(firstName.length - 1);

val = firstName.substring(0, 4);

val = firstName.slice(0, 4);
val = firstName.slice(-3); // começa de trás para frente

val = str.split(' ');
val = tags.split(',');

val = str.replace('Hello', 'Fuck');

val = str.includes('Hello');

console.log(val);

//-------------------------------------------------

//-------- Template Literals----------------------

const name = 'John';
const age = '30';
const job = 'Web Developer';
const city = 'Miami';
let html;



    // whithout template strings (es5)



        html = ' <ul><li>Name: ' + name + ' </li><li>Age: '
        + age + ' </li><li>Job: ' + job + '</li><li>City: ' 
        + city + '</li> </ul>';

        htm = '<ul>' +
                '<li>Name: ' + name + '</li>' +
                '<li>Age: ' + age + ' </li>' +
                '<li>Job: ' + job + '</li>' +
                '<li>City: ' + city + '</li>' +
                '</ul>';
        
        function hello(){
            return 'hello';
        }   



    // With template strings (es6)



        html = `
            <ul>
                <li>Name: ${name}</li>
                <li>Age: ${age}</li>
                <li>Job: ${job}</li>
                <li>City: ${city}</li>
                <li>${2 + 2}</li>
                <li>${hello()}</li>
                <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
            </ul>
        `;
        document.body.innerHTML = html;

//--------------------------------------------------------



// ----------- Array and Array methods-----------

const numbers = [43,56,33,23,44,36,5];
const numbers2 = new Array(22,45,33,76,54);
const fruit = ['apple','banana','orange','pear'];
const mixed = [22,'hello',true,undefined,null,{a:1, b:2}, new Date()];

let val;

    //get array lenght
        val = numbers.length;

    //check if is array
        val = Array.isArray(numbers);
    //get single value

        val = numbers[3];
    //insert into array
        numbers[2] = 100;

    //find index of value

        val = numbers.indexOf(36);

    //mutating arrays

        numbers.push(250); //add on to end
        numbers.unshift(120); //add on to front
        numbers.pop(); //take off from end
        numbers.shift();// take off from front
        numbers.splice(1,3); // splice values
        numbers.reverse(); //reverse
        val = numbers.concat(numbers2); // concatenate array
        val = fruit.sort();//sort arrays
        val = numbers.sort();

        val = numbers.sort(function(x,y){
            return x - y;
        });                     //using the 'compare function"

        val = numbers.sort(function(x,y){
            return y - y;
        });  

        function under50(num){
            return num < 50;
        }                                //find

        val = numbers.find(under50);

        console.log(numbers);
        console.log(val);

//------------------------------------------------------------


// -------------------Object Literals ------------------

const person ={
    firstName: 'Steve',
    lastName: 'Smith',
    age: 30,
    email: 'steve@aol.com',
    hobbies: ['music', 'sports'],
    address: {
        city:'Miami',
        state:'Florida'
    },
    getBirthYear: function(){
        return 2019 - this.age;
    }
}

let val;
val = person;

val = person.firstName;
val = person.hobbies[1];
val = person.address.state;
val = person.getBirthYear();

console.log(val);

const people = [
    {name: 'John', age: 30},
    {name: 'Mike', age: 23},
    {name: 'Nancy', age: 40}
];

for (let i = 0; i < people.length; i++){
    console.log(people[i].name);
}

//--------------------------------------

//=============Date and times====================

let val;
const today = new Date();
let birthday = new Date('9-10-1981 11:25:00');
birthday = new Date('September 10 1981');
birthday = new Date('9/10/1981');

val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(2);
console.log(birthday);

//==================================================

// -------------Compare type and value------------------
const id = 100;

if(id === 100){
    console.log(`id is actually ${id}`);
}

console.log(id === 100? 'CORRECT' : 'INCORRECT');

switch (id){
    case 100:
        console.log(`id is 100`);
        break;
    case 150:
        console.log(`id is 150`);
    default:
        console.log(`id is not 150 or 100`);
}

//-----------------------------------------------

//----------------- loop---------------------

const cars = ['fusca', 'dale', 'jhonson'];

cars.forEach(function (current, index, array){
    console.log(`${index} : ${current}`);
    console.log(array);
}); 

Map
const users = [
    {id:1, name:'john'},
    {id:2, name: 'sara'},
    {id:3, name: 'karen'}
];

const ids = users.map(function(current){
    return current.id;
})

console.log(ids);

const user = {
    firstName: 'th',
    lastName: 'sz',
    age: 21
}

for (let x in user){
    console.log(`${x} : ${user[x]}`)
}

//--------------------------------------------------

