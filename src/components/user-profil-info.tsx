"use client";
// import { useUserStore } from "@/store/user";
// import { useState, useEffect } from "react";

// export default function UserProfilInfo() {
//   const { isLoading, getMe ,user} = useUserStore();
//   const [stateToken,setStateToken] = useState<string | undefined>()
//   useEffect(() => {
//     if(typeof window !==undefined){
//       const token = localStorage.getItem("token");
//       if(token){
//           setStateToken(token)
//       }
//     }
//  }, []);



//   useEffect(() => {
//     if(stateToken){
      
//         console.log("stateToken passs",stateToken)
//         getMe(stateToken)
      
//     }
//   },[stateToken])
//   if (isLoading) {
//     return <div>Loading...</div>;
//   }
//   return <div>

//   </div>;
// }


import { useUserStore } from "@/store/user";
import { useState, useEffect } from "react";
import Loading from "./ui/loading";

interface User {
  username: string;
  email: string;
  avatar?: string;
  role?: string;
  balance?: number;
  createdAt?: string;
  carte?: string;
}


export default function UserProfilInfo() {
  const { isLoading, getMe, user } = useUserStore() as { user?: User; isLoading: boolean; getMe: (token: string) => void };
  

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      console.log("token", token);

      if (token) {
        getMe(token);
        
      }
    }
  }, []);


  if (isLoading) {
    return(
      <div className="flex justify-center items-center w-full text-2xl h-[30vh]  font-semibold">
      <Loading />
    </div>
    )
  }

  const defaultUser: User = {
    username: "Utilisateur inconnu",
    email: "",
    avatar: "/images/accueil/profile.webp",
    role: "Utilisateur",
    balance: 0,
    createdAt: "",
    carte: "standard"
  };
  const displayedUser = user ?? defaultUser;

  return (
    <div className="flex items-center justify-center bg-white p-6">
      <div className="w-full max-w-2xl p-10 bg-white shadow-2xl rounded-3xl border border-gray-300">
        <h2 className="text-3xl font-bold text-accent text-center mb-6">Profil Utilisateur</h2>
        <div className="text-center">
          <img
            src={displayedUser.avatar || "/images/accueil/profile.webp"}
            alt="Avatar"
            className="w-40 h-40 mx-auto rounded-full border-4 border-accent shadow-lg"
          />
          <h3 className="mt-6 text-2xl font-semibold text-gray-900">{displayedUser.username}</h3>
          <p className="text-gray-600 text-lg">{displayedUser.email}</p>
          {/*<p className="mt-2 text-gray-500 text-lg">Rôle: {displayedUser.role}</p>*/}
          <p className="mt-2 text-gray-500 text-lg">Carte: <span className="font-semibold capitalize">{displayedUser.carte}</span></p>
          <p className="mt-4 text-xl font-semibold text-accent"><span className="text-gray-500 ">Votre solde Cash-Back est de:</span> {displayedUser.balance?.toLocaleString()} Ar </p>
          <p className="text-gray-400 text-sm mt-2">Membre depuis: {new Date(displayedUser.createdAt || "").toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}