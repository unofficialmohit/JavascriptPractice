const address={
    Street:'Sector 19',
    city:'Dera Bassi',
    zipCode:'140507'
};
function showAddress(address)
{
    for(let key in address)
    {
        console.log(key,address[key]);
    }
}
showAddress(address);