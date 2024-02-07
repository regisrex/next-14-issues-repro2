export default function Layout({ children, overview }: any) {
    return (
        <div className="flex flex-col gap-6">
            {overview}
            {children}
        </div>
    )

}