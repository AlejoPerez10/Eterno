'use client'

import { useState, useRef, useEffect } from 'react'
import type { Product } from '../types'

export default function ProductCard({ product }: { product: Product }) {
    const [index, setIndex] = useState(0)
    const hoverReady = useRef(false)
    const hoverTimeout = useRef<number | null>(null)
    const containerRef = useRef<HTMLDivElement | null>(null)
    const DELAY_MS = 500

    useEffect(() => {
        return () => {
        if (hoverTimeout.current) {
            clearTimeout(hoverTimeout.current)
        }
        }
    }, [])

    const handleEnter = (e: React.MouseEvent) => {
        setIndex(1) // show B
        hoverReady.current = false
        if (hoverTimeout.current) clearTimeout(hoverTimeout.current)
        hoverTimeout.current = window.setTimeout(() => {
        hoverReady.current = true
        }, DELAY_MS)
    }

    const handleLeave = () => {
        setIndex(0) // back to A
        hoverReady.current = false
        if (hoverTimeout.current) {
        clearTimeout(hoverTimeout.current)
        hoverTimeout.current = null
        }
    }

    const handleMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return
        const rect = containerRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const isRight = x > rect.width / 2

        if (!hoverReady.current) {
        // before 500ms: always show B while inside
        if (index !== 1) setIndex(1)
        return
        }

        // after 500ms: left half = B, right half = C (if exists)
        if (isRight && product.images.length > 2) {
        if (index !== 2) setIndex(2)
        } else {
        if (index !== 1) setIndex(1)
        }
    }

    return (
        <section className="w-80 shrink-0 bg-white/20 rounded-lg shadow-sm overflow-hidden">
        <div
            ref={containerRef}
            className="relative flex h-120 max-h-120 bg-[radial-gradient(circle,transparent,black)]"
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            onMouseMove={handleMove}
        >
            {product.images.map((src, i) => (
            <img
                key={i}
                src={src}
                alt={product.title}
                className={`
                    absolute inset-0 m-auto max-h-full
                    transition-all duration-300 ease-[cubic-bezier(.22,.61,.36,1)]
                    ${i === index ? 'opacity-100 blur-0' : 'opacity-0 blur-[2px]'}
                `}
            />
            ))}

            <div className="absolute top-2 right-2 flex flex-col items-end gap-1">
            {product.labels?.map((l) => (
                <span key={l} className="text-xs px-2 py-0.5 bg-black text-white rounded">
                {l}
                </span>
            ))}
            </div>

            {product.badge && (
            <div className="absolute top-2 left-2">
                <span className="text-xs px-2 py-0.5 bg-yellow-400 text-black rounded">
                {product.badge}
                </span>
            </div>
            )}
        </div>

        <div className="p-4">
            <h3 className="font-semibold text-sm text-white">{product.title}</h3>
            <p className="text-xs text-white mt-1">{product.shortDescription}</p>

            <div className="mt-3 flex items-center justify-between">
            <div>
                <div className="text-sm font-bold text-[#b69c50]">
                ${product.price.toFixed(2)}
                </div>
                <div className="text-xs text-white">Sizes: {product.sizes?.join(' · ')}</div>
            </div>

            <a href='/' className="px-3 py-1 bg-eterno text-white font-semibold rounded text-md bg-[#726232] hover:bg-[#b69c50] hover:scale-120 transition-all">VER ⮞</a>
            </div>
        </div>
        </section>
    )
}
