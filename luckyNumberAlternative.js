const prompt=require('prompt-sync')();
function playGame(){
        let array=[];
        console.clear();
        console.log("||||||||||||||||||||||||||||||");
        console.log("||||||||||||||||||||||||||||||");
        console.log("WELCOME TO LUCKY NUMBER GAME");
        console.log("||||||||||||||||||||||||||||||");
        console.log("||||||||||||||||||||||||||||||");
        prompt("---------PRESS ENTER---------");
        console.clear();
        for(let i=0;i<3;i++){
        let value=40;
        if(value <1 || value>100)
        {
            console.log("INVALID LIMIT, CANT START GAME");
            return false;
        }
        let number=Math.floor((Math.random() * 100)+1);
        console.log("Winning Number is "+value);
        while(true)
        {
            if(!array.includes(number))
            {
                break;
            }
            number=Math.floor((Math.random() * 100)+1);

        }
        console.log("Random Number you recieved is "+number);
        if(value===number){
            console.log("You Won");
            return true;
        }
        else
        {   
            array.push(number);
            if(i<3){
            console.log("You Lost in This Chance");
            console.log("TRY AGAIN, YOU STILL HAVE CHANCE ");}
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