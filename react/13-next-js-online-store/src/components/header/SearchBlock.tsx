import ButtonSearch from "@/components/header/ButtonSearch";
import InputBlock from "@/components/header/InputBlock";

function SearchBlock() {
    return (
        <div className="flex flex-row gap-4 grow">
            <ButtonSearch />
            <InputBlock />
        </div>
    );
}

export default SearchBlock;