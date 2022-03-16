import { ICollection, IShirt } from "../Interfaces/Interfaces";

const SHIRTS_VERANO: IShirt[] =
    [
        {
            name: "Camisa 1",
            description: "Esta camisa es chimba",
            imgs: [],
            sizes: ["M", "L", "XL"],
            colors: ["red", "green", "blue"],
            price: 1234
        },
        {
            name: "Camisa 2",
            description: "Esta camisa no es chimba",
            imgs: [],
            sizes: ["M", "L", "XL"],
            colors: ["red", "green", "blue"],
            price: 1234
        },
        {
            name: "Camisa 3",
            description: "Esta camisa es muy chimba",
            imgs: [],
            sizes: ["M", "L", "XL"],
            colors: ["red", "green", "blue"],
            price: 1234
        }
    ]

export const COLLECTIONS: ICollection = {
    name: "Verano",
    description: "Las manos en el ano",
    year: new Date(),
    shirts: SHIRTS_VERANO
}