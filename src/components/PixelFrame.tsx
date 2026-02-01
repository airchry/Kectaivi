type PixelFrameProps = {
    children: React.ReactNode
    title?: string
    className?: string
}

function PixelFrame({ children, title, className = "" }: PixelFrameProps) {
    return (
        <div className={`relative border-4 border-slate-800 bg-slate-900 p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${className}`}>
            <div className="absolute -top-3 left-4 bg-yellow-500 px-2 border-2 border-slate-800 text-[10px] font-bold uppercase text-black">
                {title || "SYS_LOG"}
            </div>
            {children}
        </div>
    )
}

export default PixelFrame;