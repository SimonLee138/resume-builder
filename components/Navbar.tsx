"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Switch } from "@/components/ui/switch"
import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      // ... rest of your navbar without the switch, or show a placeholder
      <div id="top-navbar" className="sticky top-0 flex h-fit w-full p-3">
        {/* your logo + nav + download button without switch */}
      </div>
    )
  }
  return (
    <div id="top-navbar" className="sticky top-0 flex h-fit w-full p-3 bg-background border-b">
      <div className="pt-2 pr-2">
        <Image
          src="/MugPee-logo-transparent_horizon.png"
          width={100}
          height={20}
          alt="MugPee"
        />
      </div>
      <div className="grow font-medium">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/about">About</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/projects">Projects</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/skills">Skills</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/resume">Resume</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/contact">Contact</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="grow-none flex items-center space-x-2">
        <div className="flex items-center space-x-2">
          <Sun className="h-4 w-4" />
          <Switch
            id="dark-light-mode"
            checked={resolvedTheme === "dark"}
            onCheckedChange={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
          />
          <Moon className="h-4 w-4" />
        </div>
        <div>
          <Button>Download</Button>
        </div>
      </div>
    </div>
  )
}
