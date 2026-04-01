export default async function ProductReview(
    {params}: { params: Promise<{ productId: string, reviewId: string }> }
) {
    const {productId, reviewId} = await params;

    return (
        <div className="text-fuchsia-300">
            Отзыв c ID: {productId} на продукт <span className="text-cyan-200">{reviewId}</span>
        </div>
    );
}