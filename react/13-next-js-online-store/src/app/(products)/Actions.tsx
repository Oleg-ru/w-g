import {ProductCardProps} from "@/types/product";
import fetchProductsByCategory from "@/app/(products)/fetchProducts";
import ProductSection from "@/app/(products)/ProductSection";

const Actions = async () => {

    let products: ProductCardProps[] = [];

    try {
        products = await fetchProductsByCategory('actions');
        return (
            <ProductSection title="Акции"
                            viewAllButton={{text: "Все акции", href: "/actions"}}
                            products={products}
                            compact={true}
            />
        )
    } catch {
        return <div className="text-red-500">Ошибка: не удалось загрузить акции</div>
    }
};

export default Actions;