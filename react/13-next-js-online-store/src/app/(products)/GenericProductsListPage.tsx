import {GenericProductPageProps} from "@/types/genericProductPageProps";
import ProductSection from "@/app/(products)/ProductSection";
import {CONFIG} from "../../../config/config";
import PaginationWrapper from "@/components/PaginationWrapper";

const GenericProductsListPage
    = async ({searchParams, props}: {
    searchParams: Promise<{ page?: string, itemsPerPage?: string }>,
    props: GenericProductPageProps
}) => {

    const params = await searchParams;
    const page = params?.page;
    const itemsPerPage = params?.itemsPerPage || CONFIG.ITEMS_PER_PAGE;

    const currentPage = Number(page) || 1;
    const perPage = Number(itemsPerPage);
    const startIdx = (currentPage - 1) * perPage;

    try {
        const products = await props.fetchData();
        const paginatedProducts = products.slice(startIdx, startIdx + perPage);
        return (
            <>
                <ProductSection title={props.pageTitle}
                                viewAllButton={{text: 'На главную', href: "/"}}
                                products={paginatedProducts}
                />
                {products.length > perPage &&
                    <PaginationWrapper totalItems={products.length}
                                       currentPage={currentPage}
                                       basePath={props.basePath}
                    />}
            </>
        );
    } catch {
        return <div className="text-red-500">
            {props.errorMessage}
        </div>
    }


}

export default GenericProductsListPage;