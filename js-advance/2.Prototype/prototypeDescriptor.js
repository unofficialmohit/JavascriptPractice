let person={name:'Mohit'};
// let objectBase = Object.getPrototypeOf(person);
// let descriptor=Object.getOwnPropertyDescriptor(objectBase,'toString');
// console.log(descriptor);
Object.defineProperty(person,'name',{
    // get:
    // set:
    writable:false
});
person.name='aman';
console.log(person.name);