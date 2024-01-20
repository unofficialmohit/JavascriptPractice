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


}

let app = new Apptunix('Mohit', 'Yes');
app.sayHello(); 
app.currentStatus();