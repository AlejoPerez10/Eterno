'use client'
import { useInView } from '../hooks/useInView'

export default function Footer() {
    const view = useInView<HTMLDivElement>()

    return (
        <footer className="pt-16 bg-linear-to-t to-[#0b0b0b]/90 via-[#0b0b0b] from-[#0b0b0b]" id='footer'>
        <div ref={view} className="appear max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className='w-80'>
            <h4 className="font-bold mb-3 text-[#b69c50]">Information</h4>
            <p className="text-sm text-white">Streetwear Clothing Brand enfocada en crear piezas versátiles y con identidad propia.</p>
            <p className="text-sm text-white mt-4">Fusiona estilo urbano con minimalismo, ofreciendo prendas que trascienden tendencias y representan autenticidad, actitud y permanencia.</p>
            </div>

            <div className='w-26'>
            <h4 className="font-bold mb-3 text-[#b69c50]">Collections</h4>
            <ul className="flex flex-col text-sm space-y-2 text-white">
                <a href='#men' className='hover:text-[#f4d36e] hover:scale-120 hover:translate-x-4 transition ease-in-out'>Men</a>
                <a href='#women' className='hover:text-[#f4d36e] hover:scale-120 hover:translate-x-4 transition ease-in-out'>Women</a>
                <a href='#caps' className='hover:text-[#f4d36e] hover:scale-120 hover:translate-x-4 transition ease-in-out'>Hats & Caps</a>
                <a href='/' className='hover:text-[#f4d36e] hover:scale-120 hover:translate-x-4 transition ease-in-out'>Accessories</a>
            </ul>
            </div>

            <div className='w-32'>
            <h4 className="font-bold mb-3 text-[#b69c50]">Social</h4>
            <div className="flex flex-col gap-3 text-white">
                <a href='https://www.instagram.com/eterno.med.co/' target='_blank' className="flex flex-row-reverse justify-end items-center text-md gap-1 transition-transform duration-100 hover:scale-110 hover:translate-x-2 hover:text-[#f4d36e]">Instagram
                    <img src="/svg/ig.svg" alt="Instagram" className='size-8'/>
                </a>
                <a href='https://wa.me/56931752372' target='_blank' className="flex flex-row-reverse justify-end items-center text-md gap-1 transition-transform duration-100 hover:scale-110 hover:translate-x-2 hover:text-[#f4d36e]">WhatsApp
                    <img src="/svg/wpp.svg" alt="Whatsapp" className='size-8'/>
                </a>
            </div>
            </div>
        </div>

        <div className="border-t py-4 text-center text-xs text-white/40">
            © {new Date().getFullYear()} Eterno. All rights reserved.
        </div>
        </footer>
    )
}
