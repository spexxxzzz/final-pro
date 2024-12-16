'use client'

import React from 'react'
import Link from 'next/link'
import { ModeToggle } from './mode-toggle'
import { IconLogo } from './ui/icons'
import { cn } from '@/lib/utils'

export const Header: React.FC = () => {
  return (
    <header className="fixed w-full p-0 md:p-2 flex justify-between items-center z-10 backdrop-blur md:backdrop-blur-none bg-background/80 md:bg-transparent">
      <div className="p-2">
        <a href="/">
          <IconLogo className={cn('w-5 h-5')} />
          <span className="sr-only">Neural Engine for Enigmatic Learning</span>
        </a>
      </div>
      
      <div className="flex flex-col items-center"> 
        <a href="/">
        <h1 className="mb-4 text-center">Neural Engine for Enigmatic Learning</h1>
        </a>
      </div>
      <ModeToggle />
    </header>
  )
}

export default Header
