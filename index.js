// const posts = [
//     {
//         title: 'This is title 1',
//         body: 'This is body 1'
//     },

//     {
//         title: 'This is title 2',
//         body: 'This is body 2'
//     },

//     {
//         title: 'This is title 3',
//         body: 'This is body 3'
//     },

//     {
//         title: 'This is title 4',
//         body: 'This is body 4'
//     } 
// ];

// {/* <div class="post">
//     <h4 class="post-title">Post Title 1</h4>
//     <p class="post-description">Post Description 1</p>
// </div> */}

const fetchData = async(config) =>{
    try{
        const res = await axios(config);
        return res.data; 
    }catch(error){
        throw Error('data is not fetched');
    }
}

const postsElement = document.querySelector('.posts');

const loadAllData = async() =>{
    const posts = await fetchData('https://jsonplaceholder.typicode.com/posts');
    posts.map((post) =>{
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
        <h4 class="post-title">${post.title}</h4>
        <p class="post-description">${post.body}</p>
        `;
        postsElement.appendChild(postElement);
    });
};

loadAllData();