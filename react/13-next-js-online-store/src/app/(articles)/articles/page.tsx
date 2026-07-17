import fetchArticles from "../fetchArticles";
import GenericListPage from "@/app/(products)/GenericListPage";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Статьи на сайте магазина "Северяночка"',
    description: 'Читайте статьи магазина "Северяночка"',
};

const AllArticles = async ({
                               searchParams,
                           }: {
    searchParams: Promise<{ page?: string; itemsPerPage?: string }>;
}) => {
    return (
        <GenericListPage
            searchParams={searchParams}
            props={{
                fetchData: () => fetchArticles(),
                pageTitle: " Все статьи",
                basePath: "/articles",
                errorMessage: "Ошибка: не удалось загрузить статьи",
                contentType: "articles",
            }}
        />
    );
};


export default AllArticles;