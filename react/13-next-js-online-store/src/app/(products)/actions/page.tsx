import fetchProductsByCategory from "@/app/(products)/fetchProducts";
import GenericProductsListPage from "@/app/(products)/GenericProductsListPage";

export const metadata = {
    title: 'Акции магазина "Северяночка"',
    description: 'Акционные товары магазина "Северяночка"',
};

const AllActions
    = async ({searchParams}: { searchParams: Promise<{ page?: string, itemsPage?: string }> }) => {

    return (
        <GenericProductsListPage searchParams={searchParams}
                                 props={{
                                    fetchData: () => fetchProductsByCategory('actions'),
                                    pageTitle: "Все акции",
                                    basePath: "/actions",
                                    errorMessage: "Ошибка: не удалось загрузить акции"
                                }}
        />
    )
};

export default AllActions;