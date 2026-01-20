'use client'

import React, { useState, useEffect } from 'react'
import { Dialog, DialogContent, DialogOverlay, DialogPortal } from '@radix-ui/react-dialog'
import { Checkbox } from '@radix-ui/react-checkbox'
import { Label } from '@radix-ui/react-label'
import { Button } from '@/components/ui/button'
import { Cookie } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CookieConsentProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

interface CookiePreferences {
  essential: boolean
  analytics: boolean
  marketing: boolean
}

interface CookieBannerProps {
  onSettingsClick: () => void
}

export function CookieBanner({ onSettingsClick }: CookieBannerProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: true,
    marketing: false
  })

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      setIsVisible(true)
    } else {
      setPreferences(JSON.parse(consent))
    }
  }, [])

  const handleAcceptAll = () => {
    const newPreferences: CookiePreferences = {
      essential: true,
      analytics: true,
      marketing: true
    }
    localStorage.setItem('cookieConsent', JSON.stringify(newPreferences))
    setPreferences(newPreferences)
    setIsVisible(false)
  }

  const handleDeclineAll = () => {
    const newPreferences: CookiePreferences = {
      essential: true,
      analytics: false,
      marketing: false
    }
    localStorage.setItem('cookieConsent', JSON.stringify(newPreferences))
    setPreferences(newPreferences)
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border/40 p-4 md:p-6 shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex items-start gap-4">
          <Cookie className="h-6 w-6 text-muted-foreground mt-1" />
          <div>
            <h3 className="font-semibold text-foreground text-base mb-1">Cookie Consent</h3>
            <p className="text-sm text-muted-foreground max-w-md">
              We use cookies to enhance your experience, analyze traffic, and personalize content. You can manage your preferences below.
            </p>
          </div>
        </div>
        <div className="flex gap-3 flex-wrap">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleDeclineAll}
            className="border border-border"
          >
            Decline All
          </Button>
          <Button
            variant="secondary"
            size="sm"
            onClick={handleAcceptAll}
          >
            Accept All
          </Button>
          <Button
            size="sm"
            className="bg-success text-white hover:bg-success/90"
            onClick={onSettingsClick}
          >
            Cookie Settings
          </Button>
        </div>
      </div>
    </div>
  )
}

export function CookieSettings({ open, onOpenChange }: CookieConsentProps) {
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: true,
    marketing: false
  })

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (consent) {
      setPreferences(JSON.parse(consent))
    }
  }, [open])

  const handleSavePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences))
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogOverlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" />
        <DialogContent className="sm:max-w-md fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background border border-border/40 rounded-lg shadow-xl z-50 p-6" id="cookie-settings-modal">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Cookie Settings</h2>
              <p className="text-muted-foreground mt-2">
                Manage your cookie preferences below.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label htmlFor="essential" className="text-sm font-medium">Essential Cookies</Label>
                    <p className="text-sm text-muted-foreground">Required for basic site functionality.</p>
                  </div>
                  <Checkbox
                    id="essential"
                    checked={preferences.essential}
                    disabled
                    className="data-[state=checked]:bg-success"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M11.6666 4.33334L5.99993 10L2.33326 6.33334" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Checkbox>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label htmlFor="analytics" className="text-sm font-medium">Analytics Cookies</Label>
                    <p className="text-sm text-muted-foreground">Help us understand how visitors use the site.</p>
                  </div>
                  <Checkbox
                    id="analytics"
                    checked={preferences.analytics}
                    onCheckedChange={(checked) => setPreferences(prev => ({ ...prev, analytics: !!checked }))}
                    className="data-[state=checked]:bg-success"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M11.6666 4.33334L5.99993 10L2.33326 6.33334" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Checkbox>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label htmlFor="marketing" className="text-sm font-medium">Marketing Cookies</Label>
                    <p className="text-sm text-muted-foreground">Used to deliver personalized content and ads.</p>
                  </div>
                  <Checkbox
                    id="marketing"
                    checked={preferences.marketing}
                    onCheckedChange={(checked) => setPreferences(prev => ({ ...prev, marketing: !!checked }))}
                    className="data-[state=checked]:bg-success"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M11.6666 4.33334L5.99993 10L2.33326 6.33334" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Checkbox>
                </div>
              </div>
              
              <div className="pt-4 border-t border-border/40">
                <p className="text-xs text-muted-foreground">
                  By clicking "Save Preferences", you agree to our use of cookies as described in our Privacy Policy.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:justify-between pt-2">
              <Button
                variant="ghost"
                onClick={() => onOpenChange(false)}
              >
                Cancel
              </Button>
              <Button
                onClick={handleSavePreferences}
                className="bg-success text-white hover:bg-success/90"
              >
                Save Preferences
              </Button>
            </div>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  )
}