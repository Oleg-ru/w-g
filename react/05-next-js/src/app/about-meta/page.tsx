import Link from "next/link";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Страница о компании',
    description: 'Наша берлога лучшая команта для посиделок под пивом'
};

function Page() {
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold">О нашей берлоге</h1>
            <h2>meta информация</h2>
            <Link className="text-fuchsia-500" href="/">На главную</Link>
        </div>
    );
}

export default Page;