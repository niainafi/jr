import { Moto } from "@/types/types";

export const data : Moto[] = [
    { 
      id: 1,
      name: "HIMALAYAN 450", 
      price: "$500", 
      img: "/images/just-rent/himalayna-450.png",
      logos: [
        {
          src: "/images/just-rent/300ppi/himalayan.png",
        },
        {
          src: "/images/just-rent/classic-500-logo.png",
        }
      ],
      subtitle: `L'aventure sans limite à Madagascar`,
      description: `Taillée pour l'exploration, la Himalayan 450 est la moto idéale pour affronter les routes variées de Madagascar.
      Que ce soit sur les sentiers accidentés des Hautes Terres, les pistes sablonneuses du littoral ou les routes sinueuses des forêts tropicales, cette aventurière robuste offre un parfait équilibre entre puissance, confort et maniabilité.
      Son moteur fiable de 450cc, sa suspension adaptée aux terrains difficiles et son autonomie impressionnante en font la compagne idéale pour les baroudeurs et amateurs de sensations fortes.`,
      caracteristique: [
        {
          name: "Tableau de bord",
          value: "Écran TFT 4",
        },
        {
          name: 'Navigation',
          value: 'Cartographe',
        },
       {
          name: "Réservoir",
          value: "17 L",
        }, 
        {
          name: "Vitesse",
          value: "6 rapports",
        }, 
        {
          name: "Suspension",
          value: "Fourche inversée",
        }, 
        
      ],
      imagesDetails: [
        {
          src: "/images/just-rent/450-1.jpg",
        },
        {
          src: "/images/just-rent/450-3.jpg",
        },
        {
          src: "/images/just-rent/450-4.jpg",
        },
      ],
      unitAvailable: 10
    },
    { 
      id: 2, 
      name: "HIMALAYAN 410", 
      price: "$700", 
      img: "/images/just-rent/himalayan-410.png" ,
      logos: [
        {
          src: "/images/just-rent/logo-just-rent.png",
        },
        {
          src: "/images/just-rent/logo-just-rent.png",
        }
      ],
      subtitle: `410cc - L'aventure à portée de main`,
      description: `Prête à explorer tous les recoins de Madagascar, la 410cc est un véritable compagnon pour les aventuriers en quête de découvertes. Grâce à son moteur dynamique et sa maniabilité hors pair, cette moto permet de traverser les paysages variés de l'île avec aisance. Que ce soit sur les pistes poussiéreuses de la brousse ou sur les routes montagneuses, sa suspension robuste et son faible poids offrent une expérience de conduite agréable et sûre. Facile à contrôler, elle est idéale pour ceux qui recherchent une moto à la fois performante et accessible.`,
      caracteristique: [
        {
          name: "Réservoir",
          value: "15 L",
        },
        {
          name: 'Fourche téléhydraulique',
          value: '41mm',
        },
       {
          name: "ABS",
          value: "Déconnectable",
        }, 
        {
          name: "Pneu avant",
          value: "21 pouces",
        }, 
        {
          name: "Boites de vitesse",
          value: "5 rapports",
        }, 
        
      ],
      imagesDetails: [
        
        {
          src: "/images/just-rent/himalayan1-411.jpg",
        },
        {
          src: "/images/just-rent/himalayan2-411.jpg",
        },
        {
          src: "/images/just-rent/himalayan3-411.jpg",
        },
      ],
      unitAvailable: 1
    },
    { id: 3, 
      name: "CLASSIC 500", 
      price: "$900", 
      img: "/images/just-rent/classic-500.png" ,
      logos: [
        {
          src: "/images/just-rent/logo-just-rent.png",
        },
        {
          src: "/images/just-rent/logo-just-rent.png",
        }
      ],
      subtitle: `500cc - Puissance et exploration sans compromis`,
      description: `La 500cc est la moto parfaite pour ceux qui souhaitent repousser leurs limites. Dotée d’un moteur puissant et d’une conception solide, elle est prête à affronter les terrains les plus exigeants de Madagascar. De la montée des hauts plateaux aux traversées des routes accidentées, cette moto vous offre une puissance constante, même dans les conditions les plus difficiles. Sa suspension de qualité supérieure garantit confort et stabilité, tandis que son design agile permet de s’aventurer avec confiance dans les espaces les plus reculés. Pour les passionnés de sensations fortes, la 500cc est l'outil de choix pour une aventure inoubliable.`,
      caracteristique: [
        {
          name: "Réservoir",
          value: "13.5L",
        },
        {
          name: 'Fourche téléhydraulique',
          value: '35mm',
        },
       {
          name: "Consommation",
          value: "3L/100m",
        }, 
        {
          name: "Boites de vitesse",
          value: "5 rapports",
        }, 
        {
          name: "Look intemporel ",
          value: "",
        }, 
        
      ],
      imagesDetails: [
        {
          src: "/images/just-rent/classic1.jpg",
        },
        {
          src: "/images/just-rent/classic2.jpg",
        },
        {
          src: "/images/just-rent/classic3.jpg",
        },
      ],
      unitAvailable: 4
    },
  ];