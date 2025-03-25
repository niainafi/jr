export type DataFocusType = {
  id: number;
  slug: string;
  title: string;
  coverPicure: string;
  pictures: {
    src: string;
    alt: string;
  }[];
  spefification: React.ReactNode;
  description: React.ReactNode;
};
export const dataFocus: DataFocusType[] = [
  {
    id: 1,
    slug: "blouson",
    coverPicure: "/images/accueil/IMG-20250313-WA0017.webp",
    title: "RST Alpha 5 : Sécurité et Confort pour Tous les Motards",
    pictures: [
      {
        src: "/images/accueil/blouson22.jpg",
        alt: "blouson de moto",
      },
      {
        src: "/images/accueil/blousonveste.webp",
        alt: "blouson de moto",
      },
      {
        src: "/images/accueil/blousonveste.webp",
        alt: "blouson de moto",
      },
    ],
    spefification: <FocusBlousonSpecification />,
    description: <FocusBlousonDescription />,
  },
  {
    id:2,
    slug: "casque",
    coverPicure : "/images/accueil/IMG-20250313-WA0018.webp",
    title: 'CASQUE BELL LITHIUM MIPS',
    pictures: [
        {
          src: "/images/accueil/noir-mat-moto-1.webp",
          alt: "casque de moto",
        },
        {
          src: '/images/accueil/noir-mat-moto-2.webp',
          alt: "casque de moto",
        },
        {
          src: '/images/accueil/noir-mat-moto-4.webp',
          alt: "casque de moto",
        },
      ],
      spefification: <FocusCasqueSpecification />,
      description: <FocusCasqueDescription />,


  },
  {
    id:3,
    slug: "pantalon",
    coverPicure: "/images/accueil/IMG-20250313-WA0020.webp",
    title: 'RST Pantalon 5RL : Confort et Sécurité sur la Route',
    pictures: [
        {
          src: "/images/accueil/pantalondetail.jpg",
          alt: "pantalon 5RL",
        },
        {
          src: '/images/accueil/pantalon.webp',
          alt: "pantalon 5RL",
        },
        {
          src: '/images/accueil/pantalon.webp',
          alt: "pantalon 5RL",
        },
      ],
      spefification: <FocusPantalonSpecification />,
      description: <FocusPantalonDescrition />,
  },
  {
    id:4,
    slug: "belltrois",
    coverPicure: "/images/accueil/casquebell3.jpg",
    title: 'Bell Moto 3 : Le Mythe Renaît sur les Routes',
    pictures: [
        {
          src: "/images/accueil/bell.jpg",
          alt: "Casque Bell just ride",
        },
        {
          src: '/images/accueil/bell.jpg',
          alt: "Casque Bell just ride",
        },
        {
          src: '/images/accueil/bell.jpg',
          alt: "Casque Bell just ride",
        },
      ],
      spefification: <FocusBellTroisSpecification />,
      description: <FocusBellTroisDescription />,
  },
  {
    id:5,
    slug: "lumberjack",
    coverPicure:  "/images/accueil/veste.jpg",
    title: 'RST Lumberjack Reinforced : Le Style Authentique, la Sécurité Motard',
    pictures: [
        {
          src: "/images/accueil/jack.jpg",
          alt: "lumberjack just ride",
        },
        {
          src: '/images/accueil/jack.jpg',
          alt: "lumberjack just ride",
        },
        {
          src: '/images/accueil/jack.jpg',
          alt: "lumberjack just ride",
        },
      ],
      spefification: <FocusLumberJackSpecification />,
      description: <FocusLumberJackDescription />,
  }
];

