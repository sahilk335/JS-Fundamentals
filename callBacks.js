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

function createPost(post,callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 3000);

}


getPosts();

createPost({
    title: 'Posts3',
    body: 'This is post3'
},getPosts);
