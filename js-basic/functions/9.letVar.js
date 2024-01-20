let x=0;
var y=0;
function start()
{
    for(let i=0;i<5;i++)
    {
         console.log(i);
    }
    console.log(i);
}
start();
//var scope is limited to function, var=>function-scoped
//let scope is limited to block of code, let,const=>block-scoped

var color='red';    // it get attached to window object of browser, window.color is accessible on browser console
                    //fyi functions also get attached to window of browser console
let age=30; // it doesnt get attached to window , window.age  is not accessible on browser console
