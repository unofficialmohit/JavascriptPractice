const courses=[
    {id:1,name:'b'},
    {id:2,name:'c'}
];
let course=courses.find(course => course.name==='b');
console.log(course);

course=courses.find(function(course){return course.name==='b'});
console.log(course);

course=courses.find((course)=>{return course.name==='b'});
console.log(course);
