const first=[1,2,3];
const second=[4,5,6];
const combined=first.concat(second);
console.log(combined);
let slice=combined.slice(4);//it will remove all elements before 4th index
console.log(slice);
slice=combined.slice(0,4);  //it will display index between 0 and 4th index
console.log(slice);
slice=combined.slice();//it will copy as it is
console.log(slice);
