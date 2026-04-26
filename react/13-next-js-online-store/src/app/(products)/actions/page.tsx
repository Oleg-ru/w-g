import {ProductCardProps} from "@/types/product";
import fetchProductsByCategory from "@/app/(products)/fetchProducts";
import ProductSection from "@/app/(products)/ProductSection";

export const metadata = {
    title: 'Акции магазина "Северяночка"',
    description: 'Акционные товары магазина "Северяночка"',
};

const AllActions = async () => {

    let products: ProductCardProps[] = [];

    try {
        products = await fetchProductsByCategory('actions');
        return (
            <ProductSection title="Все акции"
                            viewAllButton={{text: "На главную", href: "/"}}
                            products={products}
            />
        )
    } catch {
        return <div className="text-red-500">Ошибка: не удалось загрузить все акции</div>
    }
};

export default AllActions;