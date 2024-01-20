const first=[1,2,3];
const second=[4,5,6];
const third=[7,8,9];
//const combined=first.concat(second);
const combined=[...first,...second,...third];
console.log(combined);
// const copy=combined.slice();
const copy=[...combined];
console.log(copy);
