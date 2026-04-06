// import {type NextRequest} from 'next/server';
//
// export async function GET(request: NextRequest) {
//
//     const requestHeaders = new Headers(request.headers);
//     console.log(requestHeaders.get('Authorization'));
//
//
//     return new Response('📡-Route. From API in profile');
// }

// import {headers} from "next/headers";
//
// export async function GET() {
//     const headerList = await headers();
//     console.log(headerList.get('Authorization'));
//
//     return new Response('<h1>📡-Route. Headers</h1>', {
//         headers: {
//             "Content-Type": "text/html; charset=UTF-8"
//         }
//     });
// }

import {headers} from "next/headers";

export async function GET() {
    const headerList = headers();
    const acceptHeader = (await headerList).get('Accept');
    const userData = {
        name: 'Имя Именов',
        email: 'Почта',
        role: 'admin'
    };

    if (acceptHeader?.includes('application/json')) {
        return new Response(JSON.stringify(userData), {
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        })
    }

    return new Response(`
        <h1>Профиль пользователя</h1>
        <ul>
            <li>Имя: ${userData.name}</li>
            <li>Email: ${userData.email}</li>
            <li>Роль: ${userData.role}</li>
        </ul>
    `, {
        headers: {
            "Content-Type": "text/html; charset=UTF-8"
        }
    })
}