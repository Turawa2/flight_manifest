import {useEffect} from 'react'

function Checker() {
  const id = localStorage.getItem('userIdentifier')
  useEffect(()=>{
    if(!id){
        window.location.href='/'
    }
  },[id]
  );
  return id;
}

export default Checker
