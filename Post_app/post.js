let postsData = [
    { id: 1, author: 'John', content: 'Hello, Instagram!', likes: 10, comments: ['Great post!', 'Nice photo!'], image: 'https://files.codingninjas.in/image2-28694.jpg' },
    { id: 2, author: 'Jane', content: 'This is a great post!', likes: 15, comments: [], image: 'https://files.codingninjas.in/oip-28704.jpg' },
    { id: 3, author: 'Alice', content: 'Another post', likes: 8, comments: [], image: 'https://files.codingninjas.in/th-2-28706.jpg' },
    { id: 4, author: 'Bob', content: 'Check out this photo!', likes: 20, comments: [], image: 'image/2023-11-16T06_00_14.352Z[BHTT - XK] [EDIT - HOÀN] Công Chúa Tha Mạng - Phượng Khi Vũ _.jpeg' },
  ];
  

const likedPosts = new Set();
  
function renderPosts() {
    const postsContainer = document.getElementById('posts');
    postsContainer.innerHTML = '';
  
    postsData.forEach((post) => {
      const postElement = document.createElement('div');
      postElement.classList.add('post');
  
      const authorElement = document.createElement('h3');
      authorElement.textContent = post.author;
  
      const contentElement = document.createElement('p');
      contentElement.textContent = post.content;
  
      const imageElement = document.createElement('img');
      imageElement.src = post.image;
      imageElement.alt = 'Post Image';
  
      const likeButton = document.createElement('button');
      likeButton.textContent = `Like`;
      likeButton.classList.add('like-button');
      likeButton.addEventListener('click', () => {
        if (!likedPosts.has(post.id)) {
            likePost(post.id);
            likedPosts.add(post.id);
            likeButton.disabled = true;  
            for(let ind of likedPosts){
                const button = document.querySelectorAll('.like-button')[ind-1];
                button.style.backgroundColor = 'red';
        
            }
    }
});
  
      const commentInput = document.createElement('input');
      commentInput.type = 'text';
      commentInput.placeholder = 'Write a comment...';
  
      const commentButton = document.createElement('button');
      commentButton.textContent = 'Comment';
      commentButton.classList.add('comment-button');
      commentButton.addEventListener('click', () => {
          if(commentInput.value){
            addComment(post.id, commentInput.value);
             commentInput.value = '';
          } 
      });
  
      const postFooter = document.createElement('div');
      postFooter.classList.add('post-footer');
      postFooter.textContent = `Likes: ${post.likes}   Comments: ${post.comments.length}`;
  
      const commentsContainer = document.createElement('div');
      commentsContainer.classList.add('comments-container');
      commentsContainer.style.display = 'none';
  
      post.comments.forEach((comment) => {
        const commentElement = document.createElement('p');
        commentElement.textContent = comment;
        commentsContainer.appendChild(commentElement);
      });
  
      postElement.appendChild(authorElement);

      postElement.appendChild(imageElement);
      postElement.appendChild(contentElement);
      postElement.appendChild(likeButton);
      postElement.appendChild(commentInput);
      postElement.appendChild(commentButton);
      postElement.appendChild(postFooter);
      postElement.appendChild(commentsContainer);
  
      postFooter.addEventListener('click', () => {
        if (commentsContainer.style.display === 'none') {
          commentsContainer.style.display = 'block';
        } else {
          commentsContainer.style.display = 'none';
        }
      });
  
      postsContainer.appendChild(postElement);
    });
  }

  // Function to handle post liking
  function likePost(postId) {
    const post = postsData.find(post => post.id === postId);
    if (post) {
      post.likes++;
      renderPosts();
    }
  }
  
  // Function to handle adding a comment
  function addComment(postId, comment) {
    const post = postsData.find(post => post.id === postId);
    if (post) {
      post.comments.push(comment);
      renderPosts();
    }
  }
 

// Create your function here to handle post creation and adding Post to the postsData.

function handleSubmit(event) {

   const newPostInput = document.querySelector('#postInput');

   const newImageInput = document.querySelector('#imageInput');

   const url = newImageInput.files[0];

    // console.log(url);

   const newPostObject = {  
     id: postsData.length + 1,
     author: '',
     content: `${newPostInput.value}`,
     likes: 0,
     comments: [],
     image: `${URL.createObjectURL(url)}` 
   }

   postsData.push(newPostObject) ;

   renderPosts();
   // console.log('hello')
   newPostInput.value ='';
   newImageInput.value='';

   event.preventDefault();// Prevent the form from actually submittings
}  

// Add Event listeners to listen to the submit event of the form.
const postForm = document.getElementById("postForm");  
postForm.addEventListener("submit", handleSubmit);



// Initial rendering                      
  renderPosts();


