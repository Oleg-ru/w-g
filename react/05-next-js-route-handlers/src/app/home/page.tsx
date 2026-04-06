import SwitchThemeButton from "@/components/SwitchThemeButton";

function Home() {
    return (
        <div className="mt-5 mx-10 flex flex-col items-center gap-4">
            <h1 className="text-2xl font-bold">Демка работы куков</h1>
            <p className="border p-6 rounded mt-3 bg-white text-black dark:bg-gray-700 dark:text-white">
                Текущая тема сохраняется в куках и будет применена при следующем посещении
            </p>
            <SwitchThemeButton />
        </div>
    );
}

export default Home;