import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Auto Repair Workshop | Expert Car Repair & Maintenance",
    description:
        "Professional auto repair services for all makes and models. Certified technicians, quality parts, and excellent customer service.",
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <Header />
            <main>{children}</main>
            <Footer />
        </ThemeProvider>
        </body>
        </html>
    )
}


