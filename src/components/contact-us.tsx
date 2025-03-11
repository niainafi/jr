"use client";

import { useState } from "react";


export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="max-w-5xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-14 text-center sm:text-left">NOUS-CONTACTER</h2>
      <div className="flex flex-col sm:flex-row gap-10 sm:gap-20 justify-between">
        {/* Formulaire */}
        <form onSubmit={handleSubmit} className="flex-1 space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-gray-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-gray-500"
          />
          <input
            type="text"
            name="subject"
            placeholder="Sujet"
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-gray-500"
          />
          <textarea
            name="message"
            placeholder="Votre message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg h-32 resize-none focus:ring-2 focus:ring-gray-500"
          />
          <div className="sm:col-span-2 flex justify-end">
          <button type="submit" className="mt-4 bg-accent text-white py-3 px-6 rounded-lg hover:accent transition">
            ENVOYER
          </button>
        </div>
        </form>
        
      
      </div>
    </div>
  );
}
