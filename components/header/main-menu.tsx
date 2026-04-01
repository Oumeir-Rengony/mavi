import { Search, MapPin, User, ShoppingCart, ChevronDown, Menu, X, Waves } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Dispatch, SetStateAction } from 'react'


export function MainMenu({
   mobileMenuOpen,
   setMobileMenuOpen
}: {
   mobileMenuOpen: boolean,
   setMobileMenuOpen: Dispatch<SetStateAction<boolean>>
}) {

   return (
      <div className="mx-auto px-4 lg:px-6 xl:px-12 py-3 lg:py-4">
         <div className="flex items-center gap-4 lg:gap-8">
            {/* Mobile Menu Button */}
            <button
               className="lg:hidden"
               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
               aria-label="Toggle menu"
            >
               {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            {/* Logo */}
            <Link href="/" className="text-xl lg:text-2xl font-bold text-foreground shrink-0">
               LOGO
            </Link>

            {/* Search - Desktop */}
            <div className="hidden lg:flex flex-1 max-w-2xl items-center">
               <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                     <Button variant="outline" className="border-r-0 rounded-r-none whitespace-nowrap bg-muted/50">
                        All Categories
                        <ChevronDown className="ml-2 h-4 w-4" />
                     </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-56">
                     <DropdownMenuItem>All Categories</DropdownMenuItem>
                     <DropdownMenuItem>Fishing Gear</DropdownMenuItem>
                     <DropdownMenuItem>Boating Gear</DropdownMenuItem>
                     <DropdownMenuItem>Apparel</DropdownMenuItem>
                  </DropdownMenuContent>
               </DropdownMenu>
               <div className="flex-1 relative">
                  <Input
                     type="search"
                     placeholder="Search fishing & boating gear.."
                     className="w-full pr-10 rounded-l-none border-l-0"
                  />
                  <Button size="icon" variant="ghost" className="absolute right-1 top-1/2 -translate-y-1/2">
                     <Search className="h-5 w-5" />
                  </Button>
               </div>
            </div>

            {/* Mobile Search */}
            <div className="flex-1 lg:hidden">
               <div className="relative">
                  <Input type="search" placeholder="Search gear.." className="w-full pr-10 h-9 text-sm" />
                  <Button size="icon" variant="ghost" className="absolute right-0 top-1/2 -translate-y-1/2 h-9 w-9">
                     <Search className="h-4 w-4" />
                  </Button>
               </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 lg:gap-6 shrink-0">
               <Link href="#" className="hidden lg:flex items-center gap-2 text-sm hover:text-accent">
                  <Waves className="h-5 w-5" />
                  <span className="whitespace-nowrap">Mavi Club</span>
               </Link>
               <Link href="#" className="hidden lg:flex items-center gap-2 text-sm hover:text-accent">
                  <User className="h-5 w-5" />
                  <span className="whitespace-nowrap">Sign in/ Register</span>
               </Link>
               <Link href="#" className="flex lg:hidden">
                  <User className="h-5 w-5" />
               </Link>
               <Link href="#" className="relative">
                  <ShoppingCart className="h-5 w-5 lg:h-6 lg:w-6" />
                  <span className="absolute -top-2 -right-2 bg-destructive text-[#ffffff] text-xs rounded-full h-4 w-4 lg:h-5 lg:w-5 flex items-center justify-center font-semibold text-[10px] lg:text-xs">
                     1
                  </span>
               </Link>
            </div>
         </div>
      </div>
   )
}