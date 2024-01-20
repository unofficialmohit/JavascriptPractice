const video={
    title:'a',
    tags:['a','b','c'],
    showtags()
    {   
        // const self=this;
        // this.tags.forEach(function(element){
        //     console.log(self.title,element);
        // }.bind(this));
        this.tags.forEach(element=>{
            console.log(this.title,element)
        });
    }
}
console.log(video.showtags());

function playVideo()
{
    console.log(this);
}
playVideo.call({name:'mohit'},1,2);
playVideo.apply({name:'mohitt'},[1,2]);
playVideo.bind({name:'mohittt'})();
