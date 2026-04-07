import {cookies} from "next/headers";

async function Page() {

    const cookiesStore = await cookies();
    const theme = cookiesStore.get('theme');
    console.log(theme)
    
    return (
        <div>
            <h2>О компании</h2>
            <p className="w-max p-3 border border-amber-200 rounded">{new Date().toLocaleTimeString()}</p>
        </div>
    );
}

export default Page;