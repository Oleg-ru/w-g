import Link from "next/link";

export default function Home() {
  return (
    <div>
      Мое первое приложенице на Next.js
        <div className="flex justify-around w-1/3 border border-amber-200 rounded p-4">
            <Link className="text-blue-400 hover:bg-blue-300" href="/about" >О нас</Link>
            <Link className="text-green-400 hover:bg-red-300" href="/dashboard" >Панель управления</Link>
            <Link className="text-red-900 hover:bg-blue-300" href="/complex-dashboard" >Сложная панель управления</Link>
        </div>
    </div>
  );
}
