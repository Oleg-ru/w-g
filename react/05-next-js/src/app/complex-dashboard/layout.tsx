import React from "react";

export default function RootLayout({
                                       children,
                                       advertising,
                                       menu,
                                       notification,
                                       login
                                   }: Readonly<{
    children: React.ReactNode;
    advertising: React.ReactNode;
    menu: React.ReactNode;
    notification: React.ReactNode;
    login: React.ReactNode;
}>) {

    const isLoggedIn = true;
    
    return (
        <div>
            <div>{children}</div>
            {isLoggedIn ? (
                <div className="flex">
                    <div className="flex flex-col">
                        <div className="flex-1">{advertising}</div>
                        <div className="flex-1">{menu}</div>
                    </div>
                    <div className="flex-1">{notification}</div>
                </div>
            ) : (
                <div>
                    {login}
                </div>
            )}

        </div>
    );
}