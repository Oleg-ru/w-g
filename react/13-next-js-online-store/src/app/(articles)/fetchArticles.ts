import {Article} from "@/types/articles";

const fetchArticles = async () => {
    try {
        const res
            = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL!}/api/articles`,
            {
                next: {revalidate: 3600}
            }
        );
        if (!res.ok) throw new Error(`Ошибка получения статей`);

        const articles: Article[] = await res.json();
        return articles;
    } catch (error) {
        console.error('Ошибка при получении статей', error);
        throw error;
    }
};

export default fetchArticles;