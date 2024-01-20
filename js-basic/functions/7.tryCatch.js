const person={
    firstName:'Mohit',
    lastName:'Gujjar',
    // fullName: function(){    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(value){
        if(typeof value!='string') throw new Error('Value is not a string');
        let parts=value.split(' ');
        if(parts.length!=2)
        throw new Error('ENTER TWO VALUEs');
        this.firstName=parts[0];
        this.lastName=parts[1];

    }
};
try{
    person.fullName='';
}
catch(e){
    console.log(e);
}
finally
{
    console.log("Execution is Completed");
}
console.log(person.fullName);
