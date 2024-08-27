import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
/*
export async function GET(req: NextRequest, res: NextResponse){
    const getCookies = cookies()
    const nextAuthSession = getCookies.get('next-auth.session-token')?.value || ''

    return NextResponse.json(nextAuthSession)
  }
  /*
  //generates token for authenticated users 

  /*import { authOptions } from "../[...nextauth]";
import NextAuth from "next-auth";

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
*/

export async function GET(){
    return NextResponse.json({hello: 'world'});
}