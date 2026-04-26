import fetchArticles from "@/app/(articles)/fetchArticles";
import ArticlesSection from "@/app/(articles)/ArticlesSection";

const Articles = async () => {

    try {
        const articles = await fetchArticles();
        return (
            <ArticlesSection title="Статьи"
                             viewAllButton={{text: "Все статьи", href: "/articles"}}
                             articles={articles}
                             compact={true}
            />
        )
    } catch {
        return <div className="text-red-500">Ошибка: не удалось загрузить статьи</div>
    }
};

export default Articles;