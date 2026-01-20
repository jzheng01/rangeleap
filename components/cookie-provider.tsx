'use client'

import React from 'react'
import { CookieBanner, CookieSettings } from './cookie-settings'

export function CookieProvider() {
  const [cookieSettingsOpen, setCookieSettingsOpen] = React.useState(false)

  return (
    <>
      <CookieBanner onSettingsClick={() => setCookieSettingsOpen(true)} />
      <CookieSettings open={cookieSettingsOpen} onOpenChange={setCookieSettingsOpen} />
    </>
  )
}