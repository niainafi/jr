import { useUserStore } from "@/store/user";
import { useState, useEffect } from "react";

export default function UserProfilInfo() {
  const { isLoading, getMe ,user} = useUserStore();
  const [stateToken,setStateToken] = useState<string | undefined>()
  useEffect(() => {
    if(typeof window !==undefined){
      const token = localStorage.getItem("token");
      if(token){
          setStateToken(token)
      }
    }
 }, []);



  useEffect(() => {
    if(stateToken){
      
        console.log("stateToken passs",stateToken)
        getMe(stateToken)
      
    }
  },[stateToken])
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return <div>{JSON.stringify(user)}</div>;
}

