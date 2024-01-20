function Circle(radius)
{
    this.radius=radius;
    this.move=function(){
        console.log('move');
    }
}
Circle.prototype.draw=function()
{
    this.move();
    console.log('draw');
}
const c1=new Circle(5);
console.log(c1);
c1.draw();
console.log(Object.keys(c1));
for(let key in c1) console.log(key);

console.log(c1.hasOwnProperty('radius'));
console.log(c1.hasOwnProperty('move'));
