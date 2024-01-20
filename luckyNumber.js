const prompt=require('prompt-sync')();
function playGame(limit){
        if(limit <3 || limit>100)
        {
            console.log("INVALID LIMIT, CANT START GAME");
            return false;
        }
        let array=[];
        console.clear();
        console.log("||||||||||||||||||||||||||||||");
        console.log("||||||||||||||||||||||||||||||");
        console.log("WELCOME TO LUCKY NUMBER GAME");
        console.log("||||||||||||||||||||||||||||||");
        console.log("||||||||||||||||||||||||||||||");
        prompt("---------PRESS ENTER---------");
        console.clear();

        for(let x=1;x<=100;x++)  array.push(x);
        for(let i=0;i<3;i++){
        let value=2;
        let index=Math.floor((Math.random() * array.length));
        console.log("Winning Number is "+value);
        console.log("Random Number you recieved is "+array[index]);
        if(value==array[index]){
            console.log("You Won");
            return true;
        }
        else
        {   
            array.splice(index, 1);
            if(i<3){
            console.log("You Lost in This Chance");
            console.log("TRY AGAIN, YOU STILL HAVE CHANCE ");}
            index=Math.floor((Math.random() * array.length));
        }
        prompt('Press Enter ');
        console.clear();
        }
        console.log("Sorry, You loss all the chances");
        console.log("YOU LOST THE GAME");
        return false;
}
playGame();
prompt("PRESS ANY KEY TO EXIT");