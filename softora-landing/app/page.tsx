import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Briefcase,
  CheckCircle,
  Code,
  FileCode,
  Github,
  Laptop,
  LayoutGrid,
  Linkedin,
  MapPin,
  Phone,
  Settings,
  ShoppingCart,
  Store,
  Tablet,
  Zap,
  Send,
} from "lucide-react"
import { Header } from "@/components/header"
import { AnimatedGradient } from "@/components/animated-gradient"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-20 md:py-32 lg:py-40 overflow-hidden dark:bg-gray-900 bg-rose-50">
          <AnimatedGradient />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="space-y-2 animate-fade-in">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-rose-600 dark:text-rose-400">
                  Softora
                </h1>
                <p className="text-xl font-medium md:text-2xl dark:text-gray-200">Smart Software for Small Teams</p>
              </div>
              <p className="max-w-[700px] dark:text-gray-300 md:text-xl animate-fade-in-delay">
                We build custom tools for schools, shops, and businesses using AI-powered development.
              </p>
              <div className="animate-bounce-subtle mt-12">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-rose-600 dark:text-rose-400"
                >
                  <path
                    d="M12 5L12 19M12 19L19 12M12 19L5 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl dark:text-white">About Softora</h2>
                <p className="text-gray-600 dark:text-gray-300 md:text-lg">
                  Softora is a local tech brand based in Bahir Dar. We create affordable, fast, and reliable software
                  solutions for real-world problems — powered by modern tools and AI.
                </p>
                <p className="text-gray-600 dark:text-gray-300 md:text-lg">
                  We aim to help schools, pharmacies, and small teams do more with less through custom software
                  solutions.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-md aspect-square overflow-hidden rounded-full border-8 border-rose-100 dark:border-rose-900">
                  <Image src="/images/about-software.png" alt="About Softora" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl dark:text-white">Our Services</h2>
                <p className="max-w-[700px] text-gray-600 dark:text-gray-300 md:text-lg">
                  We offer a variety of software solutions tailored to your specific needs and budget.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow dark:bg-gray-800 dark:text-gray-100">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-rose-100 text-rose-700 dark:bg-rose-900 dark:text-rose-300">
                    <Code className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold">Custom Web & Mobile Apps</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Affordable, custom-built websites and mobile applications tailored to your specific business needs.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow dark:bg-gray-800 dark:text-gray-100">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-rose-100 text-rose-700 dark:bg-rose-900 dark:text-rose-300">
                    <LayoutGrid className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold">No-Code & Low-Code Tools</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Quick and cost-effective business tools built with no-code platforms like Bubble, Adalo, or
                    OutSystems.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow dark:bg-gray-800 dark:text-gray-100">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-rose-100 text-rose-700 dark:bg-rose-900 dark:text-rose-300">
                    <Store className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold">Niche SaaS Solutions</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Targeted software-as-a-service solutions for specific industries like inventory management or CRM
                    systems.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow dark:bg-gray-800 dark:text-gray-100">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-rose-100 text-rose-700 dark:bg-rose-900 dark:text-rose-300">
                    <FileCode className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold">WordPress Themes & Plugins</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Custom WordPress solutions to enhance your website's functionality and appearance.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow dark:bg-gray-800 dark:text-gray-100">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-rose-100 text-rose-700 dark:bg-rose-900 dark:text-rose-300">
                    <Zap className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold">Automation Scripts & Tools</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Time-saving automation tools for repetitive tasks, data processing, and business workflows.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow dark:bg-gray-800 dark:text-gray-100">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-rose-100 text-rose-700 dark:bg-rose-900 dark:text-rose-300">
                    <Laptop className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold">Desktop Applications</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Productivity tools, utilities, and specialized software for Windows, Mac, and Linux.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow md:col-span-1 dark:bg-gray-800 dark:text-gray-100">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-rose-100 text-rose-700 dark:bg-rose-900 dark:text-rose-300">
                    <ShoppingCart className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold">E-commerce Solutions</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Custom integrations, extensions, and tools for Shopify, WooCommerce, and other e-commerce platforms.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow md:col-span-1 dark:bg-gray-800 dark:text-gray-100">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-rose-100 text-rose-700 dark:bg-rose-900 dark:text-rose-300">
                    <Tablet className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold">Digital Products & Templates</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Ready-to-use digital assets, templates, and resources for businesses and creators.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow md:col-span-1 dark:bg-gray-800 dark:text-gray-100">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-rose-100 text-rose-700 dark:bg-rose-900 dark:text-rose-300">
                    <Settings className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold">Maintenance & Support</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Ongoing maintenance, updates, and technical support for your existing software systems.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl dark:text-white">Our Approach</h2>
                <p className="max-w-[700px] text-gray-600 dark:text-gray-300 md:text-lg">
                  How we work with you to create the perfect software solution
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-rose-100 text-rose-700 dark:bg-rose-900 dark:text-rose-300 text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold dark:text-white">Start Small</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We focus on specific problems and solutions rather than trying to solve everything at once.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-rose-100 text-rose-700 dark:bg-rose-900 dark:text-rose-300 text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold dark:text-white">Build MVP First</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We create a simple, functional version to gather feedback before full development.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-rose-100 text-rose-700 dark:bg-rose-900 dark:text-rose-300 text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold dark:text-white">Affordable Pricing</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We offer competitive rates that work for small businesses and startups.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-rose-100 text-rose-700 dark:bg-rose-900 dark:text-rose-300 text-xl font-bold">
                  4
                </div>
                <h3 className="text-xl font-bold dark:text-white">Personalized Support</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We provide exceptional customer service and ongoing assistance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-rose-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl dark:text-white">Get In Touch</h2>
                <p className="max-w-[700px] text-gray-600 dark:text-gray-300 md:text-lg">
                  Ready to get your own custom software? Let's talk about your idea — we'll build it fast and
                  affordably.
                </p>
              </div>
              <Link href="https://t.me/meareg_official" target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#0088cc] hover:bg-[#0077b5]">
                  <Send className="mr-2 h-4 w-4" /> Contact on Telegram
                </Button>
              </Link>
              <div className="flex flex-wrap items-center justify-center mt-6 gap-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">Fast Delivery</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">Affordable Pricing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">Local Support</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="w-full py-12 md:py-24 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl dark:text-white">Meet the Founder</h2>
              </div>
              <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
                <div className="flex flex-col items-center space-y-4">
                  <div className="relative w-48 h-48 overflow-hidden rounded-full border-4 border-rose-100 dark:border-rose-900">
                    <Image src="/images/founder.png" alt="Meareg Teame" fill className="object-cover" />
                  </div>
                  <div className="flex space-x-4">
                    <Link href="https://www.linkedin.com/in/meareg-teame/" target="_blank" rel="noopener noreferrer">
                      <div className="p-2 rounded-full bg-[#0077b5] text-white hover:bg-[#005f8d] transition-colors">
                        <Linkedin className="h-5 w-5" />
                      </div>
                    </Link>
                    <Link href="https://github.com/Meargteame" target="_blank" rel="noopener noreferrer">
                      <div className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-900 transition-colors dark:bg-gray-700 dark:hover:bg-gray-600">
                        <Github className="h-5 w-5" />
                      </div>
                    </Link>
                    <Link href="https://t.me/meareg_official" target="_blank" rel="noopener noreferrer">
                      <div className="p-2 rounded-full bg-[#0088cc] text-white hover:bg-[#0077b5] transition-colors">
                        <Send className="h-5 w-5" />
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="space-y-4 text-left">
                  <h3 className="text-2xl font-bold dark:text-white">Meareg Teame</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Full-Stack Software Developer and IT Professional with expertise in modern web technologies and
                    AI-powered development. Meareg is a passionate engineer dedicated to creating affordable, efficient
                    software solutions for small businesses and organizations.
                  </p>
                  <div className="space-y-3 pt-2">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                      <span className="text-gray-600 dark:text-gray-300">+251 974 158 040</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                      <span className="text-gray-600 dark:text-gray-300">Addis Ababa, Megenagna</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Briefcase className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                      <span className="text-gray-600 dark:text-gray-300">
                        Full-Stack Developer, A2SV & ALX_SE Alumni
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 bg-gray-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="flex items-center space-x-2">
              <Briefcase className="h-6 w-6" />
              <span className="text-xl font-bold">Softora</span>
            </div>
            <div className="flex space-x-4">
              <Link href="https://www.linkedin.com/in/meareg-teame/" target="_blank" rel="noopener noreferrer">
                <div className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors">
                  <Linkedin className="h-4 w-4" />
                </div>
              </Link>
              <Link href="https://github.com/Meargteame" target="_blank" rel="noopener noreferrer">
                <div className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors">
                  <Github className="h-4 w-4" />
                </div>
              </Link>
              <Link href="https://t.me/meareg_official" target="_blank" rel="noopener noreferrer">
                <div className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors">
                  <Send className="h-4 w-4" />
                </div>
              </Link>
            </div>
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} Softora. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
