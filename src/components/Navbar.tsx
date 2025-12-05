'use client'
import Link from 'next/link'
import { useInView } from '../hooks/useInView'

export default function Navbar() {
    const view = useInView<HTMLDivElement>()

    
    return (
        <nav ref={view} className="appear flex items-center justify-between w-full max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center gap-4">
                <Link href="/" className="flex items-center gap-3">
                    <img src="/logo_natural.webp" alt="Eterno logo" className="size-14 object-contain" />
                    <span className="font-bold text-2xl tracking-tight text-[#b69c50]">Eterno</span>
                </Link>
            </div>

            <ul className="hidden md:flex gap-6 items-center text-sm text-white hover:text-eterno transition-colors">
                <a href='/products' className='cursor-pointer hover:text-[#f4d36e] hover:scale-120 transition ease-in-out'>Products</a>
                <a href='/#men' className='cursor-pointer hover:text-[#f4d36e] hover:scale-120 transition ease-in-out'>Men</a>
                <a href='/#women' className='cursor-pointer hover:text-[#f4d36e] hover:scale-120 transition ease-in-out'>Women</a>
                <a href='/#caps' className='cursor-pointer hover:text-[#f4d36e] hover:scale-120 transition ease-in-out'>Caps</a>
                <a href='/' className='cursor-pointer hover:text-[#f4d36e] hover:scale-120 transition ease-in-out'>Accesories</a>
                <a href='/' className='cursor-pointer hover:text-[#f4d36e] hover:scale-120 transition ease-in-out'>About Us</a>
            </ul>

            {/* Right side - cart placeholder */}
            <div className="flex items-center gap-4">
                <button aria-label="open cart" className="font-bold hidden md:inline-flex items-center gap-2 px-3 py-2 border rounded text-[#b69c50]">
                    <svg className="w-5 h-5 relative top-[2.5px]" fill="none" stroke="#b69c50" strokeWidth="3" viewBox="0 0 24 24">
                        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4"></path>
                    </svg>
                    Cart
                </button>

                {/* Mobile menu icon */}
                <button className="md:hidden p-2" aria-label="open menu">
                <svg className="size-8" fill="none" stroke="#b69c50" strokeWidth="3" viewBox="0 0 24 24">
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
                </button>
            </div>
        </nav>
    )
}