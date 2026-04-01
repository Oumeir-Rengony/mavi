'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { ChevronDown, Phone, Mail, MapPin, MessageSquareMore } from 'lucide-react'

const countries = [
   { flag: '\u{1F1F2}\u{1F1FA}', label: 'Mauritius Island (MUR Rs)' },
   { flag: '\u{1F1FA}\u{1F1F8}', label: 'USA (Dollar)' },
   { flag: '\u{1F1E8}\u{1F1E6}', label: 'Canada (Dollar)' },
   { flag: '\u{1F1EC}\u{1F1E7}', label: 'UK (Euro)' },
]


function ContactBar() {
   return (
      <div className="py-6 lg:py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
         {/* <div className="max-w-372 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"> */}
            {/* Customer Service */}
            <div className="flex items-center gap-4 lg:border-r lg:border-border lg:pr-6">
               <div className="flex items-center justify-center shrink-0">
                  <MessageSquareMore className="h-7 w-7 text-[#1D349A]" />
               </div>
               <div>
                  <p className="text-sm font-semibold text-foreground">Customer Service</p>
                  <p className="text-sm text-muted-foreground">Mon-Sat, 9am-6pm EST.</p>
               </div>
            </div>

            {/* Call Us */}
            <div className="flex items-center gap-4 lg:border-r lg:border-border lg:pr-6">
               <div className="flex items-center justify-center shrink-0">
                  <Phone className="h-7 w-7 text-[#1D349A]" />
               </div>
               <div>
                  <p className="text-sm font-semibold text-foreground">Call Us</p>
                  <p className="text-sm text-muted-foreground">+1 888-234-1234 (toll-free)</p>
               </div>
            </div>

            {/* Get in Touch */}
            <div className="flex items-center gap-4 lg:border-r lg:border-border lg:pr-6">
               <div className="flex items-center justify-center shrink-0">
                  <Mail className="h-7 w-7 text-[#1D349A]" />
               </div>
               <div>
                  <p className="text-sm font-semibold text-foreground">Get in Touch</p>
                  <p className="text-sm text-muted-foreground">
                     <Link href="mailto:hello@farhan.com" className="underline hover:text-accent">hello@farhan.com</Link>
                  </p>
               </div>
            </div>

            {/* Address */}
            <div className="flex items-center gap-4">
               <div className="flex items-center justify-center shrink-0">
                  <MapPin className="h-7 w-7 text-[#1D349A]" />
               </div>
               <div>
                  <p className="text-sm font-semibold text-foreground">Address</p>
                  <p className="text-sm text-muted-foreground">382 NE 191st St Mauritius Island</p>
               </div>
            </div>
         {/* </div> */}
      </div>
   )
}

function Newsletter() {
   return (
      <div className="lg:col-span-5">
         <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-2">Join Our Newsletter</h3>
         <p className="text-sm text-muted-foreground mb-5">
            Weekly deals, new gear, and local retailer services
         </p>
         <div className="flex gap-2">
            <Input
               type="email"
               placeholder="Enter your email"
               className="flex-1 rounded-full h-11 px-5 bg-muted/40 border-border"
            />
            <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-full h-11 px-7 font-medium">
               Subscribe
            </Button>
         </div>
         <p className="text-xs text-muted-foreground mt-4">
            By subscribing you agree to the{' '}
            <Link href="#" className="underline hover:text-accent">Terms of Services</Link>
            {' '}and{' '}
            <Link href="#" className="underline hover:text-accent">Privacy Policy.</Link>
         </p>
      </div>
   )
}

function FooterLinks() {
   return (
      <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
         <div>
            <h4 className="font-semibold mb-4 text-foreground">Company</h4>
            <ul className="flex flex-col gap-3">
               {['About us', 'Contact', 'FAQs', 'Blog', 'Find a Store'].map((item) => (
                  <li key={item}>
                     <Link href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">{item}</Link>
                  </li>
               ))}
            </ul>
         </div>
         <div>
            <h4 className="font-semibold mb-4 text-foreground">For Buyers</h4>
            <ul className="flex flex-col gap-3">
               {['Browse Products', 'Book Services', 'Deals & Offers', 'Top-Rated Gear', 'New Arrivals'].map((item) => (
                  <li key={item}>
                     <Link href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">{item}</Link>
                  </li>
               ))}
            </ul>
         </div>
         <div>
            <h4 className="font-semibold mb-4 text-foreground">For Retailers</h4>
            <ul className="flex flex-col gap-3">
               {['Sell Products', 'Offer Services', 'Pricing & Fees', 'Retailer Dashboard', 'Become a Partner'].map((item) => (
                  <li key={item}>
                     <Link href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">{item}</Link>
                  </li>
               ))}
            </ul>
         </div>
      </div>
   )
}

