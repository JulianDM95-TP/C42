import { IUser } from "../Interfaces/Interfaces";

const usuario1: IUser = {
    username: "martin1",
    name: "martin",
    lastname: "perez",
    collections: []
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