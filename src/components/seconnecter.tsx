"use client";
import { useState } from "react";

export default function Seconnecter() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex justify-center items-center h-[90vh] bg-gray-100">
      <div className="bg-white py-16 px-12 shadow-2xl rounded-xl max-w-2xl w-full">
        <h2 className="text-5xl font-bold text-center mb-8">Connexion</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-6 border rounded-xl focus:ring-4 focus:ring-gray-500 focus:outline-none text-2xl"
          />
          <input
            type="password"
            name="password"
            placeholder="Mot de passe"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-6 border rounded-xl focus:ring-4 focus:ring-gray-500 focus:outline-none text-2xl"
          />
          
          <button 
            type="submit" 
            className="w-full p-6 bg-accent text-white rounded-xl hover:bg-opacity-80 transition text-2xl font-bold"
          >
            SE CONNECTER
          </button>
        </form>

        <div className="text-center mt-6">
          <a href="#" className="text-lg text-gray-600 hover:underline">Mot de passe oublié ?</a>
        </div>
      </div>
    </div>
  );
}
