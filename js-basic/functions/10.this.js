//method-> obj 
//function -> global (window,global)
const video={
    title:'a',
    tags:['a','b','c'],
    showtags()
    {
        this.tags.forEach(function(element){
            console.log(this.title,element);
        },this);
    }
}
console.log(video.showtags());