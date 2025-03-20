export type CaracteristiqueType = {
    name: string;
    value: string;
  };
  
  export type ImageDetail = {
    src: string;
  };
  
  export type Logo = {
    src: string;
  };
  
  export type Moto = {
    id: number;
    name: string;
    price: string;
    img: string;
    logos: Logo[];
    subtitle: string;
    description: string;
    caracteristique: CaracteristiqueType[];
    imagesDetails: ImageDetail[];
    unitAvailable: number;
  }


  export type User = {
    id:string;
    username: string;
    email: string;
    role: string;
    carte:string;
  }