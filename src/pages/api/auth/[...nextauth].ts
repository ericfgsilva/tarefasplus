import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
// import KeycloakProvider from "next-auth/providers/keycloak";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    })
    // ,
    // KeycloakProvider({
    //   clientId: process.env.KEYCLOAK_CLIENT_ID as string,
    //   clientSecret: process.env.KEYCLOAK_CLIENT_SECRET as string,
    //   issuer: process.env.KEYCLOAK_ISSUER as string
    // })
  ],
  secret: process.env.JWT_SECRET as string,
}

export default NextAuth(authOptions)