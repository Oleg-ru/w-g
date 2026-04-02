export default function ProductsDetailsLayout({children,}: { children: React.ReactNode; }) {
    return (
        <div className="flex gap-6 p-4">
            <aside className="w-64 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                    Рекомендуемые товары
                </h3>
            </aside>

            <div className="flex-1 min-h-screen flex flex-col">
                <h3 className="border-t-gray-600 flex justify-center p-8 text-3xl text-cyan-200">
                    Рекомендуемые товары
                </h3>
                <div className="flex-1 border-t-gray-500">
                    {children}
                </div>
            </div>
        </div>
    );
}