function isBalance(x) {
    
    let stack=[];
    for(let key of x)
    {   if(key==='('||key==='{'||key==='['||key===')'||key==='}'||key===']')
        {
         if(key==='{' || key==='[' || key==='(')
        {
            stack.push(key);
        }
        else
        { 
            if(key==')' && stack[stack.length-1]=='(')
            {  
               stack.pop();
            }
            else if(key=='}' && stack[stack.length-1]=='{')
            {
                stack.pop();
    
            }
            else if(key==']' && stack[stack.length-1]=='[')
            {
                stack.pop();
    
            }
            else
            {
                return false;
            }
        }
        
        }
        else{
        console.log("INVALID STRING GIVEN");
            return;}
    }
    if(stack.length==0)
        return true;
    else
        return false;
    
    
}
// console.log(isBalance('{[((()))]}'));
// console.log(isBalance('()'));
// console.log(isBalance('()[]'));
// console.log(isBalance('[()]'));
// console.log(isBalance('([)]'));
// console.log(isBalance('{()[]}'));
console.log(isBalance('{()[(r]})'));