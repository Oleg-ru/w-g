// import {type NextRequest } from "next/server";
//
// export async function GET(request: NextRequest) {
//
//     const theme = request.cookies.get('theme') || 'light'; //чтение куков из запроса
//
//     //Установка новой куки
//     return new Response(`Тема: ${theme}`, {
//         headers: {
//             'Set-Cookie': `theme=dark`,
//             'Content-Type': "text/plane"
//         }
//     })
// }

//2
import {cookies} from "next/headers";

export async function GET() {

    const cookieStore= cookies();
    (await cookieStore).set('result', "333");

    console.log((await cookieStore).get('result'))


    //Установка новой куки
    return new Response(`<h1>Мои данные</h1>`, {
        headers: {
            'Content-Type': "text/html; charset=UTF-8"
        }
    })
}