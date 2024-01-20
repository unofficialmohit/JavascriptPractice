const prompt=require('prompt-sync')();
let moneyBank=999999;
let regName = /^[a-zA-Z]{4,20}(\s[a-zA-Z]{4,20})*$/;
let regEmail=/^[a-zA-Z0-9._%+-]{1,30}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let regPhone = /^\d{10}$/;
const dataBase=[
    {   name:'mohit',
        email:'mohitgujjar2121@gmail.com',
        phone:'787887887',
        loanTotal:0,
        balance:0,
        emiCost:0,
        emiCount:0,
        loanAlreadyGiven:false}
];

function mainmenu()
{   
    console.clear();
    console.log(`
    Choose an option 
    1.I'm a new User 
    2.I'm an Existing User
    Choose an Option : 
    `);
let createSelect=prompt();
    switch(createSelect)
    {
        case '1':
            createNewUser();
            break;
        case '2':
            oldUser();
            break;
        default:
            console.log("INVALID OPTION");
            mainmenu();
            break;
    }
}

function createNewUser()
{

let customerName;
let customerEmail;
let customerPhone;
while(true){
customerName=prompt("ENTER NAME : ")   
if(regName.test(customerName)) break;
console.log("INVALID NAME, RETRY");
}
while(true){
customerEmail=prompt("ENTER EMAIL ID : ");
if(regEmail.test(customerEmail)) break;
console.log("INVALID EMAIL, RETRY")
}
while(true){
customerPhone=prompt("ENTER PHONE NUMBER ");
if(regPhone.test(customerPhone)) break;
console.log("INVALID PHONE NUMBER, RETRY");
}
for(let key in dataBase)
{   
    if(dataBase[key].phone==customerPhone || dataBase[key].email==customerEmail)
    {
        console.log("USER ALREADY EXISTS");
        prompt("ENTER ENTER KEY TO CONTINUE");
        mainmenu();
    }
}
dataBase.push({
    name:customerName,
    email:customerEmail,
    phone:customerPhone,
    loanTotal:0,
    balance:0,
    emiCost:0,
    emiCount:0,
    loanAlreadyGiven:false

});
console.log("NEW USER CREATED SUCCESSFULLY");
prompt("PRESS ENTER KEY TO CONTINUE;");
mainmenu();
}

function oldUser()
{
    let count=1;
    console.clear();
    console.log("\nUSERS IN OUR BANK : ")
for(let key in dataBase)
{
    console.log(count+'.'+dataBase[key].name+"  "+dataBase[key].phone);
    count++;
}
console.log(`

SELECT THE USER 
Choose from 1 to ${count-1}`);
console.log("Press -1 to Go Back")

let userChoose=parseInt(prompt());
if(userChoose==-1)
{
    mainmenu();
}
if(userChoose<1|| userChoose>count)
{
    console.log("INVALID CHOICE :( , RETRY\n");
    oldUser();
}

userOptions(userChoose-1);
}

function userOptions(index)
{
console.clear();
console.log(`
Options Available for User 
1.Deposit 
2.Withdraw
3.Show Balance
4.Take Loan 
5.Pay an EMI
6.Get Details
7.Update User Details
8.Go Back 
Choose an option  :  `);
let choosenOption=parseInt(prompt());
switch(choosenOption)
{
case 1:
    depositMoney(index);
    break;
case 2:
    withdrawMoney(index);
    break;
case 3:
    showBalance(index);
    break;
case 4:
    getLoan(index);
    
    break;
case 5:
    payEmi(index);
    break;
case 6:
    getDetails(index);
    break;
case 7:
    updateDetails(index);
    break;
case 8:
   oldUser(index);
break;
default:
    oldUser();

}

function depositMoney(index)
    {   
        let value=parseInt(prompt("ENTER AMOUNT YOU WANT TO DEPOSIT : "));
        if(value<1)
        {
            console.log("Enter a Valid Amount to Deposit");
            prompt("PRESS ENTER KEY ....");
            userOptions(index);
        }
        dataBase[index].balance+=value;
        console.log(value+" rupees added to your account");
        console.log("Updated Balance " + dataBase[index].balance );
        prompt("PRESS ENTER KEY ....");
        userOptions(index);
    }
}

function withdrawMoney(index)
{
    let value=parseInt(prompt("ENTER AMOUNT YOU WANT TO WITHDRAW : "));
    if(value<1)
    {
        console.log("Enter a Valid Amount to Withdraw");
        prompt("PRESS ENTER KEY ....");
        userOptions(index);
    }
    if(dataBase[index].balance<value)
    {
        console.log("Your Account dont have enough funds");
        prompt("PRESS ENTER KEY ....");
        userOptions(index);
    }
    dataBase[index].balance-=value;
    console.log(value+" rupees withdrawn");
    console.log("Updated Balance " + dataBase[index].balance );
    prompt("PRESS ENTER KEY ....");
    userOptions(index);
}

function showBalance(index)
{
   
        console.log("Dear Customer,");
        console.log("Your Account has "+dataBase[index].balance+" rupees");
        prompt("PRESS ENTER KEY ....");
        userOptions(index);
    
}

