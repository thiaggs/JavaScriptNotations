// Person constructor
function Person(name, dob) {
    this.name = name;
    // this.age = age;
    this.birthday = new Date(dob);
    this.calculateAge = function(){
      const diff =  Date.now() - this.birthday.getTime();
      const ageDate = new Date(diff);
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
  }
  
  // const brad = new Person('Brad', 36);
  // const john = new Person('John', 30);
  
  // console.log(john.age);
  
  const brad = new Person('Brad', '9-10-1981');
  console.log(brad.calculateAge());
  



// Person constructor
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  // Greeting
  Person.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
  
  const person1 = new Person('John', 'Doe');
  
  console.log(person1.greeting());
  
  // Customer constructor
  function Customer(firstName, lastName, phone, membership) {
    Person.call(this, firstName, lastName);
  
    this.phone = phone;
    this.membership = membership;
  }
  
  // Inherit the Person prototype methods
  Customer.prototype = Object.create(Person.prototype);
  
  // Make customer.prototype return Customer()
  Customer.prototype.constructor = Customer;
  
  // Create customer
  const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard');
  
  console.log(customer1);
  
  // Customer greeting
  Customer.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;
  }
  
  console.log(customer1.greeting());