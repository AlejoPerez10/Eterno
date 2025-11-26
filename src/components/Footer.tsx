'use client'
import { useInView } from '../hooks/useInView'

export default function Footer() {
    const view = useInView<HTMLDivElement>()

    return (
        <footer className="pt-16 bg-linear-to-t to-[#0b0b0b]/90 via-[#0b0b0b] from-[#0b0b0b]">
        <div ref={view} className="appear max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
            <h4 className="font-bold mb-3 text-[#b69c50]">Information</h4>
            <p className="text-sm text-white">About the page and us. Replace this placeholder with your own text.</p>
            </div>

            <div>
            <h4 className="font-bold mb-3 text-[#b69c50]">Collections</h4>
            <ul className="text-sm space-y-2 text-white">
                <li>Men</li>
                <li>Women</li>
                <li>Hats & Caps</li>
                <li>Accessories</li>
            </ul>
            </div>

            <div>
            <h4 className="font-bold mb-3 text-[#b69c50]">Social</h4>
            <div className="flex gap-3 text-white">
                <a className="text-sm">Instagram</a>
                <a className="text-sm">Facebook</a>
                <a className="text-sm">TikTok</a>
            </div>
            </div>
        </div>

        <div className="border-t py-4 text-center text-xs text-white/40">
            © {new Date().getFullYear()} Eterno. All rights reserved.
        </div>
        </footer>
    )
}
