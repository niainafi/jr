/*import emailjs from "@emailjs/browser";

export const sendEmail = async (formRef) => {
  if (!formRef.current) return { success: false, message: "❌ Formulaire non trouvé." };

  try {
    const response = await emailjs.sendForm(
      "service_uynssi5",  // 🔥 Remplace par ton Service ID
      "emplate_id2orp9",  // 🔥 Remplace par ton Template ID
      formRef.current,
      "m5HSHEwIFpginPQvC"  // 🔥 Remplace par ta Public Key
    );

    if (response.status === 200) {
      formRef.current.reset(); // Réinitialise le formulaire après l'envoi
      return { success: true, message: "✅ Votre message a bien été envoyé !" };
    }
  } catch (error) {
    console.error("❌ Erreur lors de l'envoi de l'e-mail :", error);
    return { success: false, message: "❌ Erreur lors de l'envoi du message." };
  }
};
*/

