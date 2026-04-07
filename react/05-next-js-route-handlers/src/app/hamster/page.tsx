import Link from "next/dist/client/link";

function Page() {
    return (
        <div>
            <h1>Главная страница</h1>
            <Link href={'/about'} className="block w-max p-3 mt-5 border rounded cursor-pointer hover:bg-gray-800 delay-75">О нашей компании</Link>
        </div>
    );
}

export default Page;