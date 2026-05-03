'use client'

import {PaginationProps} from "@/types/paginationProps";
import Link from "next/link";

const createPageUrl = (basePath: string, params: URLSearchParams, page: number) => {
    const newParams = new URLSearchParams(params);
    newParams.set('page', page.toString());

    return `${basePath}?${newParams.toString()}`
};

function Pagination({totalItems, currentPage, basePath, itemsPerPage, searchQuery}: PaginationProps) {

    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const params = new URLSearchParams(searchQuery);

    const buttonBase = "px-4 py-2 rounded duration-300";
    const buttonActive = "bg-[#ff6633] text-white hover:bg-[#70c05b]";
    const buttonDisabled = "opacity-50 cursor-not-allowed";


    return (
        <div className="flex justify-center gap-4 mt-8 mb-12">
            <Link href={createPageUrl(basePath, params, 1)}
                  onClick={(e) => {if (currentPage === 1) e.preventDefault()}}
                  aria-disabled={currentPage === 1}
                  className={`${buttonBase} ${currentPage === 1 ? buttonDisabled : buttonActive}`}
            >
                В начало
            </Link>
            <Link href={createPageUrl(basePath, params, currentPage - 1)}
                  onClick={(e) => {if (currentPage === 1) e.preventDefault()}}
                  aria-disabled={currentPage === 1}
                  className={`${buttonBase} ${currentPage === 1 ? buttonDisabled : buttonActive}`}
            >
                Назад
            </Link>
            <Link href={createPageUrl(basePath, params, currentPage + 1)}
                  onClick={(e) => {if (currentPage === totalPages) e.preventDefault()}}
                  aria-disabled={currentPage === totalPages}
                  className={`${buttonBase} ${currentPage === totalPages ? buttonDisabled : buttonActive}`}
            >
                Вперед
            </Link>
            <Link href={createPageUrl(basePath, params, totalPages)}
                  onClick={(e) => {if (currentPage === totalPages) e.preventDefault()}}
                  aria-disabled={currentPage === totalPages}
                  className={`${buttonBase} ${currentPage === totalPages ? buttonDisabled : buttonActive}`}
            >
                В конец
            </Link>
        </div>
    );
}

export default Pagination;