let equalOk=false;
// let equalOk=true;
function strict(a,b,c) {
    if(typeof a!== typeof 0 || typeof b!== typeof 0 || typeof c!== typeof 0){
        console.log("ENTER VALID INPUT");
        return false;
    }
    if(equalOk)
    {
    
        if(b>=a && c>=b)
        {
    
            console.log('its increasing');
            return true;
    
        }
        else
        {
    
            console.log('its not in increasing');
            return false;

    
        }
    }
    else
    {
        if(b>a && c>b)
        {
            console.log('its increasing(strict)');
            return true;

        }
        else
        {
            console.log('its not in increasing(strict)');
            return false;

    
        }
    }
    
}
equalOk=false;
console.log(strict(5,8,8));
equalOk=true;
console.log(strict(5,8,'6'));
