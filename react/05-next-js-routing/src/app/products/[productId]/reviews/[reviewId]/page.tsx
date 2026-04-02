import {notFound} from "next/dist/client/components/not-found";

export default async function ProductReview(
    {params}: { params: Promise<{ productId: string, reviewId: string }> }
) {
    const {productId, reviewId} = await params;

    if (+reviewId > 1000) {
        notFound()
    }

    return (
        <div className="text-fuchsia-300">
            Отзыв c ID: {productId} на продукт <span className="text-cyan-200">{reviewId}</span>
        </div>
    );
}