const person={
    name:'mohit',
    age:24
};
for(let key in person)
{
    console.log(key);
    console.log(person[key]);
    //we cant use dot notation here 
    //because it will look for literally 'key' in person 
    //so its better with bracket notation
    // console.log(person.key);
}
const colors=['red','green','blue'];
for(let key in colors)
{
    console.log(key,colors[key]);
}