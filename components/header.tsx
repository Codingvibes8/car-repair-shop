"use client"

import React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Wrench, Menu, Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"

export default function Header() {
    const isMobile = useMobile()
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="max-w-[1536px] mx-auto sticky top-0 z-50 w-full px-8 md:px-16 lg:px-24  border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center gap-2">
                        <Wrench className="h-6 w-6 text-red-600" />
                        <span className="font-bold text-xl hidden sm:inline-block">Auto Repair Workshop</span>
                        <span className="font-bold text-xl sm:hidden">ARW</span>
                    </Link>
                </div>

                {isMobile ? (
                    <div className="flex items-center gap-4">
                        <Link href="tel:5551234567" className="flex items-center gap-1">
                            <Phone className="h-4 w-4 text-red-600" />
                            <span className="text-sm font-medium">(555) 123-4567</span>
                        </Link>
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <Button variant="outline" size="icon">
                                    <Menu className="h-5 w-5" />
                                    <span className="sr-only">Toggle menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right">
                                <nav className="flex flex-col gap-4 mt-8">
                                    <Link href="/" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                                        Home
                                    </Link>
                                    <Link href="/services" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                                        Services
                                    </Link>
                                    <Link href="/about" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                                        About Us
                                    </Link>
                                    <Link href="/contact" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                                        Contact
                                    </Link>
                                    <Link href="/booking" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                                        Book Appointment
                                    </Link>
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>
                ) : (
                    <div className="flex items-center gap-4">
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <Link href="/" legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                            <li className="row-span-3">
                                                <NavigationMenuLink asChild>
                                                    <a
                                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-zinc-900 to-zinc-800 p-6 no-underline outline-none focus:shadow-md"
                                                        href="/services"
                                                    >
                                                        <Wrench className="h-6 w-6 text-red-600" />
                                                        <div className="mb-2 mt-4 text-lg font-medium text-white">Auto Repair Services</div>
                                                        <p className="text-sm leading-tight text-white/90">
                                                            Comprehensive repair and maintenance services for all makes and models.
                                                        </p>
                                                    </a>
                                                </NavigationMenuLink>
                                            </li>
                                            <ListItem href="/services/general-repairs" title="General Repairs">
                                                From minor fixes to major repairs
                                            </ListItem>
                                            <ListItem href="/services/engine-service" title="Engine Service">
                                                Diagnostics, repair, and maintenance
                                            </ListItem>
                                            <ListItem href="/services/brake-service" title="Brake Service">
                                                Inspection, repair, and replacement
                                            </ListItem>
                                            <ListItem href="/services/transmission" title="Transmission">
                                                Fluid changes, repairs, and rebuilds
                                            </ListItem>
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link href="/about" legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>About Us</NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link href="/contact" legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>Contact</NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                        <Link href="/booking">
                            <Button className="bg-red-600 hover:bg-red-700">Book Appointment</Button>
                        </Link>
                    </div>
                )}
            </div>
        </header>
    )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a"> & { title: string }>(
    ({ className, title, children, ...props }, ref) => {
        return (
            <li>
                <NavigationMenuLink asChild>
                    <a
                        ref={ref}
                        className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            className,
                        )}
                        {...props}
                    >
                        <div className="text-sm font-medium leading-none">{title}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
                    </a>
                </NavigationMenuLink>
            </li>
        )
    },
)
ListItem.displayName = "ListItem"

