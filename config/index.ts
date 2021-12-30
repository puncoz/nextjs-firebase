import {
    IConfig,
    IFirebaseConfig,
    IGoogleConfig,
} from "../@types/IConfig"

const googleConfig: IGoogleConfig = {
    clientId: process.env.GOOGLE_CLIENT_ID || "",
    clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
}

const firebaseConfig: IFirebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY || "",
    authDomain: process.env.FIREBASE_AUTH_DOMAIN || "",
    projectId: process.env.FIREBASE_PROJECT_ID || "",
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET || "",
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || "",
    appId: process.env.FIREBASE_APP_ID || "",
    measurementId: process.env.FIREBASE_MEASUREMENT_ID || "",
}

const config: IConfig = {
    app_secret: process.env.APP_SECRET || "",
    google: googleConfig,
    firebase: firebaseConfig,
}

export default config
