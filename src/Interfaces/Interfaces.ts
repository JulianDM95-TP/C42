export interface ICollection{
    name: string
    description: string
    year: Date
    shirts: IShirt[]
}

export interface IShirt{
    name: string
    description: string
    imgs: string[]
    sizes: string[]
    colors: string[]
    price: number
}