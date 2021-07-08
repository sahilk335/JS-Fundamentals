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
            const error = true;

            if (!error) {
                resolve();
            } else {
                reject("Error : Somethingh went wrong");
            }
        }, 3000);
    });
}


const promse1 = Promise.resolve("Hello World");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) =>
    setTimeout(resolve, 2000, "GoodBye")
);
const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json()
    );

Promise.all([promse1, promise2, promise3, promise4])
    .then(values => console.log(values)
    );



