import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
    Car,
    Clock,
    Settings,
    PenToolIcon as Tool,
    Wrench,
    Shield,
    Gauge,
    Droplet,
    Thermometer,
    BatteryCharging,
    AirVent,
} from "lucide-react"

export const metadata = {
    title: "Auto Repair Services | Auto Repair Workshop",
    description:
        "Comprehensive auto repair and maintenance services for all makes and models. From routine maintenance to major repairs, our certified technicians do it all.",
}

export default function ServicesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-100 dark:bg-zinc-800">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Auto Repair Services</h1>
                            <p className="max-w-[700px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                                Comprehensive auto repair and maintenance services for all makes and models. From routine maintenance to
                                major repairs, our certified technicians do it all.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Services Section */}
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                        <Card className="overflow-hidden">
                            <div className="relative h-48">
                                <Image
                                    src="/placeholder.svg?height=200&width=400"
                                    alt="General Repairs"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <CardHeader className="flex flex-row items-center gap-4 pb-2">
                                <Wrench className="h-8 w-8 text-red-600" />
                                <CardTitle>General Repairs</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                                    From minor fixes to major repairs, our expert technicians handle it all with precision. We diagnose
                                    and repair issues with your vehicle's mechanical and electrical systems.
                                </p>
                                <ul className="mt-4 space-y-2 text-sm text-zinc-500 dark:text-zinc-400">
                                    <li>• Electrical system repairs</li>
                                    <li>• Exhaust system repairs</li>
                                    <li>• Steering and suspension</li>
                                    <li>• Cooling system service</li>
                                    <li>• Check engine light diagnosis</li>
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Link href="/contact" className="w-full">
                                    <Button variant="default" className="w-full bg-red-600 hover:bg-red-700">
                                        Schedule Service
                                    </Button>
                                </Link>
                            </CardFooter>
                        </Card>

                        <Card className="overflow-hidden">
                            <div className="relative h-48">
                                <Image src="/placeholder.svg?height=200&width=400" alt="Engine Service" fill className="object-cover" />
                            </div>
                            <CardHeader className="flex flex-row items-center gap-4 pb-2">
                                <Settings className="h-8 w-8 text-red-600" />
                                <CardTitle>Engine Service</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                                    Comprehensive engine diagnostics, repair, and maintenance to keep your engine running smoothly. We
                                    handle everything from tune-ups to complete engine rebuilds.
                                </p>
                                <ul className="mt-4 space-y-2 text-sm text-zinc-500 dark:text-zinc-400">
                                    <li>• Engine tune-ups</li>
                                    <li>• Timing belt replacement</li>
                                    <li>• Engine rebuilds</li>
                                    <li>• Fuel system cleaning</li>
                                    <li>• Performance upgrades</li>
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Link href="/contact" className="w-full">
                                    <Button variant="default" className="w-full bg-red-600 hover:bg-red-700">
                                        Schedule Service
                                    </Button>
                                </Link>
                            </CardFooter>
                        </Card>

                        <Card className="overflow-hidden">
                            <div className="relative h-48">
                                <Image src="/placeholder.svg?height=200&width=400" alt="Brake Service" fill className="object-cover" />
                            </div>
                            <CardHeader className="flex flex-row items-center gap-4 pb-2">
                                <Tool className="h-8 w-8 text-red-600" />
                                <CardTitle>Brake Service</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                                    Inspection, repair, and replacement of brake pads, rotors, and complete brake systems. Your safety is
                                    our top priority.
                                </p>
                                <ul className="mt-4 space-y-2 text-sm text-zinc-500 dark:text-zinc-400">
                                    <li>• Brake pad replacement</li>
                                    <li>• Rotor resurfacing/replacement</li>
                                    <li>• Brake fluid flush</li>
                                    <li>• Caliper repair/replacement</li>
                                    <li>• ABS system diagnosis</li>
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Link href="/contact" className="w-full">
                                    <Button variant="default" className="w-full bg-red-600 hover:bg-red-700">
                                        Schedule Service
                                    </Button>
                                </Link>
                            </CardFooter>
                        </Card>

                        <Card className="overflow-hidden">
                            <div className="relative h-48">
                                <Image
                                    src="/placeholder.svg?height=200&width=400"
                                    alt="Transmission Service"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <CardHeader className="flex flex-row items-center gap-4 pb-2">
                                <Car className="h-8 w-8 text-red-600" />
                                <CardTitle>Transmission</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                                    Transmission fluid changes, repairs, and complete rebuilds for manual and automatic transmissions.
                                    Keep your transmission shifting smoothly.
                                </p>
                                <ul className="mt-4 space-y-2 text-sm text-zinc-500 dark:text-zinc-400">
                                    <li>• Transmission fluid change</li>
                                    <li>• Transmission flush</li>
                                    <li>• Clutch replacement</li>
                                    <li>• Transmission rebuilds</li>
                                    <li>• Shift solenoid replacement</li>
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Link href="/contact" className="w-full">
                                    <Button variant="default" className="w-full bg-red-600 hover:bg-red-700">
                                        Schedule Service
                                    </Button>
                                </Link>
                            </CardFooter>
                        </Card>

                        <Card className="overflow-hidden">
                            <div className="relative h-48">
                                <Image
                                    src="/placeholder.svg?height=200&width=400"
                                    alt="Preventive Maintenance"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <CardHeader className="flex flex-row items-center gap-4 pb-2">
                                <Shield className="h-8 w-8 text-red-600" />
                                <CardTitle>Preventive Maintenance</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                                    Regular maintenance to prevent costly repairs and extend the life of your vehicle. Stay ahead of
                                    potential issues.
                                </p>
                                <ul className="mt-4 space-y-2 text-sm text-zinc-500 dark:text-zinc-400">
                                    <li>• Oil changes</li>
                                    <li>• Filter replacements</li>
                                    <li>• Fluid checks and top-offs</li>
                                    <li>• Multi-point inspections</li>
                                    <li>• Scheduled maintenance</li>
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Link href="/contact" className="w-full">
                                    <Button variant="default" className="w-full bg-red-600 hover:bg-red-700">
                                        Schedule Service
                                    </Button>
                                </Link>
                            </CardFooter>
                        </Card>

                        <Card className="overflow-hidden">
                            <div className="relative h-48">
                                <Image src="/placeholder.svg?height=200&width=400" alt="Diagnostics" fill className="object-cover" />
                            </div>
                            <CardHeader className="flex flex-row items-center gap-4 pb-2">
                                <Clock className="h-8 w-8 text-red-600" />
                                <CardTitle>Diagnostics</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                                    Advanced computer diagnostics to identify and resolve complex vehicle issues. We use the latest
                                    diagnostic tools.
                                </p>
                                <ul className="mt-4 space-y-2 text-sm text-zinc-500 dark:text-zinc-400">
                                    <li>• Check engine light diagnosis</li>
                                    <li>• Computer system scanning</li>
                                    <li>• Electrical system testing</li>
                                    <li>• Performance testing</li>
                                    <li>• Emissions system diagnosis</li>
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Link href="/contact" className="w-full">
                                    <Button variant="default" className="w-full bg-red-600 hover:bg-red-700">
                                        Schedule Service
                                    </Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Additional Services Section */}
            <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-100 dark:bg-zinc-800">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Additional Services</h2>
                            <p className="max-w-[700px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                                We offer a wide range of additional services to keep your vehicle in top condition.
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
                        <div className="flex flex-col items-center space-y-2 border p-6 rounded-lg">
                            <Gauge className="h-12 w-12 text-red-600" />
                            <h3 className="text-xl font-bold">Tire Services</h3>
                            <p className="text-center text-zinc-500 dark:text-zinc-400">
                                Tire rotation, balancing, alignment, and new tire installation.
                            </p>
                        </div>
                        <div className="flex flex-col items-center space-y-2 border p-6 rounded-lg">
                            <BatteryCharging className="h-12 w-12 text-red-600" />
                            <h3 className="text-xl font-bold">Battery Service</h3>
                            <p className="text-center text-zinc-500 dark:text-zinc-400">
                                Battery testing, charging, and replacement services.
                            </p>
                        </div>
                        <div className="flex flex-col items-center space-y-2 border p-6 rounded-lg">
                            <AirVent className="h-12 w-12 text-red-600" />
                            <h3 className="text-xl font-bold">A/C Service</h3>
                            <p className="text-center text-zinc-500 dark:text-zinc-400">
                                A/C recharge, repair, and system maintenance.
                            </p>
                        </div>
                        <div className="flex flex-col items-center space-y-2 border p-6 rounded-lg">
                            <Thermometer className="h-12 w-12 text-red-600" />
                            <h3 className="text-xl font-bold">Cooling System</h3>
                            <p className="text-center text-zinc-500 dark:text-zinc-400">
                                Radiator service, coolant flush, and leak repairs.
                            </p>
                        </div>
                        <div className="flex flex-col items-center space-y-2 border p-6 rounded-lg">
                            <Droplet className="h-12 w-12 text-red-600" />
                            <h3 className="text-xl font-bold">Fluid Services</h3>
                            <p className="text-center text-zinc-500 dark:text-zinc-400">
                                Complete fluid flushes and replacements for all systems.
                            </p>
                        </div>
                        <div className="flex flex-col items-center space-y-2 border p-6 rounded-lg">
                            <Settings className="h-12 w-12 text-red-600" />
                            <h3 className="text-xl font-bold">State Inspections</h3>
                            <p className="text-center text-zinc-500 dark:text-zinc-400">
                                Official state safety and emissions inspections.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900 text-white">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Get Your Vehicle Serviced?</h2>
                            <p className="max-w-[600px] text-zinc-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Schedule your appointment today and experience the difference quality service makes.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <Link href="/booking">
                                <Button size="lg" className="bg-red-600 hover:bg-red-700">
                                    Book Appointment
                                </Button>
                            </Link>
                            <Link href="/contact">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-white text-white hover:bg-white hover:text-zinc-900"
                                >
                                    Contact Us
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

