class BlockTunix {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log(`Hello, this is ${this.name}`);
    }
}

class Apptunix extends BlockTunix {
    constructor(name, isOpen) {
        super(name);
        this.isOpen = isOpen;
    }

    currentStatus() {
        console.log(`Hello, this is ${this.name}`);
        console.log(`Is Apptunix open? ${this.isOpen}`);
    }

    sayHello() {
        console.log(`Greetings from Apptunix, named ${this.name}`);
    }
    // sum(first,second)
    // {
    //    console.log(first+second);
    // }
    // // not working
    sum(first,second,third)
    {   if(arguments.length==2)
        console.log("Sum of two Digits is : ",first+second);
        else if(arguments.length==3)
        console.log("Sum of three Digits is : ",first+second+third);
        else
        console.log("Something is not right")


    }
}


let app = new Apptunix('Mohit', 'Yes');
app.sayHello(); 
app.currentStatus();
app.sum(5,4);
app.sum(5,3,5)
