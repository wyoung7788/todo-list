import { NextResponse, NextRequest } from 'next/server'

export default function Middleware(request: NextRequest){

    
    const accessToken = request.cookies.get('accessToken');

    
    if (accessToken){
        return NextResponse.redirect(new URL('/dashboard', request.url));
    }

    
}