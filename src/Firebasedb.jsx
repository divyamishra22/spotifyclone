import { getDatabase, ref, set } from "firebase/database";
import { app } from "./firebase";







 export const Firebasedb = ()=>{
    const db = getDatabase(app)

    const putdata = ()=>{

        set(ref(db, 'users/divya'),{
            name: "divya",
            email: "divya@"
        })
    }

    return (
        <>
        <p>database connect</p>
        <button onClick={putdata}>click</button>
        </>
    )
}