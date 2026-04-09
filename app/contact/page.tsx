'use client'

import { Badge } from "@/components/ui/badge"
import { Mail } from "lucide-react"

function handleEmailClick() {
    window.location.href = "mailto:jy03312@gmail.com";
}

export default function Page() {
    return (
        <div className="min-h-full py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl mx-auto text-center">
                <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground mb-3">Get in touch</p>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Contact</h1>
                <p className="text-base text-muted-foreground mb-8">Reach out for collaborations, freelance work, or general inquiries.</p>
                <Badge className="inline-flex items-center gap-2 px-5 py-3 text-sm cursor-pointer hover:bg-primary/90 active:scale-95 transition-all" onClick={handleEmailClick}>
                    <Mail className="h-4 w-4" />
                    jy03312@gmail.com
                </Badge>
            </div>
        </div>
    )
}