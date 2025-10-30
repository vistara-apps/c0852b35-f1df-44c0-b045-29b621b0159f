'use client'

import { MessageSquare, User } from 'lucide-react'
import { ConnectWallet } from './ConnectWallet'

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-surface border-b border-primary/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-fg">AI Forms</h1>
              <p className="text-xs text-fg/60">Conversational Experience</p>
            </div>
          </div>
          <ConnectWallet />
        </div>
      </div>
    </header>
  )
}
