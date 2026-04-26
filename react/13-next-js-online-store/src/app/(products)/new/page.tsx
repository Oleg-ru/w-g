import {ProductCardProps} from "@/types/product";
import fetchProductsByCategory from "@/app/(products)/fetchProducts";
import ProductSection from "@/app/(products)/ProductSection";

const AllNew = async () => {

    let products: ProductCardProps[] = [];

    try {
        products = await fetchProductsByCategory('new');
        return (
            <ProductSection title="Все новинки"
                            viewAllButton={{text: "На главную", href: "/"}}
                            products={products}
            />
        )
    } catch {
        return <div className="text-red-500">Ошибка: не удалось загрузить все новинки</div>
    }
};

export default AllNew;