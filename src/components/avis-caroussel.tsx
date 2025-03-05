export default function AvisConditions() {
  const reviews = [
    {
      name: "RAKOTO",
      text: "Je roule avec la Himalayan 450 depuis quelques mois sur les routes de Madagascar, et c'est un vrai bijou !...",
      rating: 5,
    },
    {
      name: "JEAN H",
      text: "Enfin une moto adaptée à Madagascar ! Je fais souvent la route Tana-Majunga, et la Himalayan 450 est parfaite pour ça...",
      rating: 5,
    },
    {
      name: "SOLO",
      text: "J’ai testé pas mal de motos sur les pistes du Sud, et la Himalayan 450 est la meilleure option que j’ai trouvée...",
      rating: 5,
    },
    {
      name: "MARC",
      text: "Une moto idéale pour les longs trajets, solide et fiable...",
      rating: 5,
    },
    {
      name: "LUC",
      text: "Très satisfait de cette moto, elle passe partout !...",
      rating: 5,
    },
    {
      name: "PAUL",
      text: "Le confort de conduite est exceptionnel...",
      rating: 5,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Section Avis */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-left">AVIS</h2>
        <div className="grid grid-cols-3 gap-6 px-4">
          {reviews.slice(0, 3).map((review, index) => (
            <div key={index} className="p-4 flex flex-col items-center text-center bg-gray-100 rounded-lg shadow-md h-full text-sm">
              <div className="w-16 h-16 overflow-hidden rounded-full mb-2">
                <img
                  src="/images/photos/focus1.jpg"
                  alt="img-focus"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-md font-semibold border-b-2 border-yellow-500 inline-block mb-2">{review.name}</h3>
              <p className="text-gray-700 mb-2 text-xs leading-relaxed">{review.text}</p>
              <div className="flex space-x-1">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-500 text-sm">★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section Conditions */}
      <section className="mt-6">
        <h2 className="text-2xl font-bold mb-4">CONDITIONS</h2>
        <p className="text-gray-700 mb-4">
          Le locataire doit être âgé d’au moins 21 ans et détenir un permis de conduire valide depuis au moins 2 ans. Une pièce
          d’identité en cours de validité doit être présentée lors de la signature du contrat.
        </p>
        <h3 className="text-lg font-semibold mt-4">Utilisation de la Moto</h3>
        <p className="text-gray-700 mb-4">
          La moto doit être utilisée conformément aux règles du Code de la route et des règlements de location.
        </p>
        <h3 className="text-lg font-semibold mt-4">Assurance et Responsabilités</h3>
        <p className="text-gray-700">
          L’assurance couvre uniquement la responsabilité civile. Tout dommage causé par une mauvaise utilisation sera à la charge
          du locataire.
        </p>
      </section>
      
      <p className="text-sm text-gray-600 mt-6 text-right">Télécharger en PDF | Voir la suite ▶</p>
    </div>
  );
}
