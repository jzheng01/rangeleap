"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-xl md:text-2xl font-bold tracking-tight text-foreground">RangeLeap</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#services"
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              Services
            </a>
            <a
              href="#how-it-works"
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              How It Works
            </a>
            <a href="#about" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
              About
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              Log in
            </a>
            <Button className="bg-success text-white hover:bg-success/90 rounded-lg px-5 font-semibold shadow-sm">
              Get in touch
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-6 space-y-4 border-t border-border/40">
            <a href="#services" className="block text-base font-medium text-foreground/70 hover:text-foreground transition-colors py-2">
              Services
            </a>
            <a
              href="#how-it-works"
              className="block text-base font-medium text-foreground/70 hover:text-foreground transition-colors py-2"
            >
              How It Works
            </a>
            <a href="#about" className="block text-base font-medium text-foreground/70 hover:text-foreground transition-colors py-2">
              About
            </a>
            <div className="pt-4 space-y-3">
              <Button variant="outline" className="w-full rounded-lg font-semibold">
                Log in
              </Button>
              <Button className="w-full bg-success text-white hover:bg-success/90 rounded-lg font-semibold">
                Get in touch
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
