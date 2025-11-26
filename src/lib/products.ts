import type { Product } from '../types'

export const menProducts: Product[] = Array.from({length: 8}).map((_, i) => ({
    id: `men-${i+1}`,
    title: `Eterno Men Tee ${i+1}`,
    price: 49 + i * 5,
    shortDescription: 'Minimal premium cotton tee.',
    badge: i === 0 ? 'BEST' : i === 1 ? 'NEW' : undefined,
    sizes: ['S','M','L','XL'],
    image: `/modelo_gorra_negra_verde.jpg`, // <-- replace with your asset; keep path or change
    labels: i % 3 === 0 ? ['men','new release'] : ['men']
}))

export const womenProducts: Product[] = Array.from({length: 6}).map((_, i) => ({
    id: `women-${i+1}`,
    title: `Eterno Women Tee ${i+1}`,
    price: 55 + i * 6,
    shortDescription: 'Soft fit for daily wear.',
    sizes: ['XS','S','M','L'],
    image: `/woman.jpg`,
    labels: ['women']
}))

export const capsProducts: Product[] = Array.from({length: 6}).map((_, i) => ({
    id: `cap-${i+1}`,
    title: `Eterno Cap ${i+1}`,
    price: 29 + i * 3,
    shortDescription: 'Minimal cap with embroidered logo.',
    image: `/gorra_negra_verde.jpg`,
    labels: ['hats & caps']
}))
