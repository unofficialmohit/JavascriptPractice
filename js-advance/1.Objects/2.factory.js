function createCircle(radius)
{
    return {
        radius,
        diameter:(radius*2),
        draw:function(){
            console.log('draw');
        }
    }
};
const circle=createCircle(34);
console.log(circle);