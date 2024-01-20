function walk()     //function decalration 
{
    console.log('walk');
}

const run = function(){  //anonymous function declaration
    console.log('run');
};
let move=run;
run()
move();