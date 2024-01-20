const prompt=require('prompt-sync')();
let moneyBank=999999;
let interest=0;
class bankManagement
{
    constructor(name,email,phone)
    {
        this.name=name;
        this.email=email;
        this.phone=phone;
        this.money=0;
        this.loanAlreadyGiven=false;
    }
    depositMoney()
    {   
        let value=parseInt(prompt("ENTER AMOUNT YOU WANT TO DEPOSIT : "));
        if(value<1)
        {
            console.log("Enter a Valid Amount to Deposit");
            return false;
        }
        this.money+=value;
        
        console.log(value+" rupees added to your account");
        console.log("Updated Balance " + this.money );
    }
    withdrawMoney()
    {
        let value=parseInt(prompt("ENTER AMOUNT YOU WANT TO WITHDRAW : "));
        if(value<1)
        {
            console.log("Enter a Valid Amount to Withdraw");
            return false;
        }
        if(this.money<value)
        {
            console.log("Your Account dont have enough funds");
            return false;
        }
        this.money-=value;
        console.log(value+" rupees withdrawn");
        console.log("Updated Balance " + this.money );
    }
    showBalance()
    {
        console.log("Dear Customer,");
        console.log("Your Account has "+this.money+" rupees");
        
    }
    getLoan()
    {   
        let value=parseInt(prompt("ENTER LOAN AMOUNT : "));
        let month=parseInt(prompt("ENTER TIME PERIOD(IN MONTHS) : "));
        if(this.loanAlreadyGiven)
        {
        console.log("You Already have a pending loan due of "+this.loanTotal);
        return false;
        }
        if(month<1 || month>36){
        this.emiCount=0;
        this.loanTotal=0;
        console.log("PLEASE ENTER VALID MONTH");
        return false;
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
            return false;
        }
        this.loanTotal=value+(value*(interest/100));
        this.emiCost=Math.round((this.loanTotal/month)*100)/100;
        this.money+=value;
        moneyBank-=value;
        console.log("Loan Approved Successfully for "+value);
        console.log("Now You have to repay "+this.loanTotal+" rupees to bank in "+month+" EMIs");
        console.log("Total Interest Amount That Bank will Recieve from you ("+interest+"% PA) : "+(value*(interest/100)));
        console.log("One EMI will cost "+this.emiCost);
        console.log("Updated Balance " + this.money );
        this.emiCount=month;
        this.loanAlreadyGiven=true;
    }
    payEmi()
    {   
        if(this.emiCount==0)
        {
            console.log("You dont have any pending loan :-)");
            return false;
        }
        if(this.money<this.emiCost)
        {
            console.log("Sorry, Your Account dont have enough funds to repay EMI");
            console.log("You still have "+this.emiCount+ " EMI Left to Pay")
            console.log("DEPOSIT MONEY TO PROCEED");
            return false;
        }
        
        
        this.emiCount--;
        this.money-=this.emiCost;
        this.moneyBank+=this.emiCost;
        console.log(this.emiCost+" rupees deducted from your account succesfully");
        console.log("Updated Balance " + this.money );
        this.loanTotal-=this.emiCost;
        if(this.emiCount==0)
        {
            console.log("Loan has Been Repayed Successfully");
            this.loanTotal=0;
            this.loanAlreadyGiven=false;
            return true;
        }

        console.log("Remaining Loan Amount : "+this.loanTotal);
        if(this.emiCount>0)
        console.log("You still have "+this.emiCount+ " EMI Left to Pay")
        
        
    }
    showDetails()
    {   this.period='';
        if(this.emiCount==0) {
            this.period='Nil';
        }
        else if(this.emiCount<12)
        {
            this.period=this.emiCount+' Months';
        }
        else 
        {
            let year=parseInt(this.emiCount/12);
            let month=this.emiCount%12;
            this.period=year+' Year, ' + month+' Month'
        }
        this.currentLoan='';
        if(this.loanTotal==0)
        {
            this.currentLoan='Nil';
        }
        else
        {
            this.currentLoan=this.loanTotal+' Rupees';
        }
        this.tempCount=this.emiCount;
        if(this.tempCount==0)
        {
            this.tempCount='Nil';
        }
        else
        {
            this.tempCount=this.emiCount;
        }
        return `
        Customer Name : ${this.name}
        Customer Email : ${this.email}
        Customer Phone :${this.phone}
        Account Balance : ${this.money}
        Pending Loan : ${this.currentLoan}
        EMIs Pending : ${this.tempCount}
        EMI Peroid Pendings : ${this.period}
        `
    }
    updateDetails()
    {
        let temp=prompt('Enter Phone Number To Confirm Your Identity : ');
        if(temp!==this.phone)
        {
            console.log("You are not allowed to change the Details");
            return false;
        }
        console.log(`
        What do you want to change : 
        1.Name
        2.Email
        3.Phone
        Enter 1,2 or 3 
        Enter Anything else to Exit 
        `);
        let choice=prompt();
        switch(choice)
        {
                case '1':
                this.name=prompt('Enter New Name : ');
                    break;
                case '2':
                this.email=prompt('Enter New Email : ');
                    break;
                case '3':
                this.phone=prompt('Enter New Phone : ');
                    break;
                default:
                    console.log('INVALID CHOICE');
                    return false;
        }
        console.log('Your Bank Detail Updated Successfully');
    }
}
let user1=new bankManagement('mohit','xyz@xyz.com','9875432452');
user1.showBalance();
user1.depositMoney();
user1.withdrawMoney();
user1.getLoan();
user1.payEmi();
user1.payEmi();
user1.updateDetails();
console.log(user1.showDetails());

// let user2=new bankManagement('akshit','xyz@abc.com','7834427452');
// user2.showBalance();
// user2.depositMoney(5000);
// user2.withdrawMoney(500);
// user2.getLoan(12000,15);
// user2.payEmi();
// console.log(user2.showDetails());
