'use client'

import { Badge } from "@/components/ui/badge";
import { Mail } from "lucide-react";

function handleEmailClick() {
    window.location.href = "mailto:jy03312@gmail.com";
}

export default function Page() {
    return (
        <div className="h-full flex items-center justify-center p-6">
            <div className="flex flex-col items-center gap-6 text-center max-w-md mx-auto">
                <h1 className="text-3xl font-bold">Contact</h1>
                <h1>Simon Lee</h1>
                <Badge className="flex items-center gap-2 px-4 py-2 text-sm cursor-pointer hover:bg-primary/90 active:scale-95 transition-all" onClick={handleEmailClick}>
                    <Mail className="h-4 w-4" />
                    jy03312@gmail.com
                </Badge>
            </div>
        </div>
    )
}