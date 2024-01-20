const person={
    firstName:'Mohit',
    lastName:'Gujjar',
    // fullName: function(){    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(value){
        let parts=value.split(' ');
        this.firstName=parts[0];
        this.lastName=parts[1];

    }
};
console.log(person.fullName);
person.fullName='Aman Gujjar';
console.log(person.fullName);

//getters => access properties
//setters => change them (mutate)
