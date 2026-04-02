import type {Metadata} from "next";

interface Post {
    id: number,
    title: string,
    body: string
}

type Props = {
    params: Promise<{postId: string}>
}

async function getPost(id: string): Promise<Post> {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        if (!res.ok) {
            throw new Error(`Ошибка ответа сервера: ${res.status}`)
        }
        return await res.json()
    } catch (e) {
        console.error('Не удалось получить данные: ', e);
        throw e;
    }
}

export const generateMetadata = async ({params,}: Props ): Promise<Metadata> => {
    const {postId} = await params;
    const post = await getPost(postId);
    return {
        title: `${post.title} | 'My-Post`,
        description: `${post.body.slice(0, 160)}`
    }
};

async function PostPage({params} : Props) {

    const {postId} = await params;
    const post = await getPost(postId)
    
    return (
        <div className="text-2xl border p-2 w-1/2">
            <h3 className="text-blue-400">Пост: {post.title}</h3>
            <p className="text-cyan-200">Текст: {post.body}</p>
        </div>
    );
}

export default PostPage;