function FocusCasqueSpecification(){
    return (
        <div className="space-y-6">
        <div className="text-gray-600">
            <dl className="grid grid-cols-1 md:grid-cols-2">
              <div className="flex gap-1 flex-col">
                <div className="inline space-x-1">
                  <dt className="font-bold">{`TYPE DE CASQUE :`}</dt>
                  <dd>{`Intégral`}</dd>
                </div>

                <div className="inline space-x-1">
                  <dt className="font-bold">{`VERNIS DE PROTECTION :`}</dt>
                  <dd>{`Mat`}</dd>
                </div>

                <div className="inline space-x-1">
                  <dt className="font-bold">{`FERMETURE :`}</dt>
                  <dd>{`Boucle double D`}</dd>
                </div>

                <div className="inline space-x-1">
                  <dt className="font-bold">{`COQUE :`}</dt>
                  <dd>{`Polycarbonate / AES`}</dd>
                </div>
                
                

                <div className="inline space-x-1">
                  <dt className="font-bold">{`TAILLES DE COQUES :`}</dt>
                  <dd>{`CALOTINS: MIPS®`}</dd>
                </div>
                <div className="flex gap-1">
                  <dt className="font-bold block">{`ÉCRAN :`}</dt>
                  <div>
                    <dd className="block">{`Incolore`}</dd>
                    <dd className="block">{`Pinlock ready`}</dd>
                    <dd className="block">{`Optique de classe 1`}</dd>
                    <dd className="block">{`Démontage sans outil`}</dd>
                  </div>
                </div>
              </div>


              <div className="flex gap-1 flex-col">
                <div className="inline space-x-1">
                  <dt className="font-bold">{`SYSTÈME DE VENTILATION :`}</dt>
                  <dd>{`Réglable`}</dd>
                </div>

                <div className="inline space-x-1">
                  <dt className="font-bold">{`ÉCRAN SOLAIRE RÉTRACTABLE :`}</dt>
                  <dd>{`Fumé`}</dd>
                </div>

                <div className="flex gap-1">
                  <dt className="font-bold block">{`INTÉRIEUR :`}</dt>
                  <div>
                    <dd className="block">{`Démontable et lavable`}</dd>
                    <dd className="block">{`Anti-bactérien ionici™`}</dd>
                  </div>
                </div>

                <div className="inline space-x-1">
                  <dt className="font-bold">{`ESPACE PRÉVU POUR LES ÉCOUTEURS DES INTERCOM : `}</dt>
                  <dd>{`Oui`}</dd>
                </div>

                <div className="inline space-x-1">
                  <dt className="font-bold">{`HOMOLOGATION : `}</dt>
                  <dd>{`ECE 22 Ø6`}</dd>
                </div>

                <div className="inline space-x-1">
                  <dt className="font-bold">{`ACCESSOIRES FOURNIS : `}</dt>
                  <dd>{`Écran anti-buée Pinlock Incolore`}</dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
    )
}
function FocusCasqueDescription(){
    return (
        <div className="flex flex-col md:flex-row gap-10 items-start">
        <div className="w-full space-y-6">
          <h2 className="text-2xl font-bold inline space-x-1">
            <span>{`BELL LITHIUM MIPS`}</span>
            <span>
              {`Mais c'est quoi ce MIPS`} ?
            </span>
          </h2>

          <div className="space-y-6">
            <p>
              {`Les motards recherchent toujours le meilleur en matière de
              sécurité et de confort. Aujourd’hui, Just Ride vous propose le
              casque Bell Lithium MIPS. Mais avant tout, c’est quoi le MIPS ?`}
            </p>

            
              <p>
                {`Le MIPS, ou Système de Protection Multi-directionnelle
                Une technologie qui réduit les forces de rotation en cas
                d’impact oblique, offrant une protection supplémentaire à la
                tête.`}
              </p>
            

            <h3 className="text-2xl font-bold">
              {`Bell Lithium MIPS : La Référence`}
            </h3>
            <p>
              {`Le Bell Lithium MIPS combine sécurité et confort. Avec son design
              soigné, il intègre le MIPS pour réduire les risques de lésions en
              cas de choc.`}
            </p>

            <h3 className="text-2xl font-bold">{`Confort et Ventilation`}</h3>
            <p>
              {`Ce casque ne se contente pas d’être sécuritaire. Il offre aussi un
              confort optimal grâce à une bonne ventilation, idéale pour les
              trajets longs ou sous chaleur.`}
            </p>

            <p>
              {`Le Bell Lithium MIPS est un excellent choix pour allier sécurité
              et confort sans compromis. Prêt à rouler en toute confiance ? Le
              Bell Lithium MIPS est là pour toi, il t’attend en Boutique.`}
            </p>
          </div>


          <p>
            {`Les motards recherchent toujours le meilleur en matière de
            sécurité et de confort. Aujourd’hui, Just Ride vous propose le
            casque Bell Lithium MIPS. Mais avant tout, c’est quoi le MIPS ?`}
          </p>

          <p>
            {`Le MIPS, ou Système de Protection Multi-directionnelle,
            est une technologie qui réduit les forces de rotation en cas
            d’impact oblique, offrant une protection supplémentaire à la
            tête.`}
          </p>

          <h3 className="text-2xl font-bold">{`Bell Lithium MIPS : La Référence`}</h3>
          <p>
            {`Le Bell Lithium MIPS combine sécurité et confort. Avec son design
            soigné, il intègre le MIPS pour réduire les risques de lésions en
            cas de choc.`}
          </p>

          <h3 className="text-2xl font-bold">{`Confort et Ventilation`}</h3>
          <p>
            {`Ce casque ne se contente pas d’être sécuritaire. Il offre aussi un
            confort optimal grâce à une bonne ventilation, idéale pour les
            trajets longs ou sous chaleur.`}
          </p>

          <p>
            {`Le Bell Lithium MIPS est un excellent choix pour allier sécurité
            et confort sans compromis. Prêt à rouler en toute confiance ? Le
            Bell Lithium MIPS est là pour toi, il t’attend en Boutique.`}
          </p>
        </div>
      </div>
    )
}

