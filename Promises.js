const posts = [
    {
        title: 'Post1',
        body: 'This is post1'
    },
    {
        title: 'Post2',
        body: 'This is post2'
    }
];

function getPosts() {
    setTimeout(() => {

        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;

    }, 2000);
}

function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
            const error = true;

            if(!error){
                resolve();
            }else{
                reject("Error : Somethingh went wrong");
            }
        },3000);
    });
}


createPost({
    title: 'Promise Posts',
    body: 'This is Promise posts'
})
.then(getPosts)
.catch(err => console.log(err));


