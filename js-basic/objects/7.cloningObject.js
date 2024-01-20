const circle={
    radius :1,
    draw(){
        console.log('draw');
    }
}
const another={};
for(let key in circle)
{
    another[key]=circle[key];
}
// another['radius']=circle['radius'];
console.log(another);
circle.radius=3;

//new method
const third=Object.assign({},circle);
circle.radius=400;

console.log(third);


//more easy way

const fourth={...circle};
circle.radius=2000;
console.log(fourth);


