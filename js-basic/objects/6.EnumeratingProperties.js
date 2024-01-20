const circle={
    radius:1,
    draw(){
        console.log("Draw");
    }
};
for(let key in circle)
{
    console.log(key,circle[key]);
}
//object.keys return array 
//object.entries return array 
for(let key of Object.keys(circle))
{
    console.log(key);
}
for(let key of Object.entries(circle))
{
    console.log(key);
}
if('radius' in circle)
{
    console.log('yes');
}