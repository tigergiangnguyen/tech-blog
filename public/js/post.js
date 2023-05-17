const newPostFormHandler = async (event) => {
  event.preventDefault();
  
  const title = document.querySelector('#title-post').value.trim();
  const content = document.querySelector('#content-post').value.trim();
  
  if (title && content) {
    const response = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('New post was NOT successful');
    }
  }
};

const postId = window.location.toString().split('/')
  [
  window.location.toString().split('/').length - 1
  ];
  
const updatePostFormHandler = async (event) => {
  event.preventDefault();
  
  const title = document.querySelector('#title-update-post').value.trim();
  const content = document.querySelector('#content-update-post').value.trim();
  
  if (title && content) {
    const response = await fetch(`/api/posts/${postId}`, {
      method: 'PUT',
      body: JSON.stringify({ title, content }),
      headers: { 
        'Content-Type': 'application/json' 
      },
  });
  
  if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Updating post was NOT successful');
    }
  }
  };
  

const deletePostFormHandler = async (event) => {
  event.preventDefault();
  
  const response = await fetch(`/api/posts/${postId}`, {method:'DELETE'});
  
  if (response.ok) {
    document.location.replace('/dashboard');
    } else {
      alert('Deleting post was NOT successful');
  }
};

const deletePost = async (postId) => {
  const response = await fetch(`/api/posts/${postId}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });
  
  if (response.ok) {
    document.location.reload();
    } else {
      alert('Deleting post was NOT successful');
  }
};
  
const deletePostHandler = (event) => {
  if (event.target.matches('.delete-post')) {
    const postId = event.target.getAttribute('data-post-id');
    deletePost(postId);
  }
};


const newPostForm = document.querySelector('.new-post-form');
  if (newPostForm) {
    newPostForm.addEventListener('submit', newPostFormHandler);
};

const updatePostButton = document.querySelector('#update-post');
  if (updatePostButton) {
    updatePostButton.addEventListener('click', updatePostFormHandler);
}
  
const deletePostButton = document.querySelector('#delete-post');
  if (deletePostButton) {
    deletePostButton.addEventListener('click', deletePostFormHandler);
}

document.addEventListener('click', deletePostHandler);

