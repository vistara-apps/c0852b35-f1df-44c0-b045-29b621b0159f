'use client'

import { ArrowRight, Sparkles, Shield, Gift } from 'lucide-react'

interface WelcomeScreenProps {
  onStart: () => void
}

export function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  return (
    <div className="flex-1 flex items-center justify-center p-6">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="space-y-4">
          <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/30">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-fg">
            AI Conversational Forms
          </h1>
          <p className="text-lg text-fg/70">
            Transform static forms into engaging conversations powered by AI
          </p>
        </div>

        <div className="space-y-4 pt-8">
          <FeatureCard
            icon={<Sparkles className="w-5 h-5" />}
            title="Intelligent Conversations"
            description="AI adapts questions based on your responses"
          />
          <FeatureCard
            icon={<Shield className="w-5 h-5" />}
            title="Verifiable Identity"
            description="Build reputation with onchain credentials"
          />
          <FeatureCard
            icon={<Gift className="w-5 h-5" />}
            title="Earn Rewards"
            description="Get tokens and NFTs for quality submissions"
          />
        </div>

        <button
          onClick={onStart}
          className="w-full mt-8 px-6 py-4 bg-primary text-white rounded-xl hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/30 flex items-center justify-center gap-2 group"
        >
          <span className="text-lg font-semibold">Start Conversation</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="flex items-start gap-4 p-4 bg-surface rounded-lg border border-primary/10 hover:border-primary/30 transition-colors">
      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
        {icon}
      </div>
      <div className="text-left">
        <h3 className="font-semibold text-fg">{title}</h3>
        <p className="text-sm text-fg/60">{description}</p>
      </div>
    </div>
  )
}
