export type Product = {
    id: string
    title: string
    price: number
    shortDescription: string
    badge?: string
    sizes?: string[]
    image?: string // placeholder path or url
    labels?: string[] // e.g. ['men','new release','last units']
}