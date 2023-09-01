import NextAuth from "next-auth"
import CognitoProvider from "next-auth/providers/cognito"
import { randomUUID, randomBytes } from "crypto"
import { Session } from "inspector"
import jwtDecode from "jwt-decode"

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
    theme: {
        colorScheme: "dark", // "auto" | "dark" | "light"
        brandColor: "#000", // Hex color code
        logo: "https://cdn.designly.biz/images/designly-logo-300.webp", // Absolute URL to image
        buttonText: "#fff" // Hex color code
    },
    callbacks: {
    async jwt({ token, user,  account, profile }) {
      console.log(token)
      return token
    },
    async session({ session, user, token }) {
      console.log( session)
      return session
    },
}
})

export { handler as GET, handler as POST }