function FocusBlousonSpecification() {
  return (
    <div className="text-gray-600">
      <div className="flex gap-1">
        <p>
          Quand on roule à moto, une bonne veste est essentielle pour allier
          protection et confort. La{" "}
          <span className="font-bold"> RST Alpha 5</span> est conçue pour offrir
          aux motards une sécurité optimale sans négliger le style et la
          praticité.
        </p>
      </div>
    </div>
  );
}

function FocusBlousonDescription() {
  return (
    <div className="w-full space-y-6">
      <h2 className="text-2xl font-bold inline space-x-1">
        <span>{`Protection et Résistance`}</span>
        <span>{``} ?</span>
      </h2>

      <div className="space-y-6">
        <p>
          {`Fabriquée avec des matériaux robustes, cette veste assure une excellente résistance à l’abrasion en cas de chute. Ses protections intégrées aux épaules et aux coudes offrent une sécurité renforcée, tout en restant légères et confortables à porter.`}
        </p>

        <h3 className="text-2xl font-bold">{`Confort au Quotidien`}</h3>
        <p>
          {`Pensée pour s’adapter à toutes les conditions, la RST Alpha 5 est équipée d’une doublure thermique amovible et d’un système de ventilation efficace, idéal pour rouler par tous les temps. Ses ajustements au niveau des poignets, de la taille et du col garantissent une coupe ajustée et agréable.`}
        </p>

        <h3 className="text-2xl font-bold">
          {`Un Choix Idéal pour les Motards`}
        </h3>
        <p>
          {`Avec son design moderne et ses finitions soignées, la RST Alpha 5 est une veste qui combine sécurité, confort et praticité. Que ce soit pour un trajet quotidien ou une longue balade, elle vous accompagne avec style et fiabilité.`}
        </p>

        <p className="mt-20">
          {`Prêt à rouler en toute sérénité ? La RST Alpha 5 est là pour vous !`}
        </p>
      </div>
    </div>
  );
}

function FocusPantalonSpecification(){
    return(
        <div className="text-gray-600">
          
          <div className="flex gap-1">
               <p>Pour rouler en toute sérénité, un bon équipement est indispensable. Le <span className="font-bold">RST Pantalon 5RL</span> est conçu pour offrir aux motards une protection optimale sans sacrifier le confort.</p>               </div>
          </div>
    )
}

function FocusPantalonDescrition(){
    return (
        <div className="space-y-6">
                  <h2 className="text-2xl font-bold inline space-x-1">
            <span>{`Protection et Résistance`}</span>
             <span>
               {``} ?
             </span>
          </h2>

           <div className="space-y-6">
            <p>
              {`Fabriqué en textile haute résistance, ce pantalon est équipé de protections renforcées aux genoux et aux hanches. Sa conception robuste assure une excellente résistance à l’abrasion en cas de chute, tout en restant souple pour ne pas gêner les mouvements.`}
            </p>

             <h3 className="text-2xl font-bold">
               {`Confort et Adaptabilité`}
             </h3>
             <p>
                 {`Avec sa doublure thermique amovible et ses aérations stratégiquement placées, le RST 5RL s’adapte à toutes les saisons. Son système d’ajustement à la taille et aux chevilles garantit un maintien parfait, que ce soit pour un trajet quotidien ou une longue virée.`}
              </p>
            

            <h3 className="text-2xl font-bold">
              {`Un Pantalon Polyvalent`}
             </h3>
             <p className="">
               {`Pensé pour s’associer à une veste de moto, il est doté d’un zip de raccordement pour une protection encore plus efficace. Son design discret et moderne le rend aussi pratique`}
             </p>

         </div>
        </div>
    )
}

