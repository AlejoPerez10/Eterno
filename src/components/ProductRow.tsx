'use client'
import { useState, useRef, useEffect, useCallback } from 'react'
import ProductCard from './ProductCard'
import type { Product } from '../types'
import { useInView } from '../hooks/useInView'

// Componente Flecha (SVG)
const ArrowSvg = ({ direction }: { direction: 'left' | 'right' }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={3.5}
        stroke="#b69c50"
        className="w-9 h-9"
    >
        {direction === 'left' ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        )}
    </svg>
)

export default function ProductRow({ title, products }: { title: string, products: Product[] }) {
    const scrollRef = useRef<HTMLDivElement>(null)
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(false)
    const view = useInView<HTMLDivElement>()
    
    const isScrolling = useRef(false)
    const resizeTimeoutRef = useRef<number | null>(null)

    const updateScrollState = useCallback(() => {
        const current = scrollRef.current
        if (current) {
            const isAtStart = current.scrollLeft === 0
            const isAtEnd = Math.round(current.scrollLeft + current.clientWidth) >= current.scrollWidth

            setCanScrollLeft(!isAtStart)
            setCanScrollRight(!isAtEnd)
        }
    }, [])

    const scroll = (direction: 'left' | 'right') => {
        const current = scrollRef.current
        if (current && !isScrolling.current) {
            isScrolling.current = true;
            // *** CAMBIO 1: Desplazar 4 productos ***
            // Ancho de una tarjeta (w-64 = 256px) + gap-4 (16px) = 272px
            const SINGLE_CARD_WIDTH = 272; 
            // Distancia total a desplazar (4 productos * ancho de producto)
            const distance = (direction === 'left' ? -1 : 1) * SINGLE_CARD_WIDTH * 4;
            
            current.scrollBy({
                left: distance,
                behavior: 'smooth',
            })
            
            // Se usa un pequeño timeout para esperar que termine la animación
            setTimeout(() => {
                isScrolling.current = false;
                updateScrollState();
            }, 300); 
        }
    }

    useEffect(() => {
        const current = scrollRef.current
        if (current) {
            updateScrollState()
            
            current.addEventListener('scroll', updateScrollState)
            
            const handleResize = () => {
                if (resizeTimeoutRef.current) {
                    clearTimeout(resizeTimeoutRef.current);
                }
                resizeTimeoutRef.current = window.setTimeout(updateScrollState, 150);
            };

            window.addEventListener('resize', handleResize);

            return () => {
                current.removeEventListener('scroll', updateScrollState)
                window.removeEventListener('resize', handleResize)
                if (resizeTimeoutRef.current) {
                    clearTimeout(resizeTimeoutRef.current);
                }
            }
        }
    }, [updateScrollState])

    return (
        <section ref={view} className="appear max-w-7xl mx-auto px-6 py-8">
            <h2 className="text-xl font-bold mb-4 text-white">{title}</h2>
            
            {/* Contenedor principal: relative */}
            <div className="relative flex items-center">
                
                {/* *** CAMBIO 2: Nuevo contenedor con overflow-hidden para la corrección del desbordamiento *** */}
                <div className="relative flex-1 overflow-hidden">
                    
                    {/* 1. Degradado Izquierdo (Muestra si se puede scrollear a la izquierda) */}
                    <div 
                        // Aplica la transición y controla la opacidad
                        className={`
                            absolute left-0 top-[7.5px] bottom-0 z-10 w-20 h-[calc(100%-16px)] pointer-events-none 
                            bg-linear-to-r from-black via-black/70 to-transparent
                            transition-opacity duration-300 ease-in-out
                            ${canScrollLeft ? 'opacity-100' : 'opacity-0'}
                        `} 
                    />
                    
                    {/* Contenedor de Productos Scrolleable */}
                    <div 
                        ref={scrollRef} 
                        className="flex gap-4 overflow-x-auto snap-x snap-mandatory py-2 scrollbar-hide"
                    >
                        {products.map(p => (
                            <div key={p.id} className="snap-start shrink-0">
                                <ProductCard product={p} />
                            </div>
                        ))}
                    </div>

                    {/* 2. Degradado Derecho (Muestra si se puede scrollear a la derecha) */}
                    <div 
                        // Aplica la transición y controla la opacidad
                        className={`
                            absolute right-0 top-[7.5px] bottom-0 z-10 w-40 h-[calc(100%-16px)] pointer-events-none 
                            bg-linear-to-l from-black via-black/70 to-transparent
                            transition-opacity duration-300 ease-in-out
                            ${canScrollRight ? 'opacity-100' : 'opacity-0'}
                        `} 
                    />

                </div>

                {/* 3. Flechas (Posicionadas fuera del nuevo contenedor de overflow) */}
                
                <button
                    onClick={() => scroll('left')}
                    // Aplica la transición y controla la opacidad, y desactiva el botón si no se puede scrollear
                    className={`
                        absolute left-0 z-20 p-2 bg-black/50 rounded-full hover:bg-black/80 shadow-lg ml-2 cursor-pointer
                        transition-opacity duration-300 ease-in-out
                        ${canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'}
                    `}
                    aria-label="Previous products"
                    disabled={!canScrollLeft}
                >
                    <ArrowSvg direction="left" />
                </button>

                <button
                    onClick={() => scroll('right')}
                    // Aplica la transición y controla la opacidad, y desactiva el botón si no se puede scrollear
                    className={`
                        absolute right-0 z-20 p-2 bg-black/50 rounded-full hover:bg-black/80 shadow-lg mr-2 cursor-pointer
                        transition-opacity duration-300 ease-in-out
                        ${canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'}
                    `}
                    aria-label="Next products"
                    disabled={!canScrollRight}
                >
                    <ArrowSvg direction="right" />
                </button>
            </div>
        </section>
    )
}