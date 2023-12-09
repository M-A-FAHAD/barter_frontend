import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
export async function middleware(req) {
    const token = req.cookies.get('token')?.value

    try {
        if (token) {
            const res = await fetch('https://barter-backend.vercel.app/user/authentication', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    token: token,
                },
            });
            const jsonRes = await res.json();
            if (jsonRes.authentication === true) {
                //Authentication true
                console.log(jsonRes.authentication)
            } else {
                //Authentication false
                console.log(jsonRes.authentication)
                return NextResponse.redirect(new URL('/', req.url))
            }
        } else {
            //Authentication false
            console.log(false)
            return NextResponse.redirect(new URL('/', req.url))
        }
    } catch (err) {
        console.log('This error from middleware: ' + err)
    }
}
// See "Matching Paths" below to learn more
export const config = {
    matcher:
        [
            // '/ex',
            // '/profile/:path*',
        ],
}
