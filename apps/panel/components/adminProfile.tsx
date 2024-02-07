import { Text } from "@repo/ui/units";
export default function AdminProfile() {
    return (
        <div className="flex items-center gap-2">
            <div className="w-10 h-10">

            </div>
            <div className="flex flex-col gap-1">
                <Text variant="label" className="text-brand-blackblue font-bold">John Doe</Text>
                <Text variant="paragraph" className="text-[10px]">johndoe@gmail.com</Text>
            </div>
        </div>
    )
}