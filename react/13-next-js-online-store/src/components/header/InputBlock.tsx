import Image from "next/image";
import iconSearch from "../../../public/icons-header/icon-search.svg";


function InputBlock() {
    return (
        <div className="relative min-w-[261px] grow">
            <input type="text" placeholder="Найти товар" className="w-full h-10 rounded p-2 outline outline-(--color-primary) focus:shadow-(--shadow-button-default) text-[#8F8F8F] text-base leading-[150%]"/>
            <button className='absolute top-2 right-2 cursor-pointer'>
                <Image src={iconSearch} alt="Поиск" width={24} height={24}/>
            </button>
        </div>
    );
}

export default InputBlock;