function mixin(target,...sources)
{
return Object.assign(target,...sources);
}
const canEat={
    eat:function()
    {
        this.hunger--;
        console.log('eating');
    }
};
const canWalk={
    walk:function(){
        console.log('walking');
    }
}
const canSwim={
    swim:function(){
        console.log('swiming');
    }
}
// const person=Object.assign({},canEat,canWalk);
const person=Object.assign(Person.prototype,canEat,canWalk);

console.log(person);
console.log(Person);
function Person(){

}

function GoldFish()
{

}
// const gold=Object.assign(GoldFish.prototype,canEat,canSwim);
const gold=mixin(GoldFish.prototype,canEat,canSwim);

console.log(gold);