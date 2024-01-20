function address(street,city,zipcode)
{
    return{
        street,
        city,
        zipcode
    };  
}
const location=address('Sector 18','DeraBassi','140507');
console.log(location);

function Address(street,city,zipcode)
{
    this.street=street;
    this.city=city;
    this.zipcode=zipcode;
}
const location2=new Address('Sector 18','DeraBassi','140507');
console.log(location2);
