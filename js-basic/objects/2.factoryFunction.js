function circle(raduis)
{
    // const circle={
        // raduis:1, 
        return {
        raduis,
        draw(){
            console.log("DRAW "+raduis);
        }
    
    }
}
const circle1=circle(2);
circle1.draw();
console.log(circle1.raduis);
const circle2=circle(6);
circle2.draw();
console.log(circle2.raduis);
