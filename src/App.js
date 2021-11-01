import React, { useState ,useEffect} from 'react';


export default function App() 
{ 



  const [string , setString] = useState("https://source.unsplash.com/collection/559527") ;

  const arr = ["https://source.unsplash.com/collection/559527","https://source.unsplash.com/collection/402504"];

  useEffect(() => {
    const interval = setInterval(() => {
       setString(
           function (prevLink){
             if(prevLink===arr[0])
             {
               return arr[1];
             }
             else
             {
               return arr[0];
             }
           }
       )
    }, 2000);
    return () => clearInterval(interval);
  }, []);





  return (

     
    <div>

      <img src = {string} /> 
     
    </div>


  )

}
