import type { Product } from '../types'

export default function ProductCard({ product }: { product: Product }) {
    return (
        <section className="w-64 shrink-0 bg-white/20 rounded-lg shadow-sm overflow-hidden">
            <div className="relative h-40 bg-gray-100">
                {/* Replace src with your product image */}
                <img src={product.image ?? '/modelo_gorra_negra_verde.jpg'} alt={product.title} className="w-full h-full object-cover" />
                {/* top-right labels */}

                <div className="absolute top-2 right-2 flex flex-col items-end gap-1">
                {product.labels?.map(l => (
                    <span key={l} className="text-xs px-2 py-0.5 bg-black text-white rounded">{l}</span>
                ))}
                </div>

                {/* badge */}
                {product.badge && (
                <div className="absolute top-2 left-2">
                    <span className="text-xs px-2 py-0.5 bg-yellow-400 text-black rounded">{product.badge}</span>
                </div>
                )}
                
            </div>

            <div className="p-4">
                <h3 className="font-semibold text-sm text-white">{product.title}</h3>
                <p className="text-xs text-white mt-1">{product.shortDescription}</p>

                <div className="mt-3 flex items-center justify-between">

                <div>
                    <div className="text-sm font-bold text-[#b69c50]">${product.price.toFixed(2)}</div>
                    <div className="text-xs text-white">Sizes: {product.sizes?.join(' · ')}</div>
                </div>

                <button className="px-3 py-1 bg-eterno text-[#b69c50] font-semibold rounded text-sm">Add</button>
                </div>
            </div>
        </section>
    )
}
