import React from "react";

function Card({children}: {children: React.ReactNode}) {

    return (
        <div className="p-12 m-2 shadow border border-amber-200 flex justify-center items-center rounded-2xl">
            {children}
        </div>
    );
}

export default Card;