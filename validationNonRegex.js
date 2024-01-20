function checkAlpha(value)
{   
    value.toLowerCase();
    if(value<'a' || value>'z')
    {
        return false;
    }
    return true;
}
function validate(name,email,zip,phone,address)
{

if(arguments.length!==5)
{
    console.log("ARGUEMENTS SHOULD BE FIVE");
    return false;
}
///UNIVERSAL UNIVERSAL UNIVERSAL
//spaces at begining and ending not allowed
if(name[0]==' ' || name[name.length-1]==' ' || phone[0]==' ' || phone[phone.length-1]==' ' || email[0]==' ' || email[email.length-1]==' '|| zip[0]==' ' || zip[zip.length-1]==' '  )
{
        console.log("SPACE NOT ALLOWED AT START AND BEGINNING");
        return false;
}


//NAME NAME NAME
//length of name should be less than 20 and more than 5
let spaces=0;    // to calculate spaces in name
if(name.length>20 || name.length<6)
{
    console.log('INVALID LENGTH OF ENTERED NAME');
    return false;
}
//checking whether any invalid character entered by user in name
for(let key of name)
{ if(key==' ') 
    {  spaces++;
        continue;
    }
  if(!checkAlpha(key))
  {
    console.log("NUMBER IN NAME NOT ALLOWED");
    return false;
  }
}
//only one space allowed in name , which signifies firstname and lastname
if(spaces>1){
    console.log("NAME CAN HAVE ONLY ONE SPACE");
    return false;
}

//ZIPCODE ZIPCODE ZIPCODE
//zip length should be between 6 and 8
for(let key of zip)
{
    if(key==' ')
    {
        console.log("SPACES NOT ALLOWED IN ZIP CODE");
    }
}
if(zip.length<6 || zip.length>8)
{
    console.log('INVALID LENGTH OF ZIP CODE');
    return false;

}
//alphabet not allowed in zip code
for(let key of zip)
{
    if(checkAlpha(key))
    {
        console.log("INVALID ZIP CODE")
        return false;
    }

}

//PHONE PHONE PHONE
//phone number should be of 10 length
for(let key of phone)
{
    if(key==' ')
    {
        console.log("SPACES NOT ALLOWED IN Phone");
    }
}
if(phone.length!==10)
{
    console.log('INVALID LENGTH OF PHONE NUMBER')
    return false;
}
//alphabet not allowed in phone
for(let key of phone)
{
    if(checkAlpha(key))
    {
        console.log("INVALID PHONE NUMBER")
        return false;
    }

}


//Address Address Address
if(address.length<5 || address.length>30)
{
    console.log("INVLAID ADDRESSS");
    return false;
}

//Email Email Email 

for(let key of email)
{
    if(key==' ')
    {
        console.log("SPACES NOT ALLOWED IN MAIL");
        return false;
    }
}
let indexAt=email.lastIndexOf('@');
let indexDot=email.lastIndexOf('.');
let beforeAt=email.slice(0,indexAt);
let beforeDot=email.slice(indexAt+1,indexDot);
let domain=email.slice(indexDot+1,email.length);
// console.log(beforeAt);
// console.log(beforeDot);
// console.log(domain);
let hasAt=false;
let hasDot=false;
for(let key of email)
{
if(key=='.')
{
hasAt=true;
}
if(key=='@')
{
hasDot=true;
}
}
if(!hasAt ||!hasDot)
{
    console.log("INVALID EMAIL ADDRESS");
    return false;
}
if(beforeAt.length<3 ||beforeAt.length>12)
{
    console.log("INVALID EMAIL LENGTH, Problem :  "+beforeAt);
    return false;
}
if( beforeDot.length<2||beforeDot.length>8 )
{
    console.log("INVALID EMAIL LENGTH, Problem :  "+beforeDot);
    return false;
}
if(domain.length<2 || domain.length>4)
{
    console.log("INVALID EMAIL LENGTH, Problem :  "+domain);
    return false;
}
for(let key of beforeAt)
{   
    if(key>='!' && key<='/' )
    {
        console.log("SYMBOLS NOT ALLOWED IN EMAIL");
        return false;
    }
    if(key>=':' && key<='@')
    {
        console.log("SYMBOLS NOT ALLOWED IN EMAIL");
        return false;
    }
}
for(let key of beforeDot)
{   
    if(!checkAlpha(key))
    {
        console.log("YOU CANT USE NUMBERS AFTER @ ");
        return false;
    }
}
for(let key of domain)
{
    if(!checkAlpha(key))
    {
        console.log("YOU CANT USE NUMBERS IN EMAIL DOMAIN");
        return false;
    }
}
console.log("EVERYTHING LOOKS GOOD")
}
validate('mohit gujjar','mohhitgujjar@gmail.com','140507','7850980009','Sector 18, Dera Bassi');
// ,Near Anaj Mandi Gurudwara