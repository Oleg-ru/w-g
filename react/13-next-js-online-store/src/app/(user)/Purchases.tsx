import fetchPurchases from "@/app/(user)/fetchPurchases";
import ProductSection from "@/app/(products)/ProductSection";

const Purchases = async () => {

    try {
        const purchases = await fetchPurchases();
        return <ProductSection title="Все покупки"
                               viewAllButton={{text: "Все покупки", href: "/purchases"}}
                               products={purchases}
                               compact={true}
        />
    } catch {
        return <div className="text-red-500">Ошибка: не удалось загрузить покупки</div>
    }
};

export default Purchases;