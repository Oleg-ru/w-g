import fetchProductsByCategory from "@/app/(products)/fetchProducts";
import ProductSection from "@/app/(products)/ProductSection";

export const metadata = {
    title: 'Новинки магазина "Северяночка"',
    description: 'Новые товары магазина "Северяночка"',
};

const AllNew = async () => {
    try {
        const products = await fetchProductsByCategory('new');
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