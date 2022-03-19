export interface IWebBasics{
    url: string;
}

export interface IUser{
  name: string
  collections: ICollection[]
}

export interface ICollection extends IWebBasics{
  name: string;
  description: string;
  year: Date;
  things: IThing[];
}

export interface IThing extends IWebBasics{
  name: string;
  description: string;
  imgs: string[];
  sizes: ShirtSize[];
  colors: ShirtColor[];
  price: number;
}

export type ShirtSize = "XXS" | "XS" | "S" | "M" | "L" | "XL" | "XXL";
export type ShirtColor = "RED" | "GREEN" | "BLUE";