import Link from "next/link";

function F2() {
    return (
        <div>
            <h1>F2 page</h1>
            <Link href={"/f4"}>to F4</Link>
        </div>
    );
}

export default F2;