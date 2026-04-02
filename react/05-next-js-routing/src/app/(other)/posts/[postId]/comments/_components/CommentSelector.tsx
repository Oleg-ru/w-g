'use client'

import React, {useState} from "react";
import {useRouter} from "next/navigation";

function CommentSelector({initialPostId = '1'} : {initialPostId?: string}) {
    const [postId, setPostId] = useState(initialPostId);
    const [commentId, setCommentId] = useState('');
    const router = useRouter();

    const handleSubmit = (e: React.SubmitEvent) => {
        e.preventDefault();
        if (!postId || !commentId) return;

        router.push(`/posts/${postId}/comments/${commentId}`);
    };

    return (
        <div className="mt-5 border p-3 rounded">
            <h3>Выбрать другой комментарий</h3>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col mt-3">
                    <label>Номер поста: </label>
                    <input type="number"
                           value={postId}
                           onChange={(e) => {setPostId(e.target.value)}}
                           placeholder={"Номер поста"}
                           min={1}
                           required
                           className="border p-2 rounded"
                    />
                </div>
                <div className="flex flex-col mt-4 mb-2">
                    <label>Номер комментария: </label>
                    <input type="number"
                           value={commentId}
                           onChange={(e) => {setCommentId(e.target.value)}}
                           placeholder={"Номер коммента"}
                           min={1}
                           required
                           className="border p-2 rounded-2xl"
                    />
                </div>
                <button type="submit" className="bg-blue-900 p-2 rounded hover:bg-blue-800 delay-75 cursor-pointer">Перейти</button>
            </form>
        </div>
    );
}

export default CommentSelector;