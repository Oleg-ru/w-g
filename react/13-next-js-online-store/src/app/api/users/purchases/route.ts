import {NextResponse} from "next/server";
import {getDB} from "../../../../../utils/api-routes";

export const dynamic = "force-dynamic";
export const revalidate = 3600;

export async function GET() {
    try {
        const db = await getDB();
        const user = await db.collection('user').findOne({});
        if (!user?.purchases?.length) {
            return NextResponse.json([])
        }
        const productsIds = user.purchases.map((product: { id: number }) => product.id);

        const products
            = await db
            .collection('products')
            .find({id: {$in: productsIds}})
            .toArray();

        return NextResponse.json(
            products.map(product => {
                const {discountPercent, ...rest} = product;
                void discountPercent;
                return rest;
            })
        )
    } catch (error) {
        console.error("Ошибка сервера:", error);
        return NextResponse.json(
            {message: "Ошибка при загрузке купленных продуктов"},
            {status: 500}
        );
    }
}