'use client'

import { Dispatch, SetStateAction, useState } from 'react'
import { MapPin, User, ChevronDown, ChevronRight, Waves } from 'lucide-react'
import Link from 'next/link'
import { NavItem } from '@/components/header/header';


export function Navbar({
  navItems,
  mobileMenuOpen,
  setMobileMenuOpen
}: {
  navItems: NavItem[],
  mobileMenuOpen: boolean,
  setMobileMenuOpen: Dispatch<SetStateAction<boolean>>
}) {
  const [expandedMobileNav, setExpandedMobileNav] = useState<string | null>(null)
  const [hoveredNav, setHoveredNav] = useState<string | null>(null)

  const toggleMobileNav = (label: string) => {
    setExpandedMobileNav(expandedMobileNav === label ? null : label)
  }

  return (
    <>

      {/* Desktop Navigation with Hover Submenus */}
      <nav className="border-t border-border hidden lg:block">
        <div className="mx-auto px-6 xl:px-12">
          <div className="flex items-center gap-8 py-3">
            {navItems.map((nav) => (
              <div
                key={nav.label}
                className="relative"
                onMouseEnter={() => setHoveredNav(nav.label)}
                onMouseLeave={() => setHoveredNav(null)}
              >
                <button className="flex items-center gap-1.5 text-sm font-semibold hover:text-accent transition-colors">
                  {nav.label}
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform ${hoveredNav === nav.label ? 'rotate-180' : ''}`} />
                </button>
                {hoveredNav === nav.label && (
                  <div className="absolute top-full left-0 pt-2 z-50">
                    <div className="bg-card border border-border rounded-lg shadow-lg py-2 min-w-55">
                      {nav.items.map((item) => (
                        <Link
                          key={item}
                          href="#"
                          className="flex items-center px-4 py-2.5 text-sm text-card-foreground hover:bg-muted transition-colors"
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link href="#" className="text-sm font-semibold text-destructive hover:underline">
              Retailer promotions
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[100px] z-40 bg-card overflow-y-auto">
          <nav className="px-4 py-4">
            <div className="flex flex-col">
              {navItems.map((nav) => (
                <div key={nav.label}>
                  <button
                    className="flex items-center justify-between w-full py-3.5 px-2 text-left font-medium border-b border-border"
                    onClick={() => toggleMobileNav(nav.label)}
                  >
                    <span>{nav.label}</span>
                    <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${expandedMobileNav === nav.label ? 'rotate-180' : ''}`} />
                  </button>
                  {expandedMobileNav === nav.label && (
                    <div className="bg-muted">
                      {nav.items.map((item) => (
                        <Link
                          key={item}
                          href="#"
                          className="flex items-center gap-2 py-3 px-6 text-sm text-muted-foreground hover:text-foreground border-b border-border/50"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <ChevronRight className="h-3 w-3" />
                          {item}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="#"
                className="py-3.5 px-2 font-medium text-destructive border-b border-border"
                onClick={() => setMobileMenuOpen(false)}
              >
                Retailer promotions
              </Link>
            </div>

            <div className="mt-6 flex flex-col gap-4 px-2">
              <Link href="#" className="flex items-center gap-3 text-sm" onClick={() => setMobileMenuOpen(false)}>
                <Waves className="h-5 w-5" />
                Mavi Club
              </Link>
              <Link href="#" className="flex items-center gap-3 text-sm" onClick={() => setMobileMenuOpen(false)}>
                <User className="h-5 w-5" />
                Sign in / Register
              </Link>
            </div>

            <div className="mt-6 px-2 flex items-center gap-2 text-sm text-muted-foreground">
              <span>{'🇲🇺'}</span>
              <span>Mauritius Island (MUR Rs)</span>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}