const { GoogleAuthProvider, getAuth } = require("firebase/auth");
const { app } = require("./firebase");
const { signInWithPopup } = require("firebase/auth/web-extension");


const googleprovider = new GoogleAuthProvider()

const firebasegoogle =  getAuth(app)

export const signingoogle = () => signInWithPopup((firebasegoogle ,googleprovider))