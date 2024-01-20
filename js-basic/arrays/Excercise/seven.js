const movies=[
    {title:'d',year:2018,rating:4.5},
    {title:'b',year:2017,rating:4.4},
    {title:'c',year:2016,rating:4.3},
    {title:'a',year:2018,rating:4.9}

];
const result =[];
for(let key of movies)
{
    if(key.year===2018)
    {   
        result.push(key);
    }
}
result.sort(function(a,b)
{
if(a.title>b.title) return -1;
if(a.title<b.title) return 1;
return 0;
});
let final=[];
for(let key of result)
{
final.push(key.title);
}

console.log(final);
