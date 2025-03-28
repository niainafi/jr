"use client";
{/*
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
          {/*<p className="mt-2 text-gray-500 text-lg">Rôle: {displayedUser.role}</p>
          <p className="mt-2 text-gray-500 text-lg">Carte: <span className="font-semibold capitalize">{displayedUser.carte}</span></p>
          <p className="mt-4 text-xl font-semibold text-accent"><span className="text-gray-500 ">Votre solde Cash-Back est de:</span> {displayedUser.balance?.toLocaleString()} Ar </p>
          <p className="text-gray-400 text-sm mt-2">Membre depuis: {new Date(displayedUser.createdAt || "").toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}*/}

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

interface Transaction {
  _id: string;
  user: {
    _id: string;
    username: string;
    email: string;
  };
  amount: number;
  description: string;
  createdAt: string;
}

export default function UserProfilInfo() {
  const { isLoading, getMe, user } = useUserStore() as { user?: User; isLoading: boolean; getMe: (token: string) => void };
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoadingTransactions, setIsLoadingTransactions] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (token) {
        getMe(token);
      }
    }

    // Récupérer les transactions de l'API
    const fetchTransactions = async () => {
      try {
        const response = await fetch("https://justride.up.railway.app/api/transactions");
        const data = await response.json();
        
        // Filtrer les transactions par l'email de l'utilisateur (par exemple, 'manoa@gmail.com')
        const filteredTransactions = data.filter((transaction: Transaction) => transaction.user.email === "manoa@gmail.com");
        
        setTransactions(filteredTransactions);
      } catch (error) {
        console.error("Erreur lors de la récupération des transactions", error);
      } finally {
        setIsLoadingTransactions(false);
      }
    };

    fetchTransactions();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-full text-2xl h-[30vh] font-semibold">
        <Loading />
      </div>
    );
  }

  const defaultUser: User = {
    username: "Utilisateur inconnu",
    email: "",
    avatar: "/images/accueil/profile.webp",
    role: "Utilisateur",
    balance: 0,
    createdAt: "",
    carte: "standard",
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
          <p className="mt-2 text-gray-500 text-lg">Carte: <span className="font-semibold capitalize">{displayedUser.carte}</span></p>
          <p className="mt-4 text-xl font-semibold text-accent"><span className="text-gray-500 ">Votre solde Cash-Back est de:</span> {displayedUser.balance?.toLocaleString()} Ar </p>
          <p className="text-gray-400 text-sm mt-2">Membre depuis: {new Date(displayedUser.createdAt || "").toLocaleDateString()}</p>
        </div>

        <h3 className="text-2xl font-bold text-accent mt-8 mb-4">Transactions de {displayedUser.username}</h3>
        {isLoadingTransactions ? (
          <Loading />
        ) : (
          <div className="space-y-4">
            {transactions.length > 0 ? (
              transactions.map((transaction) => (
                <div key={transaction._id} className="p-4 bg-gray-100 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold">{transaction.description}</h4>
                  <p className="text-sm text-gray-500">Montant: {transaction.amount.toLocaleString()} Ar</p>
                  <p className="text-sm text-gray-500">Date: {new Date(transaction.createdAt).toLocaleDateString()}</p>
                </div>
              ))
            ) : (
              <p>Aucune transaction trouvée pour cet utilisateur.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
