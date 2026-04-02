import Link from "next/link";

function Home() {
    return (
        <div className="flex w-1/2 justify-between bg-amber-800 rounded mt-1 p-3">
            <Link className="hover:bg-emerald-900" href={"articles/news?language=ru&edit=true"}>Читать по-русски (с модалкой)</Link>
            <Link className="hover:bg-emerald-900" href={"articles/news?language=en"}>Read in English</Link>
            <Link className="hover:bg-emerald-900" href={"articles/news?language=fr"}>Lire en Francais</Link>
            <Link className="hover:bg-emerald-900" href={"articles/news?language=de"}>Auf deutsch lesen</Link>
        </div>
    );
}

export default Home;