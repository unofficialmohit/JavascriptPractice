// while(x>3)
// {
//     x=x-3;
//     if(pos==0) pos=1;
//     else pos=0;
// }
// x--;
// if(pos==0)
// {
//     if(x==0)
//     {
//     seat='Window';
//     }
//     else if(x==1)
//     {
//     seat='Middle';
//     }
//     else if(x==2)
//     {
//     seat='Aisle';
//     }
// }
// else 
// {
//     if(x==0)
//     {
//     seat='Aisle';
//     }
//     else if(x==1)
//     {
//         seat='Middle';
//     }
//     else if(x==2)
//     {
//         seat='Window';
//     }
// }
const prompt = require("prompt")
let x=prompt("ENTER");
function train(seatNumber) {
    if(seatNumber>108 || seatNumber<=0)
    {
        console.log("Please Enter Valid Seat Number")
        return ;
    }
    let seat='';
    let z=seatNumber%12;
    switch(z)
    {
        case 1:
            seatNumber+=11;
            seat='window';
            break;
        case 2:
            seatNumber+=9;
            seat='middle';
    
            break;
        case 3:
            seatNumber+=7;
            seat='aisle';
    
            break;
        case 4: 
            seatNumber+=5;
            seat='aisle';
    
            break;
        case 5:
            seatNumber+=3;
            seat='middle';
    
            break;
        case 6:
            seatNumber+=1;
            seat='window';
    
            break;
        case 7:
            seatNumber-=1;
            seat='window';
    
            break;
        case 8: 
            seatNumber-=3;
            seat='middle';
    
            break;
        case 9:
            seatNumber-=5;
            seat='aisle';
    
            break;
        case 10:
            seatNumber-=7;
            seat='aisle';
    
            break;
        case 11:
            seatNumber-=9;
            seat='middle';
    
            break;
        
        case 0:
            seatNumber-=11;
            seat='window';
    
            break;
        default:
            console.log("INVALID SEAT");
    }
    console.log('Seat in Front of you is ' + seat);
    console.log('Seat Number in Front of you is ' + seatNumber);
}

train(22);
