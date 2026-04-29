import {ProductCardProps} from "@/types/product";

const fetchProductsByCategory = async (category: string) => {
    try {
        const res
            = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL!}/api/products?category=${category}`,
            {
                next: {revalidate: 3600}
            }
        );
        if (!res.ok) throw new Error(`Ошибка получения продуктов ${category}`);

        const products: ProductCardProps[] = await res.json();

        return products.filter(product => product.quantity > 0);
    } catch (error) {
        console.error('Ошибка при получении продуктов', error);
        throw error;
    }
};

export default fetchProductsByCategory;