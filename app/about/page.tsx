import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Users, Award, ThumbsUp, Clock, CheckCircle, Calendar } from "lucide-react"

export const metadata = {
    title: "About Us | Auto Repair Workshop",
    description:
        "Learn about our auto repair shop, our team of certified technicians, and our commitment to quality service and customer satisfaction.",
}

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-100 dark:bg-zinc-800">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Auto Repair Workshop</h1>
                                <p className="max-w-[600px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                                    With over 20 years of experience, we've built our reputation on quality workmanship, fair prices, and
                                    exceptional customer service.
                                </p>
                            </div>
                        </div>
                        <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-xl">
                            <Image
                                src="/placeholder.svg?height=400&width=600"
                                alt="Auto repair shop team"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                        <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-xl order-last lg:order-first">
                            <Image
                                src="/placeholder.svg?height=400&width=600"
                                alt="Auto repair shop history"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter">Our Story</h2>
                                <p className="text-zinc-500 dark:text-zinc-400">
                                    Founded in 2003 by master mechanic John Smith, Auto Repair Workshop began as a small, family-owned
                                    business dedicated to providing honest and reliable auto repair services to the local community.
                                </p>
                                <p className="text-zinc-500 dark:text-zinc-400">
                                    Over the years, we've grown into a full-service auto repair facility, but we've never lost sight of
                                    our core values: integrity, quality, and customer satisfaction. We treat every vehicle as if it were
                                    our own, and every customer like family.
                                </p>
                                <p className="text-zinc-500 dark:text-zinc-400">
                                    Today, our team of ASE-certified technicians continues to uphold these values while staying at the
                                    forefront of automotive technology and repair techniques.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Team Section */}
            <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-100 dark:bg-zinc-800">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter">Meet Our Team</h2>
                            <p className="max-w-[700px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                                Our certified technicians bring decades of combined experience to every repair.
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
                        <div className="flex flex-col items-center space-y-4">
                            <div className="relative h-40 w-40 overflow-hidden rounded-full">
                                <Image
                                    src="/placeholder.svg?height=160&width=160"
                                    alt="John Smith - Owner & Master Technician"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl font-bold">John Smith</h3>
                                <p className="text-zinc-500 dark:text-zinc-400">Owner & Master Technician</p>
                                <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                                    ASE Master Certified with over 25 years of experience. Specializes in engine performance and
                                    diagnostics.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center space-y-4">
                            <div className="relative h-40 w-40 overflow-hidden rounded-full">
                                <Image
                                    src="/placeholder.svg?height=160&width=160"
                                    alt="Sarah Johnson - Service Manager"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl font-bold">Sarah Johnson</h3>
                                <p className="text-zinc-500 dark:text-zinc-400">Service Manager</p>
                                <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                                    15 years in automotive service management. Ensures every customer receives exceptional service.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center space-y-4">
                            <div className="relative h-40 w-40 overflow-hidden rounded-full">
                                <Image
                                    src="/placeholder.svg?height=160&width=160"
                                    alt="Mike Rodriguez - Lead Technician"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl font-bold">Mike Rodriguez</h3>
                                <p className="text-zinc-500 dark:text-zinc-400">Lead Technician</p>
                                <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                                    ASE Certified with 12 years of experience. Specializes in electrical systems and computer diagnostics.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values Section */}
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter">Our Values</h2>
                            <p className="max-w-[700px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                                The principles that guide everything we do at Auto Repair Workshop.
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
                        <div className="flex flex-col items-center space-y-4 border p-6 rounded-lg">
                            <ThumbsUp className="h-12 w-12 text-red-600" />
                            <h3 className="text-xl font-bold">Integrity</h3>
                            <p className="text-center text-zinc-500 dark:text-zinc-400">
                                We're honest about what your vehicle needs and transparent about our pricing. No unnecessary repairs,
                                ever.
                            </p>
                        </div>
                        <div className="flex flex-col items-center space-y-4 border p-6 rounded-lg">
                            <Award className="h-12 w-12 text-red-600" />
                            <h3 className="text-xl font-bold">Quality</h3>
                            <p className="text-center text-zinc-500 dark:text-zinc-400">
                                We use quality parts and follow manufacturer specifications to ensure lasting repairs.
                            </p>
                        </div>
                        <div className="flex flex-col items-center space-y-4 border p-6 rounded-lg">
                            <Users className="h-12 w-12 text-red-600" />
                            <h3 className="text-xl font-bold">Customer Focus</h3>
                            <p className="text-center text-zinc-500 dark:text-zinc-400">
                                We prioritize your satisfaction and work to build long-term relationships with our customers.
                            </p>
                        </div>
                        <div className="flex flex-col items-center space-y-4 border p-6 rounded-lg">
                            <Clock className="h-12 w-12 text-red-600" />
                            <h3 className="text-xl font-bold">Efficiency</h3>
                            <p className="text-center text-zinc-500 dark:text-zinc-400">
                                We respect your time and work efficiently to get you back on the road as quickly as possible.
                            </p>
                        </div>
                        <div className="flex flex-col items-center space-y-4 border p-6 rounded-lg">
                            <CheckCircle className="h-12 w-12 text-red-600" />
                            <h3 className="text-xl font-bold">Reliability</h3>
                            <p className="text-center text-zinc-500 dark:text-zinc-400">
                                We stand behind our work with comprehensive warranties and follow-up service.
                            </p>
                        </div>
                        <div className="flex flex-col items-center space-y-4 border p-6 rounded-lg">
                            <Calendar className="h-12 w-12 text-red-600" />
                            <h3 className="text-xl font-bold">Convenience</h3>
                            <p className="text-center text-zinc-500 dark:text-zinc-400">
                                We offer flexible scheduling, loaner vehicles, and digital communication options.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Certifications Section */}
            <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-100 dark:bg-zinc-800">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter">Our Certifications</h2>
                                <p className="text-zinc-500 dark:text-zinc-400">
                                    We invest in ongoing training and certification to ensure our team has the knowledge and skills to
                                    work on today's complex vehicles.
                                </p>
                                <ul className="space-y-2 mt-4">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-5 w-5 text-red-600" />
                                        <span>ASE Certified Technicians</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-5 w-5 text-red-600" />
                                        <span>I-CAR Certified</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-5 w-5 text-red-600" />
                                        <span>AAA Approved Auto Repair Facility</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-5 w-5 text-red-600" />
                                        <span>Manufacturer-Specific Training</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-5 w-5 text-red-600" />
                                        <span>EPA Certified for A/C Service</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-xl">
                            <Image
                                src="/placeholder.svg?height=400&width=600"
                                alt="Certifications and awards"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900 text-white">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Experience the Difference</h2>
                            <p className="max-w-[600px] text-zinc-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Schedule your appointment today and see why our customers trust us with their vehicles.
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

