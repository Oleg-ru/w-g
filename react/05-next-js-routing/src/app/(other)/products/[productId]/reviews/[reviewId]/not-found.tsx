'use client'
import Link from 'next/link'
import {usePathname} from "next/dist/client/components/navigation";

export default function ReviewNotFound() {

    const pathName = usePathname();

    const pathSegments = pathName.split('/');
    const productId = pathSegments[2];
    const reviewId = pathSegments[4];

    return (
        <div className="flex justify-center items-center flex-col min-h-screen bg-gray-700">
            <h2>Отзыв с номером №{reviewId} для продукта {productId} не найден</h2>
            <Link href="/" className="bg-cyan-700 p-2 rounded cursor-pointer hover:bg-cyan-500 hover:text-black">Return Home</Link>
        </div>
    )
}