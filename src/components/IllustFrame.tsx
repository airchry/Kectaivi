type IllustFrameProps = {
    children: React.ReactNode
    className?: string
}

function IllustFrame({ children, className = "" }: IllustFrameProps) {
    return (
        <div className={`relative border-4 border-slate-800 bg-slate-900 p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${className}`}>
            {children}
        </div>
    )
}

export default IllustFrame;