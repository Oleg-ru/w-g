import {getDB} from "../../../../utils/api-routes";
import {NextResponse} from "next/server";
export const revalidate = 3600;

export async function GET() {
    try {
        const db = await getDB();
        const articles = await db.collection("articles").find().toArray();
        return NextResponse.json(articles);
    } catch (e) {
        console.error('Ошибка сервера: ', e);
        return NextResponse.json(
            {message: 'Ошибка при загрузке статей'},
            {status: 500}
        )
    }
}