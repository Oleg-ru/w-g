export default function ProductsLayout({children,}: { children: React.ReactNode; }) {
    return (
        <div>
            <div className="min-h-screen flex flex-col">
                <h2 className="bg-emerald-900 flex justify-center p-8 text-3xl text-cyan-200">Все продукты</h2>
                <div className="flex-1 bg-emerald-800">
                    {children}
                </div>
            </div>
        </div>
    );
}