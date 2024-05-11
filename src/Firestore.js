import { addDoc, collection, getDoc, getDocs, getFirestore } from "firebase/firestore"
import { app } from "./firebase"


const firestore = ()=>{

}

const firebasestore = getFirestore(app)

const getbooks = async() =>{
  
    const books =  collection(firebasestore, "books");
    return await getDocs(books)
}

const addbooks = async()=>{

   return await addDoc(collection(firestore, "books"),{
        imageURL: uploadResult.ref.fullPath,
        userID: user.uid,
        userEmail: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
    })
}

const getbook = async()=>{
    const collectionbook = collection(firestore, "books")
    const q = query(collectionbook,where(userid = "uswrid"))
    return await getDoc(q)
    
}


// now to add collection for a particular id of collection

const placeorder = async(bookid, qty)=>
    {
        const collectionorder = collection(firestore, "books", bookid , orders)
      return await addDoc(collectionorder, {
        userID: user.uid,
      userEmail: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      qty: Number(qty),
      })

    }