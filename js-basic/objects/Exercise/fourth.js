const blog={
    title:'XYZ title name',
    body:`There can only be one winnner 
    lets go `,
    author:'mohit',
    views:70,
    comments:[
        {author:'aman',body:'great'},
        {author:'akshit',body:'good'}],
    isLive:true
};
console.log(blog);
function Post(title,body,author)
{
this.title=title;
this.body=body;
this.author=author;
this.views=0;
this.comments=[];
this.isLive=false;
}
const  post=new Post('a','b','c');
console.log(post);