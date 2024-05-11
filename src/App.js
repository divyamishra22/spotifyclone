import logo from './logo.svg';
import './App.css';
import { Login } from './components/Login.tsx';
import { useEffect } from 'react';
import { Body } from './components/Body.tsx';
import { useStateProvider } from './contextapi/Stateprovider.tsx';
import { Firebasedb } from './Firebasedb.jsx';



function App() {

  // const [{ token }, dispatch] = useStateProvider();
  
  // useEffect(()=>{

  //   const hash = window.location.hash;
  //   if(hash){
  //   const token =  hash.substring(1).split("&")[0].split("=")[1];
    
  //   if(token)
  //   {
  //     console.log(token);
  //   }
    
  //   }

  // },[token,dispatch])
   
  return (
    <>
    {/* {token? "": <Login/>} */}
    {/* <Login/>
    <Body/> */}
    <Firebasedb/>
    
    </>
  );
}

export default App;
