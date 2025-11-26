export default function Badge({ children }: { children: React.ReactNode }) {
    return (
        <span className="inline-block px-2 py-1 text-xs font-semibold rounded bg-black text-white">
        {children}
        </span>
    )
}
