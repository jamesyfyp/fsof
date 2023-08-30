import type { NextApiRequest, NextApiResponse } from "next"
import NextAuth from "next-auth"
import CognitoProvider from "next-auth/providers/cognito"

const clientId: string = `${process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID ? process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID : ''}`
const clientSecret: string = `${process.env.NEXT_PUBLIC_COGNITO_CLIENT_SECRET ? process.env.NEXT_PUBLIC_COGNITO_CLIENT_SECRET : ''}`
const issuer: string = `${ process.env.NEXT_PUBLIC_COGNITO_ISSUER ? process.env.NEXT_PUBLIC_COGNITO_ISSUER : ''}`
const handler = NextAuth({
  providers: [
        CognitoProvider({
            clientId,
            clientSecret ,
            issuer 
        }),
    ],

})

export { handler as GET, handler as POST }