import React from 'react';
import Link from "next/link";

function F1() {
    return (
        <div>
            <h1>F1 page</h1>
            <Link href={"/f1/f2"}>Go to F2</Link>
            <p>f3 - there </p>
            <Link href={"/f3"}>Go to F3</Link>
        </div>
    );
}

export default F1;