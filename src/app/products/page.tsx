import { menProducts, womenProducts, capsProducts } from '@/lib/products'
import ProductCard from '@/components/ProductCard'

export default function ProductsPage() {
    const all = [
        ...menProducts,
        ...womenProducts,
        ...capsProducts
    ]

    return (
        <main className="p-8 h-full w-full bg-black pt-30">
            <h1 className="text-white text-2xl font bold mb-6">
                All Products
            </h1>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {all.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </main>
    )
}
