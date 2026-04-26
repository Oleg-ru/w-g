import {ProductCardProps} from "@/types/product";

export interface ProductsSectionProps {
    title: string;
    viewAllButton: {
        text: string;
        href: string;
    };
    products: ProductCardProps[];
    compact?: boolean;
}