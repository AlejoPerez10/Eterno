import type { Product } from '../types'

export const menProducts: Product[] = [
    {
        id: 'men-1',
        title: 'Camisa Blanca',
        price: 65,
        shortDescription: 'Streatwear blanca comoda.',
        badge: 'NEW', // O 'BEST' o undefined
        sizes: ['S', 'M', 'L', 'XL'],
        images: ['/t-shirts-men/camisa_blanca.webp', '/t-shirts-men/camisa_blanca1.webp', '/t-shirts-men/camisa_cafe.webp'],
        labels: ['men', 'new release']
    },
    {
        id: 'men-2',
        title: 'Camisa Beige',
        price: 70,
        shortDescription: 'Oversize beige ligera.',
        badge: undefined,
        sizes: ['M', 'L'],
        images: ['/t-shirts-men/camisa_cafe.webp', '/t-shirts-men/camisa_cafe1.webp', '/t-shirts-men/camisa_negra.webp'],
        labels: ['men']
    },
    {
        id: 'men-3',
        title: 'Camisa Negra',
        price: 70,
        shortDescription: 'Diseño en negro limpio.',
        badge: undefined,
        sizes: ['M', 'L'],
        images: ['/t-shirts-men/camisa_negra.webp', '/t-shirts-men/camisa_negra1.webp', '/t-shirts-men/camisa_blanca.webp'],
        labels: ['men']
    },
    {
        id: 'men-4',
        title: 'Camisa Blanca',
        price: 65,
        shortDescription: 'Streatwear blanca comoda.',
        badge: 'NEW', // O 'BEST' o undefined
        sizes: ['S', 'M', 'L', 'XL'],
        images: ['/t-shirts-men/camisa_blanca.webp', '/t-shirts-men/camisa_blanca1.webp', '/t-shirts-men/camisa_cafe.webp'],
        labels: ['men', 'new release']
    },
    {
        id: 'men-5',
        title: 'Camisa Beige',
        price: 70,
        shortDescription: 'Oversize beige ligera.',
        badge: undefined,
        sizes: ['M', 'L'],
        images: ['/t-shirts-men/camisa_cafe.webp', '/t-shirts-men/camisa_cafe1.webp', '/t-shirts-men/camisa_negra.webp'],
        labels: ['men']
    },
    {
        id: 'men-6',
        title: 'Camisa Negra',
        price: 70,
        shortDescription: 'Diseño en negro limpio.',
        badge: undefined,
        sizes: ['M', 'L'],
        images: ['/t-shirts-men/camisa_negra.webp', '/t-shirts-men/camisa_negra1.webp', '/t-shirts-men/camisa_blanca.webp'],
        labels: ['men']
    },
    {
        id: 'men-7',
        title: 'Camisa Blanca',
        price: 65,
        shortDescription: 'Streatwear blanca comoda.',
        badge: 'NEW', // O 'BEST' o undefined
        sizes: ['S', 'M', 'L', 'XL'],
        images: ['/t-shirts-men/camisa_blanca.webp', '/t-shirts-men/camisa_blanca1.webp', '/t-shirts-men/camisa_cafe.webp'],
        labels: ['men', 'new release']
    },
    {
        id: 'men-8',
        title: 'Camisa Beige',
        price: 70,
        shortDescription: 'Oversize beige ligera.',
        badge: undefined,
        sizes: ['M', 'L'],
        images: ['/t-shirts-men/camisa_cafe.webp', '/t-shirts-men/camisa_cafe1.webp', '/t-shirts-men/camisa_negra.webp'],
        labels: ['men']
    },
    {
        id: 'men-9',
        title: 'Camisa Negra',
        price: 70,
        shortDescription: 'Diseño en negro limpio.',
        badge: undefined,
        sizes: ['M', 'L'],
        images: ['/t-shirts-men/camisa_negra.webp', '/t-shirts-men/camisa_negra1.webp', '/t-shirts-women/camisa_cafe_mujer.webp'],
        labels: ['men']
    },
];

export const womenProducts: Product[] = Array.from({length: 6}).map((_, i) => ({
    id: `women-${i+1}`,
    title: `Eterno Women Tee ${i+1}`,
    price: 55 + i * 6,
    shortDescription: 'Soft fit for daily wear.',
    sizes: ['XS','S','M','L'],
    images: ['/t-shirts-women/camisa_cafe_mujer.webp', '/caps/gorra_blanca.webp', '/caps/gorra_cafe_verde.webp'],
    labels: ['women']
}))

export const capsProducts: Product[] = [
    {
        id: 'cap-1',
        title: 'Gorra Blanca',
        price: 35,
        shortDescription: 'Tipo beisbolera con malla Essentials.',
        sizes: ['7', '7⅛'],
        images: ['/caps/gorra_blanca.webp', '/caps/gorra_blanca1.webp', '/caps/gorra_cafe_verde.webp'],
        labels: ['caps']
    },
    {
        id: 'cap-2',
        title: 'Gorra Café/Verde',
        price: 35,
        shortDescription: 'Tipo beisbolera con logo Essentials.',
        sizes: ['7', '7⅛', '7¼'], // Si no aplica
        images: ['/caps/gorra_cafe_verde.webp', '/caps/gorra_cafe_verde1.webp', '/caps/gorra_negra_logo_gris.webp'],
        labels: ['caps']
    },
    {
        id: 'cap-3',
        title: 'Gorra Negra',
        price: 35,
        shortDescription: 'Tipo fifty logo Essentials gris.',
        sizes: ['7', '7⅜'], // Si no aplica
        images: ['/caps/gorra_negra_logo_gris.webp', '/caps/gorra_negra_logo_gris1.webp', '/caps/gorra_negra_verde.webp'],
        labels: ['caps']
    },
    {
        id: 'cap-4',
        title: 'Gorra Negra/Verde',
        price: 35,
        shortDescription: 'Tipo fifty teja verde logo Essentials.',
        sizes: ['7', '7⅛', '7¼'], // Si no aplica
        images: ['/caps/gorra_negra_verde.webp', '/caps/gorra_negra_verde1.webp', '/caps/gorra_negra.webp'],
        labels: ['caps']
    },
    {
        id: 'cap-5',
        title: 'Gorra Negra',
        price: 35,
        shortDescription: 'Tipo beisbolera fifty logo dorado.',
        sizes: ['7', '7⅛'], // Si no aplica
        images: ['/caps/gorra_negra.webp', '/caps/gorra_negra1.webp', '/caps/gorra_blanca.webp'],
        labels: ['caps']
    },
];