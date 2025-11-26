"use client"

import { useEffect, useRef, RefObject } from 'react';

export function useInView<T extends HTMLElement>() {
    const ref = useRef<T | null>(null)

    useEffect(() => {
        if (!ref.current) return
        const el = ref.current
        const obs = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
            if (entry.isIntersecting) {
                el.classList.add('is-visible')
                obs.unobserve(el)
            }
            })
        },
        { threshold: 0.15 }
        )
        obs.observe(el)
        return () => obs.disconnect()
    }, [])

    return ref as RefObject<T>
}
