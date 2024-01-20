function paranthesis2(text)
{
//using array to store occurance
let count=[0,0,0];
for(let key of text)
{    
    if(key==='('||key==='{'||key==='['||key===')'||key==='}'||key===']')
        {
        if(key==='(')
            {
                count[0]++;
            }
        else if(key==='{')
            {
                count[1]++;    
            }
        else if(key==='[')
            {
                count[2]++;
            }
        else
            {
                if(key===')')
                {   
                    if(count[0]>0)
                    count[0]--;
                    else
                    return false;
                }
                else if(key==='}' )
                {   
                    if(count[1]>0)
                    count[1]--;
                    else
                    return false;
                }
                else if(key===']' )
                {   
                    if(count[2]>0)
                    count[2]--;
                    else
                    return false;
                }
            }

        }
    else
    {
        console.log("INVALID INPUT");
        return;
    }
}
    
    for(let key of count)
    {
        if(key>0)
        {
            return false;
        }
    }
    return true;
}

console.log(paranthesis2(')(()[]{}'));
console.log(paranthesis2('(()[]{}'));
console.log(paranthesis2('(){}{[}]'));
console.log(paranthesis2('((g)[]{}'));