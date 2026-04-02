import type {Metadata} from "next";

type Props = {
    params: Promise<{productId: string}>
}

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
    const id = (await params).productId;
    return {
        title: `Продукт ${id}`,
        description: `Продукт ${id} - успей купить. ХИТ продаж!!!`
    }
};

export default async function ProductDetails({ params }: Props) {
    const {productId} = await params;
    
    return (
        <div>
            Описание продукта c ID: {productId}
        </div>
    );
}