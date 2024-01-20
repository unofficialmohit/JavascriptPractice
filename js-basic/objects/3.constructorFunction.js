// we usually use pascal notation : OneTwoThreeFour
function Circle(radius)
{
    
    this.radius=radius;
    this.draw=function(){
        console.log("DRAW "+this.radius);
    }
}
const circle1=new Circle(4);
circle1.draw();
const circle2=new Circle(7);
circle2.draw();
console.log(Circle.length);
console.log(Circle.constructor);
console.log(Circle.name);


const Circle1 = new Function('radius',`
this.radius=radius;
this.draw=function(){
    console.log("DRAW "+this.radius);}
`);
const sphere=new Circle1(4);
sphere.draw();

Circle.call({},5);
Circle.apply({},[55]);
