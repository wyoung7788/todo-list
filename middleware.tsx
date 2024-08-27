import { getToken } from 'next-auth/jwt';
import { NextResponse, NextRequest } from 'next/server'

const secret = process.env.AUTH_SECRET;

export async function middleware(req: NextRequest){
    const session = await getToken({req, secret});
    const { pathname } = req.nextUrl;
    
    if (session && (pathname === '/login')){
        return NextResponse.redirect(new URL('dashboard',req.url));
    }
    
    return NextResponse.next();
    const accessToken = req.cookies.get('accessToken');

    /*
    if (accessToken){
        return NextResponse.redirect(new URL('/dashboard', request.url));
    }
        */

    
}