function FocusBellTroisSpecification(){
    return(
        <div className="text-gray-600">
            
        <div className="">
        <p>Certains casques sont simplement iconiques. <span className="font-bold">Le Bell Moto 3 </span>,{` c’est un bout d’histoire du tout-terrain, un symbole des belles années du motocross et de l’adrénaline pure. Né dans les années 70, il a protégé les têtes des plus grands pilotes, traversé les époques et revient aujourd’hui avec un look rétro intact, mais avec des matériaux et une sécurité aux standards actuels.`}</p><br/>
        <p>Coque en <span className="font-bold">fibre composite ultra-légère</span>, intérieur en <span className="font-bold">mousse EPS à densité multiple</span>, une <span className="font-bold">ventilation optimisée</span> et une visière réglable typique des casques cross old-school… Tout est là ! Que tu roules en scrambler, en enduro ou en vintage, le <span className="font-bold">Bell Moto 3</span> est le casque parfait pour les puristes et les nostalgiques du tout-terrain old school.<span className="font-bold"> Enfile-le, démarre ta bécane et ride comme une légende !</span></p>
        </div>

        </div>
    )
}
function FocusBellTroisDescription(){
    return(
        <div className="space-y-6">
          <h2 className="text-2xl font-bold inline space-x-1">
            <span>{`Bell Moto 3`}</span>
            <span>
              {``}
            </span>
          </h2>

          <div className="space-y-6">
            {/* <p>
              {`Les motards recherchent toujours le meilleur en matière de
              sécurité et de confort. Aujourd’hui, Just Ride vous propose le
              casque Bell Lithium MIPS. Mais avant tout, c’est quoi le MIPS ?`}
            </p>

            
              <p>
                {`Le MIPS, ou Système de Protection Multi-directionnelle
                Une technologie qui réduit les forces de rotation en cas
                d’impact oblique, offrant une protection supplémentaire à la
                tête.`}
              </p>
            

            <h3 className="text-2xl font-bold">
              {`Bell Lithium MIPS : La Référence`}
            </h3>
            <p>
              {`Le Bell Lithium MIPS combine sécurité et confort. Avec son design
              soigné, il intègre le MIPS pour réduire les risques de lésions en
              cas de choc.`}
            </p>

            <h3 className="text-2xl font-bold">{`Confort et Ventilation`}</h3>
            <p>
              {`Ce casque ne se contente pas d’être sécuritaire. Il offre aussi un
              confort optimal grâce à une bonne ventilation, idéale pour les
              trajets longs ou sous chaleur.`}
            </p>

            <p>
              {`Le Bell Lithium MIPS est un excellent choix pour allier sécurité
              et confort sans compromis. Prêt à rouler en toute confiance ? Le
              Bell Lithium MIPS est là pour toi, il t’attend en Boutique.`}
            </p> */}
          </div>
        </div>
    )
}

function FocusLumberJackSpecification(){
    return(
        <div className="text-gray-600">
            
              <div className="">
              <p>Tu aimes le style bûcheron, mais pas question de négliger ta sécurité à moto ? La <span className="font-bold">RST Lumberjack Reinforced</span> est la chemise qu’il te faut ! Avec son look intemporel en flanelle à carreaux, elle passe partout, en ville comme sur la route, tout en cachant une vraie protection.</p>
              <p>Sous son apparence décontractée, elle intègre une doublure en <span className="font-bold">aramide ultra-résistant</span> et des <span className="font-bold">protections CE aux coudes et aux épaules</span>, pour rouler en toute confiance. Confortable, respirante et plus légère qu’un blouson classique, elle est parfaite pour les beaux jours et s’adapte à toutes tes sorties à moto.</p>
              <p className="font-bold">{`La RST Lumberjack, c’est l’alliance parfaite entre authenticité et sécurité. Adopte le look bûcheron sans compromis !`}</p>
              </div>

              </div>
    )
}

function FocusLumberJackDescription(){
    return (
        <div className=" space-y-6">
        <h2 className="text-2xl font-bold inline space-x-1">
          <span>{`RST Lumberjack Reinforced`}</span>
          <span>
            {} ?
          </span>
        </h2>

        <div className="space-y-6 min-h-[30rem]">
          {/* <p>
            {`Les motards recherchent toujours le meilleur en matière de
            sécurité et de confort. Aujourd’hui, Just Ride vous propose le
            casque Bell Lithium MIPS. Mais avant tout, c’est quoi le MIPS ?`}
          </p>

          
            <p>
              {`Le MIPS, ou Système de Protection Multi-directionnelle
              Une technologie qui réduit les forces de rotation en cas
              d’impact oblique, offrant une protection supplémentaire à la
              tête.`}
            </p> */}
          

          {/* <h3 className="text-2xl font-bold">
            {`Bell Lithium MIPS : La Référence`}
          </h3>
          <p>
            {`Le Bell Lithium MIPS combine sécurité et confort. Avec son design
            soigné, il intègre le MIPS pour réduire les risques de lésions en
            cas de choc.`}
          </p>

          <h3 className="text-2xl font-bold">{`Confort et Ventilation`}</h3>
          <p>
            {`Ce casque ne se contente pas d’être sécuritaire. Il offre aussi un
            confort optimal grâce à une bonne ventilation, idéale pour les
            trajets longs ou sous chaleur.`}
          </p>

          <p>
            {`Le Bell Lithium MIPS est un excellent choix pour allier sécurité
            et confort sans compromis. Prêt à rouler en toute confiance ? Le
            Bell Lithium MIPS est là pour toi, il t’attend en Boutique.`}
          </p> */}
        </div>
      </div>
    )
}