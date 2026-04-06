import {cookies} from "next/headers";

export async function GET() {
    const cookiesStore = cookies();
    const theme = (await cookiesStore).get('theme')?.value || 'light';

    return Response.json({theme})
}

export async function POST(request: Request) {
    const cookiesStore = cookies();
    const {theme} = await request.json();
    (await cookiesStore).set('theme', theme, {maxAge: 100}) //установлена кука жизни 100 сек

    return Response.json({theme});
}