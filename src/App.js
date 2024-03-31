import logo from './logo.svg';
import './App.css';
import { Login } from './components/Login';
import { useEffect } from 'react';

function App() {
  
  useEffect(()=>{

    const hash = window.location.hash;
    if(hash){
    const token =  hash.substring(1).split("&")[0].split("=")[1];
    
    if(token)
    {
      console.log(token);
    }
    
    }

  },[token,dispatch])
   
  return (
    <>
    <div className="App">
    {token? "": <Login/>}
    </div>
    </>
  );
}

export default App;
