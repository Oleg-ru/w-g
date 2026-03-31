import Link from "next/link";

export default function Home() {
  return (
    <div>
      Мое первое приложенице на Next.js
        <div>
            <Link className="text-blue-400" href="/about" >О нас</Link>
            <Link className="text-green-400" href="/dashboard" >Панель управления</Link>
        </div>
    </div>
  );
}
