'use client'

import { Wallet } from 'lucide-react'

export function ConnectWallet() {
  return (
    <button
      className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/20"
      onClick={() => {
        // Wallet connection will be handled by OnchainKit
        console.log('Connect wallet')
      }}
    >
      <Wallet className="w-4 h-4" />
      <span className="text-sm font-medium">Connect</span>
    </button>
  )
}
