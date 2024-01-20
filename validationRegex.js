function validate(name,email,zip,phone,address)
{
    if(arguments.length!==5)
        return "ARGUEMENTS SHOULD BE FIVE";
    let regName = /^[a-zA-Z]{4,20}(\s[a-zA-Z]{4,20})*$/;
    let regEmail=/^[a-zA-Z0-9._%+-]{1,30}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let regZip = /^\d{6,8}$/;
    let regPhone = /^\d{10}$/;
    let regAddress = /^.{5,40}$/;
if(!regName.test(name))
    return "INVALID NAME";
if(!regZip.test(zip))
    return "INVALID Zip Code";
if(!regPhone.test(phone))
    return "INVALID PHONE NUMBER";
if(!regAddress.test())
    return "INVALID ADDRESS";
if(!regEmail.test(email))
    return "INVALID EMAIL ADDRESS";
return "EVERYTHING LOOKS GOOD";
}
console.log(validate('hswe89sswew','mohhi25tgujjar@gmail.com','140507','7850980009','Sector 18, Dera Bassi'));