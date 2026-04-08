import { Badge } from "@/components/ui/badge";
import { Mail } from "lucide-react";

export default function Page() {
    return (
        <div className="h-full flex items-center justify-center p-6">
            <div className="flex flex-col items-center gap-6 text-center max-w-md mx-auto">
                <h1 className="text-3xl font-bold">Contact</h1>
                <Badge className="flex items-center gap-2 px-4 py-2 text-sm">
                    <Mail className="h-4 w-4" />
                    jy03312@gmail.com
                </Badge>
            </div>
        </div>
    )
}