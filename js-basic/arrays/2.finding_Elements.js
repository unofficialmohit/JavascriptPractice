//primitives
const numbers=[1,2,3,4,1];
// numbers.indexOf(0);
console.log(numbers.indexOf(1));
console.log(numbers.lastIndexOf(1));
console.log(numbers.indexOf(1) !== -1);
console.log(numbers.includes(1));
console.log(numbers.indexOf(2,2));//second arguement is starting index

//refrence types
const courses=[
    {id:1,name:'b'},
    {id:2,name:'c'}
];
courses.includes({id:1,name:'b'});
console.log(courses.includes({id:1,name:'b'}));//it wont work 
//find()
let course=courses.find(function(course){
    return course.name==='b';
});
console.log(course);
course=courses.find(function(course){
    return course.name==='33';
});
console.log(course);


//findIndex
course=courses.findIndex(function(course){

    return course.name==='c';
})
console.log(course);










































































































