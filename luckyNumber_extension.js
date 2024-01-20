const prompt = require('prompt-sync')();
    function playGame(limit){
        let array=[];
        console.log("WELCOME TO LUCKY NUMBER GAME");
        for(let x=1;x<=limit;x++)  array.push(x);
        for(let i=0;i<3;i++){
        let value=prompt('ENTER A NUMBER ');
        if( value>100 || value<1)
        {
            console.log("INVALID INPUT");
            return false;
        }
        let index=Math.floor((Math.random() * array.length));
        console.log("Random Number is "+array[index]);
        if(value==array[index]){
            console.log("You Won");
            return true;
        }
        else
        {   
            array.splice(index, 1);
            console.log("You Lost in This Chance");
            console.log("TRY AGAIN, YOU STILL HAVE CHANCE ");
            index=Math.floor((Math.random() * array.length));
        }
        }
        console.log("Sorry You lost");
        return false;
    }
playGame(50);