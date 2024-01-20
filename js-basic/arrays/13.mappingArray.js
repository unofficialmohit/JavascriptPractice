const numbers=[1,-1,2,3,4,5];
// const filteredNumbers=numbers.filter(function(value){
//     return value>=0;
// });
const filteredNumbers=numbers.filter(value => value>=0);

const items=filteredNumbers.map(value=> '<li> '+value+' <li>');

console.log(items);
const html='<ul> '+ items.join('')+ ' </ul>';
console.log(html);
// const objMap=filteredNumbers.map(function(n){
//     // const obj={value:n};
//     // return obj;
//     return {value:n};

// });
const objMap=filteredNumbers.map(n=> ({value:n}));
console.log(objMap);

//chaining of map and filter 
const test=numbers
        .filter(value => value>=0)
        .filter(obj=>obj>=3)
        .map(value=> '<li> '+value+' <li>');
console.log(test);