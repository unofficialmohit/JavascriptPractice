function Shape(color)
{
this.color=color;
}
Shape.prototype.duplicate=function(){
    console.log('duplicate');
}
function Circle(radius,color)
{
    // Shape(color);
    Shape.apply(this,color);
    this.radius=radius;
}
//construtor also changes with this 
Circle.prototype=Object.create(Shape.prototype);
//to make constructor point back to circle
Circle.prototype.constructor=Circle;
// Circle.prototype.draw=function(){
//     console.log('draw');
// }

const s=new Shape();
const c=new Circle(2,'red');
console.log(s.duplicate());
console.log(c.duplicate());
