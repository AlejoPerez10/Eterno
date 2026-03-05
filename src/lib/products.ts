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
        images: ['/caps/blanca_e_negro.webp', '/caps/blanca_e_negro1.webp', '/caps/blanca_e_negro.webp'],
        labels: ['caps']
    },
    {
        id: 'cap-2',
        title: 'Gorra Café/Verde',
        price: 35,
        shortDescription: 'Tipo beisbolera con logo Essentials.',
        sizes: ['7', '7⅛', '7¼'], // Si no aplica
        images: ['/caps/cafe_verde_e_negro.webp', '/caps/cafe_verde_e_negro1.webp', '/caps/blanca_e_negro.webp'],
        labels: ['caps']
    },
    {
        id: 'cap-3',
        title: 'Gorra Negra',
        price: 35,
        shortDescription: 'Tipo fifty logo Essentials gris.',
        sizes: ['7', '7⅜'], // Si no aplica
        images: ['/caps/negra_e_gris.webp', '/caps/negra_e_gris1.webp', '/caps/blanca_e_negro.webp'],
        labels: ['caps']
    },
    {
        id: 'cap-4',
        title: 'Gorra Negra/Verde',
        price: 35,
        shortDescription: 'Tipo fifty teja verde logo Essentials.',
        sizes: ['7', '7⅛', '7¼'], // Si no aplica
        images: ['/caps/negra_verde_dragon_amarillo.webp', '/caps/blanca_e_negro.webp', '/caps/blanca_e_negro.webp'],
        labels: ['caps']
    },
    {
        id: 'cap-5',
        title: 'Gorra Negra',
        price: 35,
        shortDescription: 'Tipo beisbolera fifty logo dorado.',
        sizes: ['7', '7⅛'], // Si no aplica
        images: ['/caps/negra_dragon_amarillo.webp', '/caps/negra_dragon_amarillo1.webp', '/caps/negra_dragon_amarillo2.webp'],
        labels: ['caps']
    },
    {
        id: 'cap-6',
        title: 'Gorra Negra/Gris',
        price: 35,
        shortDescription: 'Tipo beisbolera fifty logo Eterno gris.',
        sizes: ['7', '7⅛'], // Si no aplica
        images: ['/caps/negra_gris_eterno_gris.webp', '/caps/negra_gris_eterno_gris1.webp', '/caps/negra_gris_eterno_gris2.webp'],
        labels: ['caps']
    },
    {
        id: 'cap-7',
        title: 'Gorra Gris/Blanca',
        price: 35,
        shortDescription: 'Tipo beisbolera fifty logo Eterno blanco.',
        sizes: ['7', '7⅛'], // Si no aplica
        images: ['/caps/gris_blanca_eterno_blanco.webp', '/caps/gris_blanca_eterno_blanco1.webp', '/caps/gris_blanca_eterno_blanco2.webp'],
        labels: ['caps']
    },
    {
        id: 'cap-8',
        title: 'Gorra Azul/Cafe',
        price: 35,
        shortDescription: 'Tipo camionera fifty logo Eterno naranja.',
        sizes: ['7', '7⅛'], // Si no aplica
        images: ['/caps/azul_cafe_eterno_naranja.webp', '/caps/azul_cafe_eterno_naranja1.webp', '/caps/azul_cafe_eterno_naranja2.webp'],
        labels: ['caps']
    },
    {
        id: 'cap-9',
        title: 'Gorra Azul/Naranja',
        price: 35,
        shortDescription: 'Tipo camionera fifty logo Eterno naranja.',
        sizes: ['7', '7⅛'], // Si no aplica
        images: ['/caps/azul_naranja_eterno_naranja.webp', '/caps/azul_naranja_eterno_naranja1.webp', '/caps/azul_naranja_eterno_naranja2.webp'],
        labels: ['caps']
    },
    {
        id: 'cap-10',
        title: 'Gorra Blanca',
        price: 35,
        shortDescription: 'Tipo beisbolera fifty logo dragón amarillo.',
        sizes: ['7', '7⅛'], // Si no aplica
        images: ['/caps/blanca_dragon_amarillo.webp', '/caps/blanca_dragon_amarillo1.webp', '/caps/blanca_dragon_amarillo2.webp'],
        labels: ['caps']
    },
    {
        id: 'cap-11',
        title: 'Gorra Negra',
        price: 35,
        shortDescription: 'Tipo beisbolera fifty plana logo Eterno blanco.',
        sizes: ['7', '7⅛'], // Si no aplica
        images: ['/caps/negra_eterno_blanco.webp', '/caps/negra_eterno_blanco1.webp', '/caps/negra_eterno_blanco2.webp'],
        labels: ['caps']
    },
];


