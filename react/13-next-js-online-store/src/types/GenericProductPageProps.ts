import {ProductCardProps} from "@/types/product";

export interface GenericProductPageProps {
    fetchData: () => Promise<ProductCardProps[]>;
    pageTitle: string;
    basePath: string;
    errorMessage: string;
}