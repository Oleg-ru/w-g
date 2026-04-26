import fetchArticles from "@/app/(articles)/fetchArticles";
import ArticlesSection from "@/app/(articles)/ArticlesSection";

export const metadata = {
    title: 'Статьи на сайте магазина "Северяночка"',
    description: 'Читайте статьи магазина "Северяночка"',
};

const AllArticles = async () => {

    try {
        const articles = await fetchArticles();
        return (
            <ArticlesSection title="Все статьи"
                             viewAllButton={{text: "На главную", href: "/"}}
                             articles={articles}
            />
        )
    } catch {
        return <div className="text-red-500">Ошибка: не удалось загрузить все статьи</div>
    }
};

export default AllArticles;