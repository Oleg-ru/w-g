import React from 'react';

async function PostPage({params} : {params: Promise<{postId: string}>}) {

    const {postId} = await params;
    const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then((response) => response.json())
    
    return (
        <div className="text-2xl border p-2 w-1/2">
            <h3 className="text-blue-400">Пост: {post.title}</h3>
            <p className="text-cyan-200">Текст: {post.body}</p>
        </div>
    );
}

export default PostPage;