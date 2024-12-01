"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-2xl">
          OGLAND
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/services" className="hover:text-primary">
            Services
          </Link>
          <Link href="/training" className="hover:text-primary">
            Training
          </Link>
          <Link href="/recruitment" className="hover:text-primary">
            Recruitment
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="hover:text-primary">About</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href="/about">About Us</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/objectives">Our Objectives</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/facilities">Our Facilities</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/equipment">Our Equipment</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/management">Management Team</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/project-team">Project Team</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <nav className="flex flex-col gap-4 mt-8">
              <Link href="/services" onClick={() => setIsOpen(false)}>
                Services
              </Link>
              <Link href="/training" onClick={() => setIsOpen(false)}>
                Training
              </Link>
              <Link href="/recruitment" onClick={() => setIsOpen(false)}>
                Recruitment
              </Link>
              <Link href="/about" onClick={() => setIsOpen(false)}>
                About Us
              </Link>
              <Link href="/objectives" onClick={() => setIsOpen(false)}>
                Our Objectives
              </Link>
              <Link href="/facilities" onClick={() => setIsOpen(false)}>
                Our Facilities
              </Link>
              <Link href="/equipment" onClick={() => setIsOpen(false)}>
                Our Equipment
              </Link>
              <Link href="/management" onClick={() => setIsOpen(false)}>
                Management Team
              </Link>
              <Link href="/project-team" onClick={() => setIsOpen(false)}>
                Project Team
              </Link>
              <Button asChild>
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  Contact Us
                </Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;