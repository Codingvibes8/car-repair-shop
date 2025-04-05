"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { format } from "date-fns"
import { CalendarIcon, Clock, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

export default function BookingPage() {
    const [date, setDate] = useState<Date>()
    const [step, setStep] = useState(1)
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setSubmitted(true)
    }

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-100 dark:bg-zinc-800">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Book Your Appointment</h1>
                            <p className="max-w-[700px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                                Schedule your service appointment online in just a few easy steps.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Booking Form Section */}
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6">
                    {!submitted ? (
                        <div className="mx-auto max-w-3xl">
                            <div className="mb-8">
                                <div className="flex items-center justify-between mb-4">
                                    <div className={`flex items-center ${step >= 1 ? "text-red-600" : "text-zinc-400"}`}>
                                        <div
                                            className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${step >= 1 ? "border-red-600 bg-red-600 text-white" : "border-zinc-300"}`}
                                        >
                                            1
                                        </div>
                                        <span className="ml-2 font-medium">Service Details</span>
                                    </div>
                                    <div className={`h-0.5 w-16 ${step >= 2 ? "bg-red-600" : "bg-zinc-300"}`}></div>
                                    <div className={`flex items-center ${step >= 2 ? "text-red-600" : "text-zinc-400"}`}>
                                        <div
                                            className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${step >= 2 ? "border-red-600 bg-red-600 text-white" : "border-zinc-300"}`}
                                        >
                                            2
                                        </div>
                                        <span className="ml-2 font-medium">Personal Info</span>
                                    </div>
                                    <div className={`h-0.5 w-16 ${step >= 3 ? "bg-red-600" : "bg-zinc-300"}`}></div>
                                    <div className={`flex items-center ${step >= 3 ? "text-red-600" : "text-zinc-400"}`}>
                                        <div
                                            className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${step >= 3 ? "border-red-600 bg-red-600 text-white" : "border-zinc-300"}`}
                                        >
                                            3
                                        </div>
                                        <span className="ml-2 font-medium">Confirmation</span>
                                    </div>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit}>
                                {step === 1 && (
                                    <div className="space-y-6">
                                        <div className="space-y-2">
                                            <label
                                                htmlFor="service-type"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                Service Type
                                            </label>
                                            <Select>
                                                <SelectTrigger id="service-type">
                                                    <SelectValue placeholder="Select a service" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="oil-change">Oil Change</SelectItem>
                                                    <SelectItem value="brake-service">Brake Service</SelectItem>
                                                    <SelectItem value="tire-service">Tire Service</SelectItem>
                                                    <SelectItem value="engine-repair">Engine Repair</SelectItem>
                                                    <SelectItem value="transmission">Transmission Service</SelectItem>
                                                    <SelectItem value="diagnostic">Diagnostic</SelectItem>
                                                    <SelectItem value="maintenance">Scheduled Maintenance</SelectItem>
                                                    <SelectItem value="other">Other</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div className="space-y-2">
                                            <label
                                                htmlFor="date"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                Preferred Date
                                            </label>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <Button
                                                        variant={"outline"}
                                                        className={cn(
                                                            "w-full justify-start text-left font-normal",
                                                            !date && "text-muted-foreground",
                                                        )}
                                                    >
                                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                                        {date ? format(date, "PPP") : <span>Select a date</span>}
                                                    </Button>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0">
                                                    <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                                                </PopoverContent>
                                            </Popover>
                                        </div>

                                        <div className="space-y-2">
                                            <label
                                                htmlFor="time"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                Preferred Time
                                            </label>
                                            <Select>
                                                <SelectTrigger id="time">
                                                    <SelectValue placeholder="Select a time" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="8:00">8:00 AM</SelectItem>
                                                    <SelectItem value="9:00">9:00 AM</SelectItem>
                                                    <SelectItem value="10:00">10:00 AM</SelectItem>
                                                    <SelectItem value="11:00">11:00 AM</SelectItem>
                                                    <SelectItem value="12:00">12:00 PM</SelectItem>
                                                    <SelectItem value="13:00">1:00 PM</SelectItem>
                                                    <SelectItem value="14:00">2:00 PM</SelectItem>
                                                    <SelectItem value="15:00">3:00 PM</SelectItem>
                                                    <SelectItem value="16:00">4:00 PM</SelectItem>
                                                    <SelectItem value="17:00">5:00 PM</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div className="space-y-2">
                                            <label
                                                htmlFor="vehicle-year"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                Vehicle Year
                                            </label>
                                            <Input id="vehicle-year" placeholder="2018" />
                                        </div>

                                        <div className="space-y-2">
                                            <label
                                                htmlFor="vehicle-make"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                Vehicle Make
                                            </label>
                                            <Input id="vehicle-make" placeholder="Toyota" />
                                        </div>

                                        <div className="space-y-2">
                                            <label
                                                htmlFor="vehicle-model"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                Vehicle Model
                                            </label>
                                            <Input id="vehicle-model" placeholder="Camry" />
                                        </div>

                                        <div className="space-y-2">
                                            <label
                                                htmlFor="service-details"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                Service Details
                                            </label>
                                            <Textarea
                                                id="service-details"
                                                placeholder="Please provide any additional details about the service you need."
                                                className="min-h-[120px]"
                                            />
                                        </div>

                                        <Button type="button" className="w-full bg-red-600 hover:bg-red-700" onClick={() => setStep(2)}>
                                            Next Step
                                        </Button>
                                    </div>
                                )}

                                {step === 2 && (
                                    <div className="space-y-6">
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
                                                htmlFor="address"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                Address
                                            </label>
                                            <Input id="address" placeholder="123 Main St" />
                                        </div>

                                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                                            <div className="space-y-2">
                                                <label
                                                    htmlFor="city"
                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    City
                                                </label>
                                                <Input id="city" placeholder="Anytown" />
                                            </div>
                                            <div className="space-y-2">
                                                <label
                                                    htmlFor="state"
                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    State
                                                </label>
                                                <Input id="state" placeholder="CA" />
                                            </div>
                                            <div className="space-y-2">
                                                <label
                                                    htmlFor="zip"
                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    ZIP Code
                                                </label>
                                                <Input id="zip" placeholder="12345" />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label
                                                htmlFor="special-requests"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                Special Requests
                                            </label>
                                            <Textarea
                                                id="special-requests"
                                                placeholder="Any special requests or accommodations needed?"
                                                className="min-h-[120px]"
                                            />
                                        </div>

                                        <div className="flex gap-4">
                                            <Button type="button" variant="outline" className="flex-1" onClick={() => setStep(1)}>
                                                Back
                                            </Button>
                                            <Button type="button" className="flex-1 bg-red-600 hover:bg-red-700" onClick={() => setStep(3)}>
                                                Next Step
                                            </Button>
                                        </div>
                                    </div>
                                )}

                                {step === 3 && (
                                    <div className="space-y-6">
                                        <div className="rounded-lg border p-6">
                                            <h3 className="text-lg font-bold mb-4">Appointment Summary</h3>
                                            <div className="space-y-4">
                                                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                                                    <div>
                                                        <p className="text-sm font-medium text-zinc-500">Service Type:</p>
                                                        <p>Oil Change</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-medium text-zinc-500">Date & Time:</p>
                                                        <p>{date ? format(date, "PPP") : "Not selected"} at 10:00 AM</p>
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                                                    <div>
                                                        <p className="text-sm font-medium text-zinc-500">Vehicle:</p>
                                                        <p>2018 Toyota Camry</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-medium text-zinc-500">Customer:</p>
                                                        <p>John Doe</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className="text-sm font-medium text-zinc-500">Contact:</p>
                                                    <p>john.doe@example.com | (555) 123-4567</p>
                                                </div>
                                                <div>
                                                    <p className="text-sm font-medium text-zinc-500">Service Details:</p>
                                                    <p>Regular oil change with synthetic oil and filter replacement.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <div className="flex items-center space-x-2">
                                                <input
                                                    type="checkbox"
                                                    id="terms"
                                                    className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-600"
                                                />
                                                <label htmlFor="terms" className="text-sm text-zinc-500">
                                                    I agree to the{" "}
                                                    <Link href="/" className="text-red-600 hover:underline">
                                                        Terms of Service
                                                    </Link>{" "}
                                                    and{" "}
                                                    <Link href="/" className="text-red-600 hover:underline">
                                                        Privacy Policy
                                                    </Link>
                                                    .
                                                </label>
                                            </div>
                                        </div>

                                        <div className="flex gap-4">
                                            <Button type="button" variant="outline" className="flex-1" onClick={() => setStep(2)}>
                                                Back
                                            </Button>
                                            <Button type="submit" className="flex-1 bg-red-600 hover:bg-red-700">
                                                Confirm Appointment
                                            </Button>
                                        </div>
                                    </div>
                                )}
                            </form>
                        </div>
                    ) : (
                        <div className="mx-auto max-w-3xl text-center">
                            <div className="flex flex-col items-center justify-center space-y-4">
                                <div className="rounded-full bg-green-100 p-4">
                                    <CheckCircle className="h-12 w-12 text-green-600" />
                                </div>
                                <h2 className="text-3xl font-bold">Appointment Confirmed!</h2>
                                <p className="text-zinc-500 dark:text-zinc-400 max-w-[600px]">
                                    Thank you for scheduling your appointment with Auto Repair Workshop. We've sent a confirmation email
                                    to your inbox with all the details.
                                </p>
                                <div className="rounded-lg border p-6 w-full mt-4">
                                    <h3 className="text-lg font-bold mb-4">Appointment Details</h3>
                                    <div className="space-y-4">
                                        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                                            <div>
                                                <p className="text-sm font-medium text-zinc-500">Service Type:</p>
                                                <p>Oil Change</p>
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-zinc-500">Date & Time:</p>
                                                <p>{date ? format(date, "PPP") : "Not selected"} at 10:00 AM</p>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                                            <div>
                                                <p className="text-sm font-medium text-zinc-500">Vehicle:</p>
                                                <p>2018 Toyota Camry</p>
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-zinc-500">Confirmation #:</p>
                                                <p>
                                                    ARW-
                                                    {Math.floor(Math.random() * 10000)
                                                        .toString()
                                                        .padStart(4, "0")}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 justify-center mt-4">
                                            <Clock className="h-5 w-5 text-red-600" />
                                            <p className="text-sm">Please arrive 10 minutes before your scheduled appointment time.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-4 mt-4">
                                    <Link href="/">
                                        <Button variant="outline">Return to Home</Button>
                                    </Link>
                                    <Link href="/services">
                                        <Button className="bg-red-600 hover:bg-red-700">View Our Services</Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </div>
    )
}