/** /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */    
// let postsData = [
//     { id: 1, author: 'John', content: 'Hello, Instagram!', likes: 10, comments: ['Great post!', 'Nice photo!'], image: 'https://files.codingninjas.in/image2-28694.jpg' },
//     { id: 2, author: 'Jane', content: 'This is a great post!', likes: 15, comments: [], image: 'https://files.codingninjas.in/oip-28704.jpg' },
//     { id: 3, author: 'Alice', content: 'Another post', likes: 8, comments: [], image: 'https://files.codingninjas.in/th-2-28706.jpg' },
//     { id: 4, author: 'Bob', content: 'Check out this photo!', likes: 20, comments: [], image: 'https://files.codingninjas.in/image1-28708.jpg' },
//   ];

// let currentPost = 0;

// const postsContainer = document.getElementById('posts');postsContainer.innerHTML = '';
  

// function renderPosts() {
    
//     const postData = postsData[currentPost] ;  
      
//     //console.log(postData);
      
    
    
//       const postElement = document.createElement('div');
//       postElement.classList.add('post');
    
//       const authorElement = document.createElement('h3');
//       authorElement.textContent = postData.author;
    
//       const contentElement = document.createElement('p');
//       contentElement.textContent = postData.content;
    
//       const imageElement = document.createElement('img');
//       imageElement.src = postData.image;
//       imageElement.alt = 'Post Image';
    
//       const likeButton = document.createElement('button');
//       likeButton.textContent = `Like`;
//       likeButton.classList.add('like-button');
//       likeButton.addEventListener('click', () => {
        
//         postData.likes++;
         
//         likeButton.style.backgroundColor = 'red';  
        
//         postFooter.textContent = `Likes: ${postData.likes}   Comments: ${postData.comments.length}`;
          
//         renderPosts();    
      
//       },{once:true});
      
//       function likePost() {
//       postData.likes++;
//       renderPosts();
//       const button = document.querySelector('.like-button');
//       button.style.backgroundColor = 'red';
//     }
    
//       const commentInput = document.createElement('input');
//       commentInput.type = 'text';
//       commentInput.placeholder = 'Write a comment...';
    
//       const commentButton = document.createElement('button');
//       commentButton.textContent = 'Comment';
//       commentButton.classList.add('comment-button')
//       commentButton.addEventListener('click', () => {
        
          
//         if(commentInput.value){
//             postData.comments.push(commentInput.value);
//       postFooter.textContent = `Likes: ${postData.likes}   Comments: ${postData.comments.length}`;  

//         const commentElement = document.createElement('p');
//         commentElement.textContent = commentInput.value;
//         commentsContainer.appendChild(commentElement);
    
//         }
//         commentInput.value = '';
//       },{once:true});
    
//       const postFooter = document.createElement('div');
//       postFooter.classList.add('post-footer');
//       postFooter.textContent = `Likes: ${postData.likes}   Comments: ${postData.comments.length}`;
    
//       const commentsContainer = document.createElement('div');
//       commentsContainer.classList.add('comments-container');
//       commentsContainer.style.display = 'none';
    
//       postData.comments.forEach((comment) => {
//         const commentElement = document.createElement('p');
//         commentElement.textContent = comment;
//         commentsContainer.appendChild(commentElement);
//       });
    
//       postElement.appendChild(authorElement);
    
//       postElement.appendChild(imageElement);
//       postElement.appendChild(contentElement);
//       postElement.appendChild(likeButton);
//       postElement.appendChild(commentInput);
//       postElement.appendChild(commentButton);
//       postElement.appendChild(postFooter);
//       postElement.appendChild(commentsContainer);
    
//       postFooter.addEventListener('click', () => {
//         if (commentsContainer.style.display === 'none') {
//           commentsContainer.style.display = 'block';
//         } else {
//           commentsContainer.style.display = 'none';
//         }
//       });
    
//       postsContainer.appendChild(postElement);
      
//       currentPost++ ;
//     }

// function update(){

//   for(let i= 0 ; i< postsData.length ; i++ ){
//     renderPosts();    
//   }

// } 

// function handleSubmit(event) {

//    event.preventDefault();// Prevent the form from actually submitting

//    const newPostInput = document.querySelector('#postInput').value;

//    const newPostObject = {  
//      id: postsData.length + 1,
//      author: '',
//      content: `${newPostInput}`,
//      likes: 0,
//      comments: [],
//      image: `${url}` 
//    }

//    postsData.push(newPostObject) ;

//    renderPosts();

//    newPostInput.value = '';
//    newImageInput.value='';
// }  


// const postForm = document.getElementById("postForm");  
// postForm.addEventListener("submit", handleSubmit);



// const newImageInput = document.querySelector('#imageInput');
// let url = ''

// newImageInput.addEventListener('change',()=>{
    
//   //console.log(newImageInput.files[0]) ;

//   url = URL.createObjectURL(newImageInput.files[0]);

  
// })


// update(); 

