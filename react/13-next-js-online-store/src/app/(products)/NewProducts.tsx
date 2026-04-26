import {ProductCardProps} from "@/types/product";
import fetchProductsByCategory from "@/app/(products)/fetchProducts";
import ProductSection from "@/app/(products)/ProductSection";

const NewProducts = async () => {

    let products: ProductCardProps[] = [];

    try {
        products = await fetchProductsByCategory('new');
        return (
            <ProductSection title="Новинки"
                            viewAllButton={{text: "Все новинки", href: "/new"}}
                            products={products}
                            compact={true}
            />
        )
    } catch {
        return <div className="text-red-500">Ошибка: не удалось загрузить новинки</div>
    }
};

export default NewProducts;