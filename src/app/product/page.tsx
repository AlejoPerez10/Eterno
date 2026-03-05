import { menProducts, womenProducts, capsProducts } from '@/lib/products'
import ProductCard from '@/components/ProductCard'
import Footer from '@/components/Footer'

export default function ProductsPage() {
    const all = [
        ...menProducts,
        ...womenProducts,
        ...capsProducts
    ]

    return (
        <main className="relative h-screen w-full pt-30 flex flex-col justify-center">
            <div className='fixed hero-overlay h-screen w-full -z-1 inset-0'></div>
            <img src="/fondo.png" alt="Hero background" className="fixed inset-0 w-full h-full object-cover -z-10"/>
            <h1 className="text-white text-4xl font bold mb-6 mt-44 mx-auto">
                Gorra Blanca
            </h1>

            <img src="/caps/blanca_e_negro.webp" alt="gorra blanca" className='w-160 mx-auto'/>
            
            <Footer/>
        </main>
    )
}
