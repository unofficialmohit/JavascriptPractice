class BlockTunix {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log(`Hello, this is ${this.name}`);
    }
}

let app = new BlockTunix('Mohit');
app.sayHello(); 
