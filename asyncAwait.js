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

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;

            if (!error) {
                resolve();
            } else {
                reject("Error : Somethingh went wrong");
            }
        }, 3000);
    });
}

//Async / Await
async function init() {
    await createPost({
        title: 'Promise posts using await',
        body: 'This is Promise posts using await'
    });

    getPosts();
}

init();


//Async/Await/Fetch

async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    //because fetch returns another promise , and we want to convert it into json format as well
    const data = await res.json();

    console.log(data);
}

fetchUsers();