function getLoan(index)
    {   let interest=0;
        let value=parseInt(prompt("ENTER LOAN AMOUNT : "));
        let month=parseInt(prompt("ENTER TIME PERIOD(IN MONTHS) : "));
        if(dataBase[index].loanAlreadyGiven)
        {
        console.log("You Already have a pending loan due of "+ dataBase[index].loanTotal);
        prompt("PRESS ENTER KEY....");
        userOptions(index);
        }
        if(month<1 || month>36){
        dataBase[index].emiCount=0;
        dataBase[index].loanTotal=0;
        console.log("PLEASE ENTER VALID MONTH");
        prompt("PRESS ENTER TO CONTINUE...")
        userOptions(index);
        }
        if(month<=3)
        {   
            interest=10;
        }
        else if(month<=6)
        {
            interest=12;
        }
        else if(month<=12)
        {
            interest=15;
        }
        else
        {
            interest=20;
        }
        if(moneyBank<value)
        {
            console.log("BANK DONT HAVE SUFFICIENT FUNDS");
            prompt("PRESS ENTER TO CONTINUE.....");
            userOptions(index);
        }
        dataBase[index].loanTotal=value+(value*(interest/100));
        dataBase[index].emiCost=Math.round((dataBase[index].loanTotal/month)*100)/100;
        dataBase[index].balance+=value;
        moneyBank-=value;
        console.log("Loan Approved Successfully for "+value);
        console.log("Now You have to repay "+dataBase[index].loanTotal+" rupees to bank in "+month+" EMIs");
        console.log("Total Interest Amount That Bank will Recieve from you ("+interest+"% PA) : "+(value*(interest/100)));
        console.log("One EMI will cost "+dataBase[index].emiCost);
        console.log("Updated Balance " + dataBase[index].balance );
        dataBase[index].emiCount=month;
        dataBase[index].loanAlreadyGiven=true;
        prompt("PRESS ENTER KEY TO CONTINUE .....");
        userOptions(index);
    }

function payEmi(index)
    {   
        if(dataBase[index].emiCount==0)
        {
            console.log("You dont have any pending loan :-)");
            prompt("PRESS ENTER KEY TO PROCEED ....");
            userOptions(index);
        }
        if(dataBase[index].balance<dataBase[index].emiCost)
        {
            console.log("Sorry, Your Account dont have enough funds to repay EMI");
            console.log("You still have "+dataBase[index].emiCount+ " EMI Left to Pay")
            console.log("DEPOSIT MONEY TO PROCEED");
            prompt("PRESS ENTER KEY TO PROCEED ....");
            userOptions(index);
        }
        
        
        dataBase[index].emiCount--;
        dataBase[index].balance-=dataBase[index].emiCost;
        dataBase[index].moneyBank+=dataBase[index].emiCost;
        console.log(dataBase[index].emiCost+" rupees deducted from your account succesfully");
        console.log("Updated Balance " + dataBase[index].balance );
        dataBase[index].loanTotal-=dataBase[index].emiCost;
        if(dataBase[index].emiCount==0)
        {
            console.log("Loan has Been Repayed Successfully");
            dataBase[index].loanTotal=0;
            dataBase[index].loanAlreadyGiven=false;
            prompt("PRESS ENTER KEY TO PROCEED ....");
            userOptions(index);
        }

        console.log("Remaining Loan Amount : "+dataBase[index].loanTotal);
        if(dataBase[index].emiCount>0)
        console.log("You still have "+dataBase[index].emiCount+ " EMI Left to Pay")
        prompt("PRESS ENTER KEY TO PROCEED ....");
        userOptions(index);
        
    }

function getDetails(index)
    {  let period='';
        if(dataBase[index].emiCount==0) {
            period='Nil';
        }
        else if(dataBase[index].emiCount<12)
        {
            period=dataBase[index].emiCount+' Months';
        }
        else 
        {
            let year=parseInt(dataBase[index].emiCount/12);
            let month=dataBase[index].emiCount%12;
            period=year+' Year, ' + month+' Month'
        }
        let currentLoan='';
        if(dataBase[index].loanTotal==0)
        {
            currentLoan='Nil';
        }
        else
        {
            currentLoan=dataBase[index].loanTotal+' Rupees';
        }
        let tempCount=dataBase[index].emiCount;
        if(tempCount==0)
        {
            tempCount='Nil';
        }
        else
        {
            tempCount=dataBase[index].emiCount;
        }
        console.log( `
        Customer Name : ${dataBase[index].name}
        Customer Email : ${dataBase[index].email}
        Customer Phone :${dataBase[index].phone}
        Account Balance : ${dataBase[index].balance}
        Pending Loan : ${currentLoan}
        EMIs Pending : ${tempCount}
        EMI Pending Period : ${period}
        `);

        prompt("PRESS ENTER KEY TO PROCEED ....");
        userOptions(index);
    }

function updateDetails(index)
    {
        let temp=prompt('Enter Phone Number To Confirm Your Identity : ');
        if(temp!==dataBase[index].phone)
        {
            console.log("You are not allowed to change the Details");
            prompt("PRESS ENTER TO CONTINUE ...");
            userOptions(index);
        }
        console.log(`
        What do you want to change : 
        1.Name
        2.Email
        3.Phone
        Enter Anything else to GoBack 
        `);
        let choice=prompt();

        switch(choice)
        {
                case '1':
                    let updateName='';
                    while(true){
                    updateName=prompt('Enter New Name : ');
                    if(regName.test(updateName)) break;
                    console.log("INVALID NAME, RETRY");
                    }
                    dataBase[index].name=updateName;
                    
                    break;
                case '2':
                    let updateMail='';
                    while(true){
                    updateMail==prompt('Enter New Email : ');
                    if(regEmail.test(updateMail)) break;
                    console.log("INVALID EMAIL, RETRY");
                    }
                    
                    dataBase[index].email=updateMail;
                    break;
                case '3':
                    let updatePhone='';
                    while(true){
                    updatePhone=prompt('Enter New Phone : ');
                    if(regPhone.test(updatePhone)) break;
                    console.log("INVALID PHONE, RETRY");
                    }
                    
                    dataBase[index].phone=updatePhone;

                    break;
                default:

                    userOptions(index);
        }
        console.log('Your Bank Detail Updated Successfully');
        prompt("PRESS ENTER KEY TO CONTINUE...");
        userOptions(index);
    }
    
mainmenu();