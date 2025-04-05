import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"

export const metadata = {
    title: "Contact Us | Auto Repair Workshop",
    description:
        "Get in touch with our auto repair shop. Schedule an appointment, request a quote, or ask questions about our services.",
}

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-100 dark:bg-zinc-800">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact Us</h1>
                            <p className="max-w-[700px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                                Have questions or need to schedule service? We're here to help.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Info & Form Section */}
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-10 lg:grid-cols-2">
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
                                <p className="text-zinc-500 dark:text-zinc-400 mb-6">
                                    We're always happy to hear from our customers. Whether you need to schedule service, request a quote,
                                    or have questions about our services, we're here to help.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <Phone className="h-5 w-5 text-red-600 mt-1" />
                                        <div>
                                            <h3 className="font-bold">Phone</h3>
                                            <p className="text-zinc-500 dark:text-zinc-400">(555) 123-4567</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <Mail className="h-5 w-5 text-red-600 mt-1" />
                                        <div>
                                            <h3 className="font-bold">Email</h3>
                                            <p className="text-zinc-500 dark:text-zinc-400">service@autorepairshop.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <MapPin className="h-5 w-5 text-red-600 mt-1" />
                                        <div>
                                            <h3 className="font-bold">Address</h3>
                                            <p className="text-zinc-500 dark:text-zinc-400">123 Repair Lane, London N18 7AW</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <Clock className="h-5 w-5 text-red-600 mt-1" />
                                        <div>
                                            <h3 className="font-bold">Hours</h3>
                                            <p className="text-zinc-500 dark:text-zinc-400">Monday - Friday: 8am - 6pm</p>
                                            <p className="text-zinc-500 dark:text-zinc-400">Saturday: 8am - 2pm</p>
                                            <p className="text-zinc-500 dark:text-zinc-400">Sunday: Closed</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative h-[300px] overflow-hidden rounded-xl">
                                <Image src="/placeholder.svg?height=300&width=500" alt="Map location" fill className="object-cover" />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
                            <form className="space-y-4">
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div className="space-y-2">
                                        <label
                                            htmlFor="first-name"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            First Name
                                        </label>
                                        <Input id="first-name" placeholder="John" required />
                                    </div>
                                    <div className="space-y-2">
                                        <label
                                            htmlFor="last-name"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            Last Name
                                        </label>
                                        <Input id="last-name" placeholder="Doe" required />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label
                                        htmlFor="email"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        Email
                                    </label>
                                    <Input id="email" type="email" placeholder="john.doe@example.com" required />
                                </div>
                                <div className="space-y-2">
                                    <label
                                        htmlFor="phone"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        Phone
                                    </label>
                                    <Input id="phone" type="tel" placeholder="(555) 123-4567" required />
                                </div>
                                <div className="space-y-2">
                                    <label
                                        htmlFor="vehicle"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        Vehicle Information (Year, Make, Model)
                                    </label>
                                    <Input id="vehicle" placeholder="2018 Toyota Camry" />
                                </div>
                                <div className="space-y-2">
                                    <label
                                        htmlFor="service"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        Service Needed
                                    </label>
                                    <Input id="service" placeholder="Oil Change, Brake Service, etc." />
                                </div>
                                <div className="space-y-2">
                                    <label
                                        htmlFor="message"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        Message
                                    </label>
                                    <Textarea
                                        id="message"
                                        placeholder="Please provide details about your service needs or questions."
                                        className="min-h-[120px]"
                                        required
                                    />
                                </div>
                                <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                                    <Send className="mr-2 h-4 w-4" /> Send Message
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-100 dark:bg-zinc-800">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
                            <p className="max-w-[700px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                                Find answers to common questions about our services.
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 mt-12">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold">Do you offer free estimates?</h3>
                                <p className="text-zinc-500 dark:text-zinc-400">
                                    Yes, we provide free estimates for all repair and maintenance services. You can request an estimate by
                                    phone, email, or by visiting our shop.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold">How long does a typical service take?</h3>
                                <p className="text-zinc-500 dark:text-zinc-400">
                                    Service times vary depending on the type of service needed. Oil changes typically take 30-60 minutes,
                                    while more complex repairs may take several hours or days. We'll provide you with an estimated
                                    completion time when you schedule your service.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold">Do you offer a warranty on your work?</h3>
                                <p className="text-zinc-500 dark:text-zinc-400">
                                    Yes, we stand behind our work with a 24-month/24,000-mile warranty on parts and labor for most
                                    repairs. Some services may have different warranty terms, which we'll discuss with you before
                                    beginning work.
                                </p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold">Do you work on all vehicle makes and models?</h3>
                                <p className="text-zinc-500 dark:text-zinc-400">
                                    Yes, our certified technicians are trained to work on domestic and import vehicles of all makes and
                                    models, including cars, trucks, SUVs, and vans.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold">Do you offer loaner vehicles or shuttle service?</h3>
                                <p className="text-zinc-500 dark:text-zinc-400">
                                    Yes, we offer a complimentary local shuttle service to take you to work or home while your vehicle is
                                    being serviced. We also have loaner vehicles available for longer repairs, subject to availability.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold">How often should I get an oil change?</h3>
                                <p className="text-zinc-500 dark:text-zinc-400">
                                    For most modern vehicles, we recommend an oil change every 5,000-7,500 miles or every 6 months,
                                    whichever comes first. However, this can vary based on your vehicle's make, model, age, and driving
                                    conditions. Consult your owner's manual or ask our technicians for a recommendation specific to your
                                    vehicle.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900 text-white">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Schedule Service?</h2>
                            <p className="max-w-[600px] text-zinc-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Book your appointment online or give us a call today.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <Link href="/booking">
                                <Button size="lg" className="bg-red-600 hover:bg-red-700">
                                    Book Appointment
                                </Button>
                            </Link>
                            <Link href="tel:5551234567">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-white text-white hover:bg-white hover:text-zinc-900"
                                >
                                    Call (555) 123-4567
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

