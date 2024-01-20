const numbers=[3,6,2,7,2,9,3,9,'z-','a'];
numbers.sort();
console.log(numbers);


numbers.reverse();
console.log(numbers);

//for objects 
const courses=[
{id:7,name:'b'},
{id:2,name:'Z'},
{id:3,name:'c'}
];

// courses.sort(); it wont work directly 
courses.sort(function(a,b)  // it is case senstive beacuse it will look at ascii values for sorting
{
if(a.name<b.name) return -1;
if(a.name>b.name) return 1;
return 0;
});
console.log(courses);

courses.sort(function(a,b)
{
    const nameA=a.name.toLowerCase();
    const nameB=b.name.toLowerCase();
if(nameA<nameB) return -1;
if(nameA>nameB) return 1;
return 0;
});
console.log(courses);