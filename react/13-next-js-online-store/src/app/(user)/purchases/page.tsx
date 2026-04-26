import ProductSection from "@/app/(products)/ProductSection";
import fetchPurchases from "@/app/(user)/fetchPurchases";

const AllUserPurchases = async () => {
    try {
        const purchases = await fetchPurchases();
        return (
            <ProductSection title="Покупали раньше"
                            viewAllButton={{text: "На главную", href: "/"}}
                            products={purchases}
            />
        )
    } catch {
        return <div className="text-red-500">Ошибка: не удалось загрузить все покупки</div>
    }
};

export default AllUserPurchases;