import { ICollection, IUser } from "../Interfaces/Interfaces";

const asd : ICollection = {
    name: "Verano",
    description: "Manos en el ano",
    year: new Date(),
    things: [],
    url: "verano"
}

const asd2 : ICollection = {
    name: "Invierno",
    description: "Que frio",
    year: new Date(),
    things: [],
    url: "invierno"
}

const usuario1: IUser = {
    username: "martin1",
    name: "martin",
    lastname: "perez",
    collections: [asd2, asd,asd,asd,asd]
}

const usuario2: IUser = {
    username: "jose1",
    name: "joselito",
    lastname: "Martinez",
    collections: []
}
const usuario3: IUser = {
    username: "lopez1",
    name: "maria",
    lastname: "Lopez",
    collections: []
}

export const USERS_HARDCODED: IUser[] = [usuario1, usuario2, usuario3]  