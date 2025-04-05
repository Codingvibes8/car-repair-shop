import Link from "next/link"
import { Wrench, Phone, Mail, MapPin, Clock} from "lucide-react"
import Image from "next/image"
export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-zinc-900 text-white">
            <div className="container px-4 py-12 md:py-16">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Wrench className="h-6 w-6 text-red-600" />
                            <span className="font-bold text-xl">Auto Repair Workshop</span>
                        </div>
                        <p className="text-zinc-400">
                            Professional auto repair services for all makes and models. Quality work, fair prices, and excellent
                            customer service.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-zinc-400 hover:text-white">
                                <Image src={'/facebook.svg'}  height={30} width={30} alt={'facebook'} className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link href="#" className="text-zinc-400 hover:text-white">
                                <Image src={'/instagram.svg'}  height={30} width={30} alt={'instagram'} className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link href="#" className="text-zinc-400 hover:text-white">
                                <Image src={'/twitter.svg'}  height={30} width={30} alt={'twitter'} className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                            <Link href="#" className="text-zinc-400 hover:text-white">
                                <Image src={'/youtube.svg'}  height={30} width={30} alt={'youtube'} className="h-5 w-5" />
                                <span className="sr-only">YouTube</span>
                            </Link>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-zinc-400 hover:text-white">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-zinc-400 hover:text-white">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-zinc-400 hover:text-white">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-zinc-400 hover:text-white">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/booking" className="text-zinc-400 hover:text-white">
                                    Book Appointment
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold">Services</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/services/" className="text-zinc-400 hover:text-white">
                                    General Repairs
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/" className="text-zinc-400 hover:text-white">
                                    Engine Service
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/" className="text-zinc-400 hover:text-white">
                                    Brake Service
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/" className="text-zinc-400 hover:text-white">
                                    Transmission
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/" className="text-zinc-400 hover:text-white">
                                    Preventive Maintenance
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/" className="text-zinc-400 hover:text-white">
                                    Diagnostics
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold">Contact Info</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2">
                                <Phone className="h-5 w-5 text-red-500" />
                                <span className="text-zinc-400">(555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="h-5 w-5 text-red-500" />
                                <span className="text-zinc-400">service@autorepairshop.com</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <MapPin className="h-5 w-5 text-red-500" />
                                <span className="text-zinc-400">123 Repair Lane, Fixitville, ST 12345</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Clock className="h-5 w-5 text-red-500" />
                                <span className="text-zinc-400">Mon-Fri: 8am-6pm | Sat: 8am-2pm | Sun: Closed</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-zinc-400 text-sm">&copy; {currentYear} Auto Repair Workshop. All rights reserved.</p>
                    <div className="flex gap-4">
                        <Link href="/privacy" className="text-zinc-400 hover:text-white text-sm">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-zinc-400 hover:text-white text-sm">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

