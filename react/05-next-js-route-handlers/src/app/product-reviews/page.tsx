import Product from "@/components/Product";
import Reviews from "@/components/Reviews";
import {Suspense} from "react";

function ProductReview() {
    return (
        <div>
            <h1>Отзывы на продукт</h1>
            <Suspense fallback={<p className="w-max p-1 bg-green-800">Загрузка.... продукт</p>}>
                <Product/>
            </Suspense>
            <Suspense fallback={<p className="w-max p-1 bg-blue-800">Загрузка.... отзывы</p>}>
                <Reviews/>
            </Suspense>

        </div>
    );
}

export default ProductReview;