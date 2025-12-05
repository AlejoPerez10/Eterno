import Hero from '../components/Hero'
import ProductRow from '../components/ProductRow'
import Footer from '../components/Footer'
import { menProducts, womenProducts, capsProducts } from '../lib/products'

export default function Home() {
  return (
    <>
      <Hero />

      <div className="pt-8 bg-linear-to-t to-[#0b0b0b] via-[#0b0b0b] from-[#0b0b0b]/90">
        <ProductRow id='men' title="Men — Featured" products={menProducts} />
        <ProductRow id='women' title="Women — Featured" products={womenProducts} />
        <ProductRow id='caps' title="Caps" products={capsProducts} />
      </div>

      <Footer />
    </>
  )
}