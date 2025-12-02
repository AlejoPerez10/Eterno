import type { Product } from '../types'

export const menProducts: Product[] = [
    {
        id: 'men-1',
        title: 'Camisa Blanca',
        price: 65,
        shortDescription: 'Streatwear blanca comoda.',
        badge: 'NEW', // O 'BEST' o undefined
        sizes: ['S', 'M', 'L', 'XL'],
        image: '/t-shirts-men/camisa_blanca.webp', // Tu ruta de imagen
        labels: ['men', 'new release']
    },
    {
        id: 'men-2',
        title: 'Camisa Beige',
        price: 70,
        shortDescription: 'Oversize beige ligera.',
        badge: undefined,
        sizes: ['M', 'L'],
        image: '/t-shirts-men/camisa_cafe.webp',
        labels: ['men']
    },
    {
        id: 'men-3',
        title: 'Camisa Negra',
        price: 70,
        shortDescription: 'Diseño en negro limpio.',
        badge: undefined,
        sizes: ['M', 'L'],
        image: '/t-shirts-men/camisa_negra.webp',
        labels: ['men']
    },
    {
        id: 'men-4',
        title: 'Camisa Blanca',
        price: 65,
        shortDescription: 'Streatwear blanca comoda.',
        badge: 'NEW', // O 'BEST' o undefined
        sizes: ['S', 'M', 'L', 'XL'],
        image: '/t-shirts-men/camisa_blanca.webp', // Tu ruta de imagen
        labels: ['men', 'new release']
    },
    {
        id: 'men-5',
        title: 'Camisa Beige',
        price: 70,
        shortDescription: 'Oversize beige ligera.',
        badge: undefined,
        sizes: ['M', 'L'],
        image: '/t-shirts-men/camisa_cafe.webp',
        labels: ['men']
    },
    {
        id: 'men-6',
        title: 'Camisa Negra',
        price: 70,
        shortDescription: 'Diseño en negro limpio.',
        badge: undefined,
        sizes: ['M', 'L'],
        image: '/t-shirts-men/camisa_negra.webp',
        labels: ['men']
    },
    {
        id: 'men-7',
        title: 'Camisa Blanca',
        price: 65,
        shortDescription: 'Streatwear blanca comoda.',
        badge: 'NEW', // O 'BEST' o undefined
        sizes: ['S', 'M', 'L', 'XL'],
        image: '/t-shirts-men/camisa_blanca.webp', // Tu ruta de imagen
        labels: ['men', 'new release']
    },
    {
        id: 'men-8',
        title: 'Camisa Beige',
        price: 70,
        shortDescription: 'Oversize beige ligera.',
        badge: undefined,
        sizes: ['M', 'L'],
        image: '/t-shirts-men/camisa_cafe.webp',
        labels: ['men']
    },
    {
        id: 'men-9',
        title: 'Camisa Negra',
        price: 70,
        shortDescription: 'Diseño en negro limpio.',
        badge: undefined,
        sizes: ['M', 'L'],
        image: '/t-shirts-men/camisa_negra.webp',
        labels: ['men']
    },
];

export const womenProducts: Product[] = Array.from({length: 6}).map((_, i) => ({
    id: `women-${i+1}`,
    title: `Eterno Women Tee ${i+1}`,
    price: 55 + i * 6,
    shortDescription: 'Soft fit for daily wear.',
    sizes: ['XS','S','M','L'],
    image: `/t-shirts-women/camisa_cafe_mujer.webp`,
    labels: ['women']
}))

export const capsProducts: Product[] = [
    {
        id: 'cap-1',
        title: 'Gorra Blanca',
        price: 35,
        shortDescription: 'Tipo beisbolera con malla Essentials.',
        sizes: ['7', '7⅛'],
        image: '/caps/gorra_blanca.webp',
        labels: ['caps']
    },
    {
        id: 'cap-2',
        title: 'Gorra Café/Verde',
        price: 35,
        shortDescription: 'Tipo beisbolera con logo Essentials.',
        sizes: ['7', '7⅛', '7¼'], // Si no aplica
        image: '/caps/gorra_cafe_verde.webp',
        labels: ['caps']
    },
    {
        id: 'cap-3',
        title: 'Gorra Negra',
        price: 35,
        shortDescription: 'Tipo fifty logo Essentials gris.',
        sizes: ['7', '7⅜'], // Si no aplica
        image: '/caps/gorra_negra_logo_gris.webp',
        labels: ['caps']
    },
    {
        id: 'cap-4',
        title: 'Gorra Negra/Verde',
        price: 35,
        shortDescription: 'Tipo fifty teja verde logo Essentials.',
        sizes: ['7', '7⅛', '7¼'], // Si no aplica
        image: '/caps/gorra_negra_verde.webp',
        labels: ['caps']
    },
    {
        id: 'cap-5',
        title: 'Gorra Negra',
        price: 35,
        shortDescription: 'Tipo beisbolera fifty logo dorado.',
        sizes: ['7', '7⅛'], // Si no aplica
        image: '/caps/gorra_negra.webp',
        labels: ['caps']
    },
];
