import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Page() {

  return (
    <div className="h-full flex items-stretch justify-center p-6">
      <div className="flex w-full max-w-5xl min-w-0 gap-4 text-sm leading-loose h-full">
        <Card className="flex-2">
          <CardContent>
            <p>me</p>
            <div className="flex gap-2 mt-4">
              <Badge className="bg-slate-200 dark:bg-slate-800 text-[14px] py-3 px-4">
                Learning AI
              </Badge>

              <Badge className="bg-slate-200 dark:bg-slate-800 text-[14px] py-3 px-4">
                Open
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="flex-1">
          <CardContent>
            <p>Photo</p>
          </CardContent>
        </Card>
        {/*<div className="flex flex-2 justify-center items-center h-full bg-slate-100 dark:bg-slate-900 rounded-3xl flex-col py-2">
          me
          <div className="bg-slate-200 dark:bg-slate-800 py-1 px-4 rounded-3xl mt-4">
            Learning AI
          </div>
        </div>
        <div className="flex flex-1 justify-center items-center h-full bg-slate-200 dark:bg-slate-800 rounded-3xl flex-col py-2">
          photo
        </div>*/}
      </div>
    </div>
  )
}
