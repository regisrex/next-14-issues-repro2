'use client'

import { Button, NotificationIcon, SearchIcon, Text } from "@repo/ui/units";
import { usePathname } from "next/navigation";
import AdminProfile from "../../../../components/adminProfile";
import { navLinks } from "../../../../constants/data";

export default function HeaderBar() {
    const pathname = usePathname();
    const currentPath = navLinks.find(link => link.href === pathname)?.label;
    return (
        <div className="h-[70px] flex items-center justify-between px-8 border-b border-brand-darkblue-10 bg-white">
            <Text variant="heading3">{currentPath}</Text>
            <div className="flex  items-center gap-1">
                <Button variant={'tertiary'} className="w-8 h-8">
                    <SearchIcon />
                </Button>
                <Button variant={'tertiary'} className="w-8 h-8">
                    <NotificationIcon />
                </Button>
                <AdminProfile />
            </div>
        </div>
    )
}