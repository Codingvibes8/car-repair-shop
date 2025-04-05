import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Car,
  Clock,
  Settings,
  PenToolIcon as Tool,
  Users,
  Wrench,
  Shield,
  Phone,
  MapPin,
  Mail,
  Calendar,
} from "lucide-react"

export default function Home() {
  return (
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-zinc-900 to-zinc-800 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Expert Auto Repair You Can Trust
                  </h1>
                  <p className="max-w-[600px] text-zinc-200 md:text-xl">
                    Professional service for all makes and models. Our certified technicians keep your vehicle running at
                    peak performance.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/booking">
                    <Button size="lg" className="bg-red-600 hover:bg-red-700">
                      Book Appointment
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button
                        size="lg"
                        variant="outline"
                        className="border-white text-white hover:bg-white hover:text-zinc-900"
                    >
                      Our Services
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-xl">
                <Image
                    src="/mech2.jpg"
                    alt="Mechanic working on a car"
                    fill
                    className="object-cover"
                    priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
                <p className="max-w-[700px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                  Comprehensive auto repair and maintenance services to keep your vehicle in top condition.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Wrench className="h-8 w-8 text-red-600" />
                  <CardTitle>General Repairs</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    From minor fixes to major repairs, our expert technicians handle it all with precision.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/services">
                    <Button variant="ghost" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Settings className="h-8 w-8 text-red-600" />
                  <CardTitle>Engine Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    Comprehensive engine diagnostics, repair, and maintenance to keep your engine running smoothly.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/services/">
                    <Button variant="ghost" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Tool className="h-8 w-8 text-red-600" />
                  <CardTitle>Brake Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    Inspection, repair, and replacement of brake pads, rotors, and complete brake systems.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/services">
                    <Button variant="ghost" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Car className="h-8 w-8 text-red-600" />
                  <CardTitle>Transmission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    Transmission fluid changes, repairs, and complete rebuilds for manual and automatic transmissions.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/services">
                    <Button variant="ghost" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Shield className="h-8 w-8 text-red-600" />
                  <CardTitle>Preventive Maintenance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    Regular maintenance to prevent costly repairs and extend the life of your vehicle.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/services/">
                    <Button variant="ghost" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Clock className="h-8 w-8 text-red-600" />
                  <CardTitle>Diagnostics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    Advanced computer diagnostics to identify and resolve complex vehicle issues.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/services/">
                    <Button variant="ghost" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
            <div className="flex justify-center mt-8">
              <Link href="/services">
                <Button size="lg" className="bg-red-600 hover:bg-red-700">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-100 dark:bg-zinc-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose Us</h2>
                <p className="max-w-[700px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                  We're committed to providing the highest quality service with transparency and integrity.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8">
              <div className="flex flex-col items-center space-y-2 border-2 border-zinc-200 dark:border-zinc-700 p-6 rounded-lg">
                <Users className="h-12 w-12 text-red-600" />
                <h3 className="text-xl font-bold">Certified Technicians</h3>
                <p className="text-center text-zinc-500 dark:text-zinc-400">
                  Our ASE-certified technicians have years of experience and ongoing training.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-2 border-zinc-200 dark:border-zinc-700 p-6 rounded-lg">
                <Shield className="h-12 w-12 text-red-600" />
                <h3 className="text-xl font-bold">Warranty Protection</h3>
                <p className="text-center text-zinc-500 dark:text-zinc-400">
                  All repairs come with a comprehensive warranty on parts and labor.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-2 border-zinc-200 dark:border-zinc-700 p-6 rounded-lg">
                <Tool className="h-12 w-12 text-red-600" />
                <h3 className="text-xl font-bold">Modern Equipment</h3>
                <p className="text-center text-zinc-500 dark:text-zinc-400">
                  We use the latest diagnostic tools and equipment for accurate repairs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Customer Testimonials</h2>
                <p className="max-w-[700px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                  Don't just take our word for it. Here's what our customers have to say.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl mt-8">
              <Tabs defaultValue="tab1" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="tab1">John D.</TabsTrigger>
                  <TabsTrigger value="tab2">Sarah M.</TabsTrigger>
                  <TabsTrigger value="tab3">Robert K.</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1" className="p-6 border rounded-lg mt-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="rounded-full bg-zinc-200 w-12 h-12 flex items-center justify-center">
                        <Users className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold">John D.</h3>
                        <p className="text-sm text-zinc-500">Toyota Camry Owner</p>
                      </div>
                    </div>
                    <p className="italic">
                      "I've been bringing my vehicles here for years. The team is always honest, fair, and does excellent
                      work. They explain everything clearly and never push unnecessary services."
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="tab2" className="p-6 border rounded-lg mt-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="rounded-full bg-zinc-200 w-12 h-12 flex items-center justify-center">
                        <Users className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold">Sarah M.</h3>
                        <p className="text-sm text-zinc-500">Honda Civic Owner</p>
                      </div>
                    </div>
                    <p className="italic">
                      "After a bad experience at a chain repair shop, I found this place and couldn't be happier. They
                      diagnosed my issue correctly the first time and fixed it for less than I expected."
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="tab3" className="p-6 border rounded-lg mt-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="rounded-full bg-zinc-200 w-12 h-12 flex items-center justify-center">
                        <Users className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold">Robert K.</h3>
                        <p className="text-sm text-zinc-500">Ford F-150 Owner</p>
                      </div>
                    </div>
                    <p className="italic">
                      "These guys know trucks! They've maintained my F-150 for over 100,000 miles and it still runs like
                      new. Their preventive maintenance program has saved me thousands in potential repairs."
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Contact/CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
                  <p className="max-w-[600px] text-zinc-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Schedule your appointment today and experience the difference quality service makes.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-red-500" />
                    <span>(555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-red-500" />
                    <span>service@autorepairshop.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-red-500" />
                    <span>123 Repair Lane, Fixitville, ST 12345</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-red-500" />
                    <span>Mon-Fri: 8am-6pm | Sat: 8am-2pm | Sun: Closed</span>
                  </div>
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
              <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-xl">
                <Image
                    src="/mech1.jpg"
                    alt="Auto repair shop exterior"
                    fill
                    className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
  )
}

