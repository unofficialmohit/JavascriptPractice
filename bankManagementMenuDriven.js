const prompt=require('prompt-sync')();
let moneyBank=999999;
let regName = /^[a-zA-Z]{4,20}(\s[a-zA-Z]{4,20})*$/;
let regEmail=/^[a-zA-Z0-9._%+-]{1,30}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let regPhone = /^\d{10}$/;
const dataBase=[
    {   acNumber:10000,
        name:'mohit',
        email:'mohitgujjar2121@gmail.com',
        phone:'7',
        loanTotal:[0,0,0],
        balance:0,
        emiCost:[0,0,0],
        emiCount:[0,0,0],
        loanAlreadyGiven:[false,false,false]}
];
let accountNumber=10000;
function mainmenu()
{   
    console.clear();
    console.log(`
    Choose an option 
    1.I'm a new User 
    2.I'm an Existing User
    3.Exit
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
        case '3':
            process.exit();
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
        prompt("USER ALREADY EXISTS");
        mainmenu();
    }
}
accountNumber+=100;
dataBase.push({
    acNumber:accountNumber,
    name:customerName,
    email:customerEmail,
    phone:customerPhone,
    loanTotal:[0,0,0],
    balance:0,
    emiCost:[0,0,0],
    emiCount:[0,0,0],
    loanAlreadyGiven:false

});
console.log("\nNEW USER CREATED SUCCESSFULLY\n");
console.log( `
        Account Number : ${dataBase[dataBase.length-1].acNumber}
        Customer Name : ${dataBase[dataBase.length-1].name}
        Customer Email : ${dataBase[dataBase.length-1].email}
        Customer Phone :${dataBase[dataBase.length-1].phone}
        Account Balance : ${dataBase[dataBase.length-1].balance}
        `);
prompt("PRESS ENTER KEY TO CONTINUE;");
mainmenu();
}

function oldUser()
{
//     let count=1;
//     console.clear();
//     console.log("\nUSERS IN OUR BANK : ")
// for(let key in dataBase)
// {
//     console.log(count+'.'+dataBase[key].name+"  "+dataBase[key].phone);
//     count++;
// }
// console.log(`

// SELECT THE USER 
// Choose from 1 to ${count-1}`);
console.clear();
console.log("CUSTOMER LOGIN");
console.log("ENTER ACCOUNT NUMBER AND PHONE NUMBER TO ACCESS YOUR ACCOUNT : ");
let account=parseInt(prompt("Enter Account Number "));
let mobile=prompt("Enter Phone Number ");
let index=-1;
for(let key in dataBase)
{
    if(dataBase[key].acNumber==account && dataBase[key].phone==mobile)
    {
        index=key;
        break;
    }
}


// let userChoose=parseInt(prompt());
// if(userChoose==-1)
// {
//     mainmenu();
// }
// if(userChoose<1|| userChoose>count)
// {
//     console.log("INVALID CHOICE :( , RETRY\n");
//     oldUser();
// }
if(index===-1)
{
    prompt("DETAILS NOT FOUND,PLEASE CREATE AN ACCOUNT");
    mainmenu();
}
userOptions(index);
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
8.Go Back to Main Menu 
9.Exit
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
   mainmenu();
break;
case 9:
    process.exit();
    break;
default:
    userOptions(index);

}

function depositMoney(index)
    {   
        let value=parseInt(prompt("ENTER AMOUNT YOU WANT TO DEPOSIT : "));
        if(value<1 || isNaN(value))
        {
            prompt("Enter a Valid Amount to Deposit");
            userOptions(index);
        }
        dataBase[index].balance+=value;
        console.log(value+" rupees added to your account");
        prompt("Updated Balance " + dataBase[index].balance );
        userOptions(index);
    }
}

function withdrawMoney(index)
{
    let value=parseInt(prompt("ENTER AMOUNT YOU WANT TO WITHDRAW : "));
    if(value<1||isNaN(value))
    {
        prompt("Enter a Valid Amount to Withdraw");
        userOptions(index);
    }
    if(dataBase[index].balance<value)
    {
        prompt("Your Account dont have enough funds");
        userOptions(index);
    }
    dataBase[index].balance-=value;
    console.log(value+" rupees withdrawn");
    prompt("Updated Balance " + dataBase[index].balance );
    userOptions(index);
}

function showBalance(index)
{
   
        console.log("Dear Customer,");
        prompt("Your Account has "+dataBase[index].balance+" rupees");
        userOptions(index);
    
}
function validateLoan(index,type)
{   let interest=0;
    if(dataBase[index].loanAlreadyGiven[type])
    {
        prompt("You Already have a pending loan due of "+ dataBase[index].loanTotal[type]);
        userOptions(index);

    }
    let value=parseInt(prompt("ENTER LOAN AMOUNT : "));
    let month=parseInt(prompt("ENTER TIME PERIOD(IN MONTHS) : "));
        if(type==0)
        {
            interest+=2;
        }
        else if(type==1)
        {
            interest+=5;
        }
        else
        {
            //no additional interest for education loan
        }
    
    if(isNaN(value))
    {
        prompt("PLEASE ENTER VALID AMOUNT");
        userOptions(index);
    }
    if(month<1 || month>36 || isNaN(month)){
    dataBase[index].emiCount[type]=0;
    dataBase[index].loanTotal[type]=0;
    prompt("PLEASE ENTER VALID MONTH");
    userOptions(index);
    }

    if(month<=3)
    {   
        interest+=10;
    }
    else if(month<=6)
    {
        interest+=12;
    }
    else if(month<=12)
    {
        interest+=15;
    }
    else
    {
        interest+=20;
    }
    if(moneyBank<value)
    {
        prompt("BANK DONT HAVE SUFFICIENT FUNDS");
        userOptions(index);
    }
    
    dataBase[index].loanTotal[type]=value+(value*(interest/100));
    dataBase[index].emiCost[type]=Math.round((dataBase[index].loanTotal[type]/month)*100)/100;
    dataBase[index].balance+=value;
    moneyBank-=value;
    console.log("Loan Approved Successfully for "+value);
    console.log("Now You have to repay "+dataBase[index].loanTotal[type]+" rupees to bank in "+month+" EMIs");
    console.log("Total Interest Amount That Bank will Recieve from you ("+interest+"% PA) : "+(value*(interest/100)));
    console.log("One EMI will cost "+dataBase[index].emiCost[type]);
    prompt("Updated Balance " + dataBase[index].balance );
    dataBase[index].emiCount[type]=month;
    dataBase[index].loanAlreadyGiven[type]=true;
    userOptions(index);

}

