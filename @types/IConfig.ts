import { FirebaseOptions } from "@firebase/app"

export interface IGoogleConfig {
    clientId: string
    clientSecret: string
}

export interface IFirebaseConfig extends FirebaseOptions {
    apiKey: string
    authDomain: string
    projectId: string
    storageBucket: string
    messagingSenderId: string
    appId: string
    measurementId: string
}

export interface IConfig {
    app_secret: string
    google: IGoogleConfig
    firebase: IFirebaseConfig
}
