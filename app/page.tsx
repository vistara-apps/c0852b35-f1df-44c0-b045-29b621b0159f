'use client'

import { useEffect, useState } from 'react'
import { sdk } from '@farcaster/miniapp-sdk'
import { ConversationInterface } from './components/ConversationInterface'
import { Header } from './components/Header'
import { WelcomeScreen } from './components/WelcomeScreen'

export default function Home() {
  const [isReady, setIsReady] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    // CRITICAL: Call sdk.actions.ready() to prevent infinite loading
    sdk.actions.ready()
    setIsReady(true)
  }, [])

  if (!isReady) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-fg">Loading...</div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-bg flex flex-col">
      <Header />
      {!hasStarted ? (
        <WelcomeScreen onStart={() => setHasStarted(true)} />
      ) : (
        <ConversationInterface />
      )}
    </main>
  )
}
