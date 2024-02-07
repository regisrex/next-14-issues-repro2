export default function Layout({ children, navbar, headerBar }: { children: React.ReactNode, navbar: React.ReactNode, headerBar: React.ReactNode }) {
    return (
        <div className="grid grid-cols-6 bg-[#F8FBFD]">
            <div className="col-span-1">
                {navbar}
            </div>
            <div className="col-span-5">
                <div>
                    {headerBar}
                </div>
                <div className="p-8">
                    {children}
                </div>
            </div>
        </div>
    )
}