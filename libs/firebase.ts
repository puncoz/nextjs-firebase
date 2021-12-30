import {
    getApp,
    getApps,
    initializeApp,
}                       from "@firebase/app"
import { getFirestore } from "@firebase/firestore"
import config           from "../config"

const app = getApps.length ? getApp() : initializeApp(config.firebase)
const firestore = getFirestore(app)

export {
    app,
    firestore,
}
