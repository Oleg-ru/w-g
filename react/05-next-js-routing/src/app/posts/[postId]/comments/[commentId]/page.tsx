import React from "react";

export default async function CommentPage(
    {params}: { params: Promise<{ postId: string, commentId: string }> }
) {
    const {postId, commentId} = await params;

    const comment = await fetch(`https://jsonplaceholder.typicode.com/comments/${commentId}?postId=/${postId}`)
        .then((response) => response.json())

    return (
        <div className="text-2xl border p-2 w-1/2">
            <h3 className="text-fuchsia-300">Пост id: {comment.postId}</h3>
            <h3 className="text-blue-400">Ответил: {comment.name}</h3>
            <p className="text-cyan-200">Комментарий: {comment.body}</p>
        </div>
    );
}