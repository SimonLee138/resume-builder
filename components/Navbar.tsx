"use client"

import * as React from "react"
import { Moon, Sun, Menu, X } from "lucide-react"
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
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div
        id="top-navbar"
        className="sticky top-0 flex h-fit w-full border-b bg-background p-3"
      >
        <div className="pt-2 pr-2">
          <Image
            src="/MugPee-logo-transparent_horizon.png"
            width={100}
            height={20}
            alt="MugPee"
          />
        </div>
      </div>
    )
  }

  return (
    <div
      id="top-navbar"
      className="sticky top-0 z-50 w-full border-b bg-background"
    >
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/MugPee-logo-transparent_horizon.png"
            width={100}
            height={20}
            alt="MugPee"
            className="h-5 w-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center space-x-6 md:flex">
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-2">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/"
                    className="px-3 py-2 text-sm font-medium transition-colors hover:text-primary"
                  >
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/about"
                    className="px-3 py-2 text-sm font-medium transition-colors hover:text-primary"
                  >
                    About
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/projects"
                    className="px-3 py-2 text-sm font-medium transition-colors hover:text-primary"
                  >
                    Projects
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/skills"
                    className="px-3 py-2 text-sm font-medium transition-colors hover:text-primary"
                  >
                    Skills
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/resume"
                    className="px-3 py-2 text-sm font-medium transition-colors hover:text-primary"
                  >
                    Resume
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/contact"
                    className="px-3 py-2 text-sm font-medium transition-colors hover:text-primary"
                  >
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center space-x-4 md:flex">
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
          <Button size="sm">Download Resume</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="p-2 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t bg-background md:hidden">
          <div className="space-y-4 px-4 py-4">
            {/* Mobile Navigation Links */}
            <div className="flex flex-col space-y-2">
              <Link
                href="/"
                className="px-3 py-2 text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="px-3 py-2 text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/projects"
                className="px-3 py-2 text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/skills"
                className="px-3 py-2 text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </Link>
              <Link
                href="/resume"
                className="px-3 py-2 text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Resume
              </Link>
              <Link
                href="/contact"
                className="px-3 py-2 text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center justify-between border-t pt-4">
              <div className="flex items-center space-x-2">
                <Sun className="h-4 w-4" />
                <Switch
                  id="dark-light-mode-mobile"
                  checked={resolvedTheme === "dark"}
                  onCheckedChange={() =>
                    setTheme(resolvedTheme === "dark" ? "light" : "dark")
                  }
                />
                <Moon className="h-4 w-4" />
              </div>
              <Button size="sm">Download Resume</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
