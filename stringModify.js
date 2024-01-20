function stringModify(text)
{
if(typeof text!=typeof "") return "ONLY STRING IS ALLOWED";
return text[text.length-1]+text+text[text.length-1];
}
console.log(stringModify('cat'));
console.log(stringModify('dog'));
console.log(stringModify('rats'));
console.log(stringModify('cat'));
console.log(stringModify('M'));