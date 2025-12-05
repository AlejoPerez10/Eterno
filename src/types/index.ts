export type Product = {
    id: string
    title: string
    price: number
    shortDescription: string
    badge?: string
    sizes?: string[]
    images: string[]
    labels?: string[] // e.g. ['men','new release','last units']
}