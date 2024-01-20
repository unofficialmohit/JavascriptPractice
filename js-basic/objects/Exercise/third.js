function Address(street,city,zipcode)
{
    this.street=street;
    this.city=city;
    this.zipcode=zipcode;
}
let address1=new Address('a','b','c');
let address2=new Address('a','b','c');
function areEqual(address1,address2)
{
    for(let key in address1)
    {
        if(address1[key]!==address2[key])
        {
            return false;
        }
    }
    return true;
}
function areSame(address1,address2)
{
    return address1===address2;
}
console.log(areSame(address1,address2));

console.log(areEqual(address1,address2));
