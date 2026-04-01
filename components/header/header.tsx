'use client'

import { useState } from 'react'

import { Topbar } from '@/components/header/topbar';
import { MainMenu } from '@/components/header/main-menu'
import { Navbar } from './navbar';


export type NavItem =  {
  label: string;
  items: string[];
}

export function Header({
  navItems
}: {
  navItems: NavItem[];
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="border-b border-border bg-card sticky top-0 z-50">

      <Topbar />

      <MainMenu mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen}/>

      <Navbar 
        navItems={navItems}
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
      />

    </header>
  )
}