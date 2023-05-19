const commentFormHandler = async (event) => {
    event.preventDefault();

    const post_id = parseInt(window.location.pathname.split('/').pop());
    const content = document.querySelector('#content-new-comment').value.trim();

    console.log(content);
    if (content) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ comment_text: content, post_id }),
            headers: { 'Content-Type': 'application/json' }
        });
        console.log(response);

        if (response.ok) {
            document.location.reload();
        } else {
            alert('Comment was NOT successful');
        }
    }
};

const commentForm = document.querySelector('.new-comment-form');
if (commentForm) {
    commentForm.addEventListener('submit', commentFormHandler);
};