function getLoan(index)
    {   
        console.log(`
        Choose What type of Loan You want : 
        1.Home Loan
        2.Buissness Loan
        3.Education Loan
        `);
        let loanType=parseInt(prompt());
        switch(loanType)
        {
            case 1:
            validateLoan(index,0);
                break;
            case 2:
            validateLoan(index,1);
                break;
            case 3:
            validateLoan(index,2)
                break;
            default:
                prompt("INVALID OPTION ChOOSED");
                userOptions(index);
       
        }
    }
function validateEmi(index,type)
{
    if(dataBase[index].emiCount[type]==0)
    {
        prompt("You dont have any pending loan :-)");
        userOptions(index);
    }
    if(dataBase[index].balance<dataBase[index].emiCost[type])
    {
     +   console.log("Sorry, Your Account dont have enough funds to repay EMI("+dataBase[index].emiCost[type]+'Rupees )');
        console.log("You still have "+dataBase[index].emiCount[type]+ " EMI Left to Pay")
        prompt("DEPOSIT MONEY TO PROCEED");
        userOptions(index);
    }
    
    dataBase[index].emiCount[type]--;
    dataBase[index].balance-=dataBase[index].emiCost[type];
    dataBase[index].moneyBank+=dataBase[index].emiCost[type];
    console.log(dataBase[index].emiCost[type]+" rupees deducted from your account succesfully");
    console.log("Updated Balance " + dataBase[index].balance );
    dataBase[index].loanTotal[type]-=dataBase[index].emiCost[type];
    if(dataBase[index].emiCount[type]==0)
    {


        prompt("Loan has Been Repayed Successfully");
        dataBase[index].loanTotal[type]=0;
        dataBase[index].loanAlreadyGiven[type]=false;
        userOptions(index);
    }

    console.log("Remaining Loan Amount : "+dataBase[index].loanTotal[type]);
    if(dataBase[index].emiCount[type]>0)
    prompt("You still have "+dataBase[index].emiCount[type]+ " EMI Left to Pay");
    userOptions(index);
}
function payEmi(index)
    {   
        console.log(`Type What type of Loan You want Repay: 
        1.Home Loan
        2.Business Loan
        3.Education Loan`);
        let emiType=prompt().toLowerCase();
        switch(emiType)
        {
            case 'home':
                validateEmi(index,0);
                break;
            case 'business':
                validateEmi(index,1);
                break;
            case 'education':
                validateEmi(index,2);
                break;
            default:
                prompt("INVALID CHOICE");
                payEmi(index);
        }
        
    }

function getDetails(index)
    {  let period=['','',''];
        for(let key in period){
        if(dataBase[index].emiCount[key]==0) {
            period[key]='Nil';
        }
        else if(dataBase[index].emiCount[key]<12)
        {
            period[key]=dataBase[index].emiCount[key]+' Months';
        }
        else 
        {
            let year=parseInt(dataBase[index].emiCount[key]/12);
            let month=dataBase[index].emiCount[key]%12;
            period[key]=year+' Year, ' + month+' Month'
        }
        }
        let currentLoan=['','',''];
        for(let key in currentLoan){
        if(dataBase[index].loanTotal[key]==0)
        {
            currentLoan[key]='Nil';
        }
        else
        {
            currentLoan[key]=dataBase[index].loanTotal[key]+' Rupees';
        }
        }
        let tempCount=['','',''];
        for(let key in tempCount)
        {
        tempCount[key]=dataBase[index].emiCount[key];
        if(tempCount[key]==0)
        {
            tempCount[key]='Nil';
        }
        else
        {
            tempCount[key]=dataBase[index].emiCount[key];
        }
        }
        console.log( `
        Customer Name : ${dataBase[index].name}
        Customer Email : ${dataBase[index].email}
        Customer Phone :${dataBase[index].phone}
        Account Balance : ${dataBase[index].balance}
        
        Pending Home Loan : ${currentLoan[0]}
            EMIs Pending : ${tempCount[0]}
            EMI Pending Period : ${period[0]}
        
        Pending Business Loan : ${currentLoan[1]}
            EMIs Pending : ${tempCount[1]}
            EMI Pending Period : ${period[1]} 

        Pending Education Loan : ${currentLoan[2]}
            EMIs Pending : ${tempCount[2]}
            EMI Pending Period : ${period[2]}
        `);

        prompt("PRESS ENTER KEY TO PROCEED ....");
        userOptions(index);
    }

function updateDetails(index)
    {
        let temp=prompt('Enter Phone Number To Confirm Your Identity : ');
        if(temp!==dataBase[index].phone)
        {
            prompt("You are not allowed to change the Details");
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
                    updateMail=prompt('Enter New Email : ');
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
        prompt('Your Bank Detail Updated Successfully');
        userOptions(index);
    }-``
mainmenu();