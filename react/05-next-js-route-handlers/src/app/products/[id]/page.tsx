import {notFound} from "next/navigation";

export const dynamicParams = false;

const data = [{id: '1'},{id: '2'},{id: '3'},];

export async function generateStaticParams() {
    return data
}

export default async function ProductPage({params} : {params: Promise<{id: string}>}) {
    const {id} = await params;

    if (!data.find((product) => product.id === id)) {
        notFound();
    }

    return (
        <div>
            <h2>Описание продукта {id}</h2>
            <p>Создано: {new Date().toLocaleTimeString()}</p>
        </div>
    )
}