import * as firestoreFunctions       from "@firebase/firestore"
import { FirebaseAdapter }           from "@next-auth/firebase-adapter"
import NextAuth, { NextAuthOptions } from "next-auth"
import { Provider }                  from "next-auth/providers"
import GoogleProvider                from "next-auth/providers/google"
import config                        from "../../../config"
import { firestore }                 from "../../../libs/firebase"

const providers: Provider[] = [
    GoogleProvider({
        clientId: config.google.clientId,
        clientSecret: config.google.clientSecret,
    }),
]

const options: NextAuthOptions = {
    providers,

    adapter: FirebaseAdapter({
        db: firestore,
        ...firestoreFunctions,
    }),

    secret: config.app_secret,
}

export default NextAuth(options)
