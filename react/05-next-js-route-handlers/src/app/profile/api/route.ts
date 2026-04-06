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

import {headers} from "next/headers";

export async function GET() {
    const headerList = await headers();
    console.log(headerList.get('Authorization'));

    return new Response('📡-Route. Headers');
}