import React from 'react';
import Link from "next/link";

function InnerF2() {
    return (
        <div>
            <h1>F2 page</h1>
            <Link href={"/f5"}>Go to F5</Link>
        </div>
    );
}

export default InnerF2;