function interest(principal,rate,years)
{
    rate=rate|| 3.5;
    years=years||20;
    return principal* rate /100 * years;
}
console.log(interest(1000))

// we declare default value for all the following arguements 
// best practice is to use last value for default value of argument   
function interest(principal,rate=23,years=20)
{
return principal* rate /100 * years;
}
console.log(interest(1000))
