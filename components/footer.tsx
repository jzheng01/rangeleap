'use client'

import { useState } from 'react'
import { CookieSettings } from './cookie-settings'

export function Footer() {
  const [cookieSettingsOpen, setCookieSettingsOpen] = useState(false)
  return (
    <footer className="border-t border-border/40 bg-background px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4 md:col-span-1">
            <div className="text-xl font-bold text-foreground">RangeLeap</div>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Premium supply chain partner helping founders turn ideas into exceptional brands.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground text-sm">Services</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  AI & Hardware
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  DTC Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Private Label
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Global Export
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground text-sm">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground text-sm">Resources</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  API Reference
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">{"© 2025 RangeLeap. All rights reserved."}</p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="/privacy-policy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-foreground transition-colors" onClick={(e) => {
              e.preventDefault()
              setCookieSettingsOpen(true)
            }}>
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
      <CookieSettings open={cookieSettingsOpen} onOpenChange={setCookieSettingsOpen} />
    </footer>
  )
}