function CountrySelector({
   countryOpen,
   setCountryOpen,
   selectedCountry,
   setSelectedCountry
}: any) {
   return (
      <div className="relative">
         <button
            className="flex items-center gap-2 text-sm text-foreground"
            onClick={() => setCountryOpen(!countryOpen)}
         >
            <span className="text-lg">{selectedCountry.flag}</span>
            <span>{selectedCountry.label}</span>
            <ChevronDown className={`h-4 w-4 transition-transform ${countryOpen ? 'rotate-180' : ''}`} />
         </button>
         {countryOpen && (
            <div className="absolute bottom-full mb-2 left-0 z-50 bg-card border border-border rounded-lg shadow-lg py-1 min-w-[220px]">
               {countries.map((country) => (
                  <button
                     key={country.label}
                     className={`flex items-center gap-2 w-full px-4 py-2.5 text-sm hover:bg-muted transition-colors text-left ${selectedCountry.label === country.label ? 'bg-muted font-medium' : ''}`}
                     onClick={() => {
                        setSelectedCountry(country)
                        setCountryOpen(false)
                     }}
                  >
                     <span className="text-lg">{country.flag}</span>
                     <span>{country.label}</span>
                  </button>
               ))}
            </div>
         )}
      </div>
   )
}

function PaymentIcons() {
   return (
      <div className="flex items-center gap-2">
         {/* Visa */}
         <div className="h-8 w-12 rounded border border-border  flex items-center justify-center">
            <span className="text-[10px] font-bold text-[#1A1F71] tracking-wider">VISA</span>
         </div>
         {/* Mastercard */}
         <div className="h-8 w-12 rounded border border-border  flex items-center justify-center">
            <div className="flex -space-x-1.5">
               <div className="h-4 w-4 rounded-full bg-[#EB001B]" />
               <div className="h-4 w-4 rounded-full bg-[#F79E1B] opacity-80" />
            </div>
         </div>
         {/* Amex */}
         <div className="h-8 w-12 rounded border border-border bg-[#006FCF] flex items-center justify-center">
            <span className="text-[8px] font-bold text-[#ffffff] tracking-wider">AMEX</span>
         </div>
         {/* PayPal */}
         <div className="h-8 w-12 rounded border border-border  flex items-center justify-center">
            <span className="text-[10px] font-bold text-[#003087]">Pay</span>
            <span className="text-[10px] font-bold text-[#009CDE]">Pal</span>
         </div>
         {/* Diners */}
         <div className="h-8 w-12 rounded border border-border  flex items-center justify-center">
            <div className="h-5 w-5 rounded-full border-2 border-[#0079BE] flex items-center justify-center">
               <div className="h-2.5 w-0.5 bg-[#0079BE] rounded-full" />
            </div>
         </div>
         {/* Discover */}
         <div className="h-8 w-12 rounded border border-border  flex items-center justify-center">
            <span className="text-[7px] font-bold text-[#FF6000] tracking-tight">DISCOVER</span>
         </div>
      </div>
   )
}

function SocialIcons() {
   return (
      <div className="flex items-center gap-3">
         {[
            { label: 'Facebook', path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
            { label: 'X', path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
            { label: 'Instagram', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
            { label: 'TikTok', path: 'M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z' },
            { label: 'YouTube', path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
         ].map((social) => (
            <Link
               key={social.label}
               href="#"
               className="h-10 w-10 rounded-full border border-border flex items-center justify-center text-foreground hover:text-accent hover:border-accent transition-colors"
               aria-label={social.label}
            >
               <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d={social.path} /></svg>
            </Link>
         ))}
      </div>
   )
}

export function Footer() {
   const [selectedCountry, setSelectedCountry] = useState(countries[0])
   const [countryOpen, setCountryOpen] = useState(false)

   return (
      <footer className="max-w-372 px-4 lg:px-6 mx-auto">

         <ContactBar />

         {/* Divider */}
         <div className="mx-auto">
            <hr className="" />
         </div>
 
         {/* Newsletter + Links */}
         <div className="py-10 lg:py-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

               <Newsletter />

               <FooterLinks />

            </div>
         </div>

         {/* Bottom Section */}
         <div className="mx-auto pb-6">
            {/* Country + Payment + Social */}
            <div className="max-w-372 mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-12">
               <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">

                  <CountrySelector
                     countryOpen={countryOpen}
                     setCountryOpen={setCountryOpen}
                     selectedCountry={selectedCountry}
                     setSelectedCountry={setSelectedCountry}
                  />

                  <PaymentIcons />

               </div>

               <SocialIcons/>
            </div>

            {/* Copyright Bar */}
            <div className="max-w-372 mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground font-medium">
               <p>{'© 2026 Farhan. All rights reserved'}</p>
               <div className="flex items-center gap-6">
                  <Link href="#" className="hover:text-accent transition-colors">Terms of Service</Link>
                  <Link href="#" className="hover:text-accent transition-colors">Privacy Policy</Link>
               </div>
            </div>

         </div>
      </footer>
   )
}
