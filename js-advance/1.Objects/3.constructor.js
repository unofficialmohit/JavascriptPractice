
function Circle(radius){
    this.radius=radius;
    this.diameter=(radius*2);
    this.draw=function(){
        console.log('draw');
    }    

}
const another= new Circle(50);
console.log(another);
