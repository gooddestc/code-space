// const person = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };
// let txt = "";
// for (let x in person) {
// txt += person[x] + " ";
// };
// let x  = person.name + "," + person.age + "," + person.city;
// const myArray = Object.values(person);
// const myArray = JSON.stringify(person);

// console.log(myArray);
// function Person(first, last, age, eye,nation) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eye;
//   this.nationality =nation;
//   this.name = function() {
//     return this.firstName + " " + this.lastName;
//   };
// }
// student1 = new Person("victor","okoye",45,"brown","usa");
// student2 = new Person("favour","eze",34,"blue");
// student1.nationality= "nigeria";
// console.log(student1);
// let name = "bill ximax";
// let edu =" studied technology and A.I at princeton University U S A. ";
// let age = 26;
// let status ="single";
// let email ="Bill245@gmail.com";


// function bio(name,edu,age,status,email) {
//                    let final  =           `23,IT, 
//                                 Techocraft,
//                                 Enugu,
//                                 Enugu State,
//                                 Nigeria.
  
// 23,IT, 
// Techocraft,
// Enugu,
// Enugu State,
// Nigeria.
  
// Dear ${name},

//                             LETTER OF IDENTITY
                            

//           name: ${name}.
//           brif History of Eduction: ${edu}.
//           email:${email}.
//           age:${age}.
//           statu:${status}

//                                     yours regards, 
//                                     Techocraft,
//                                     Enugu,
//                                     Enugu State,
//                                     Nigeria.

//   `
// return final
// }
// let out = bio(name,edu,age,status,email);
// const person = {
//   fullName: function() {
//     return this.firstName + " " + this.lastName;
//   }
// }
// const person1 = {
//   firstName:"John",
//   lastName: "Doe"
// }
// const person2 = {
//   firstName:"Mary",
//   lastName: "Doe"
// }

// // This will return "John Doe":

// const person = {
//   fullName: function(city, country) {
//     return this.firstName + " " + this.lastName + "," + city + "," + country;
//   }
// }

// const person1 = {
//   firstName:"John",
//   lastName: "Doe"
// }

// const personx = {
//   fullName: function(city, country) {
//     return this.firstName + " " + this.lastName + "," + city + "," + country;
//   }
// }

// const personx1 = {
//   firstName:"John",
//   lastName: "Doe"
// }

// person.fullName.apply(person1, ["Oslo", "Norway"]);




// let out = person.fullName.call(person1, "Oslo", "Norway");
// let z = 12;
// function name(){
// a = 43;
// console.log(z);
// }
//  name()
// const person = {
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
//   }
//   const person1 = {
//     firstName:"John",
//     lastName: "Doe"
//   }
//   const person2 = {
//     firstName:"Mary",
//     lastName: "Doe"
//   }
// class Car {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.fullName = function() {
//       return this.firstName + " " + this.lastName;
//     }
//   }
// }
//  const person1 = new Car("John","Doe");
//  console.log(person1.fullName());

