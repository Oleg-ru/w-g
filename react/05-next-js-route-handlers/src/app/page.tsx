'use client'

import React, {useEffect, useState} from "react";

type Comment = {
    id: string,
    text: string
}

export default function Home() {
    const [comments, setComments] = useState<Comment[]>([]);
    const [newCommentText, setNewCommentText] = useState("")
    
    async function loadComments() {
        const response = await fetch('/comments');
        console.log(response)
        const data = await response.json();
        setComments(data);
    }

    async function handleSubmit(e: React.SubmitEvent) {
        e.preventDefault();
        const response = await fetch('/comments', {
            method: "POST",
            body: JSON.stringify({text: newCommentText})
        });

        if (response.ok) {
            setNewCommentText("");
            loadComments();
        }
    }

    useEffect(() => {
        loadComments();
    }, []);
    
    
  return (
    <div>
      <h3 className="text-xl font-bold md-4">Комментарии</h3>
      <ul className="mb-6">
          {comments.map(comment => (
              <li className="mb-2 p-2 border rounded hover:bg-blue-200" key={comment.id}>
                  <span>{comment.text}</span>
              </li>
          ))}
      </ul>
      <h3 className="text-xl font-bold md-4">Добавить комменатрий</h3>
        <form onSubmit={handleSubmit} className="flex gap-2">
            <input placeholder="Комментарий...."
                   className="border p-2 flex-1"
                   required
                   value={newCommentText}
                   onChange={(e) => setNewCommentText(e.target.value)}
            />
            <button type="submit"
                    className="bg-blue-900 text-white cursor-pointer px-4 py-2 rounded hover:bg-blue-700"
            >Отправить</button>
        </form>
    </div>
  );
}