//import {notFound} from "next/dist/client/components/not-found";

function getRandomInt(count: number) {
    return Math.floor(Math.random() * count)
}

export default async function ProductReview(
    {params}: { params: Promise<{ productId: string, reviewId: string }> }
) {
    const {productId, reviewId} = await params;

    if (+reviewId > 1000) {
        //notFound()
    }

    const random = getRandomInt(2);

    if (random === 1) {
        throw new Error('Ошибка загрузки ответа (фэйк)')
    }

    return (
        <div className="text-fuchsia-300">
            Отзыв c ID: {productId} на продукт <span className="text-cyan-200">{reviewId}</span>
        </div>
    );
}