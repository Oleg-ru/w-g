'use client'

import "../globals.css";
import Link from "next/link";
import {usePathname} from "next/dist/client/components/navigation";

const navLinks = [
    {name: 'Вход', href: '/login'},
    {name: 'Регистрация', href: '/register'},
    {name: 'Восстановление', href: '/forgot'},
];

export default function AuthLayout({children,}: { children: React.ReactNode; }) {

    const pathName = usePathname();

    return (
        <html>
        <body className="min-h-screen flex flex-col">
        <header className="flex flex-col p-5 ">
            Добро пожаловать
            <nav className="flex gap-3 border w-max p-2 rounded">
                {navLinks.map(link => {
                    const isActive = pathName === link.href || pathName.startsWith(link.href);
                    return <Link className={`hover:text-emerald-900 ${isActive ? 'underline text-blue-400' : ''}`}
                                 key={link.name}
                                 href={link.href}
                    >{link.name}</Link>
                })}
            </nav>
        </header>
        <div className="flex-1 bg-gray-700">
            {children}
        </div>
        <footer className="p-10">
            <div className="flex justify-around">
                <div>О нас</div>
                <div>Политика</div>
                <div>Документация</div>
                <div>Контакты</div>
            </div>
        </footer>
        </body>
        </html>
    );
}