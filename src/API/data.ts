import { ICollection, IThing } from "../Interfaces/Interfaces";

const SHIRTS_VERANO: IThing[] =
    [
        {
            url: "camisa-1",
            name: "Camisa 1",
            description: "Esta camisa es chimba",
            imgs: [],
            sizes: ["M", "L", "XL"],
            colors: ["RED", "GREEN"],
            price: 1234
        },
        {
            url: "camisa-2",
            name: "Camisa 2",
            description: "Esta camisa no es chimba",
            imgs: [],
            sizes: ["M", "L", "XL"],
            colors: ["RED", "GREEN"],
            price: 1234
        },
        {
            url: "camisa-3",
            name: "Camisa 3",
            description: "Esta camisa es muy chimba",
            imgs: [],
            sizes: ["M", "L", "XL"],
            colors: ["RED", "GREEN"],
            price: 1234
        }
    ]

export const COLLECTIONS: ICollection = {
    url: "coleccion-1",
    name: "Verano",
    description: "Las manos en el ano",
    year: new Date(),
    things: SHIRTS_VERANO
}