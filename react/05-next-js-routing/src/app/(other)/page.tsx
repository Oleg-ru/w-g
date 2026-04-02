import Link from "next/link";

export default function Home() {

    const liClass = "border rounded p-1 hover:bg-blue-400";
    return (
        <>
            <h1>Самая главная cтраница APP</h1>
            <nav>
                <h2>Документация</h2>
                <ul className="flex justify-around gap-2 bg-blue-600 w-1/2 rounded-2xl p-2">
                    <li className={liClass}><Link href="/docs">Get started</Link></li>
                    <li className={liClass}><Link href="/docs/react">React</Link></li>
                    <li className={liClass}><Link href="/docs/react/hooks">React Hooks</Link></li>
                    <li className={liClass}><Link href="/docs/react/hooks/useState" replace>useState</Link></li>
                </ul>
            </nav>
        </>
    );
}
