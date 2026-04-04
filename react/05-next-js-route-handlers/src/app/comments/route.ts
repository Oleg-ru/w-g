import {comments} from "@/app/comments/data";

export async function GET() {
    return Response.json(comments);
}

export async function POST(request: Request) {
    const comment = await request.json();
    const newComment = {
        id: new Date().getMilliseconds(),
        text: comment.text,
    };

    comments.push(newComment);

    return new Response(
        JSON.stringify(newComment),
        {
            headers: {'Content-Type': 'application/json'},
            status: 201,
        },
    );
}