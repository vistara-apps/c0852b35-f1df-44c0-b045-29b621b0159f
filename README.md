# AI Conversational Forms - Base Mini App

Transform static forms into engaging, conversational experiences using AI, integrated with Farcaster for social interaction and Base for onchain credentialing and incentivization.

## Features

- 🤖 **Intelligent Conversations**: AI adapts questions based on real-time responses
- 🔐 **Verifiable Identity**: Build reputation with onchain credentials via Basenames
- 🎁 **Tokenized Rewards**: Earn ERC-20 tokens and NFTs for quality submissions
- 📱 **Mobile-First Design**: Optimized for Base App and Farcaster clients
- ⚡ **Gasless Transactions**: Powered by Coinbase Paymaster

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (L2 on Ethereum)
- **Identity**: OnchainKit + Farcaster MiniKit
- **Styling**: Tailwind CSS with BASE theme
- **AI**: OpenAI GPT-4 / Anthropic Claude

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   ```bash
   cp .env.local.example .env.local
   # Edit .env.local with your API keys
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Environment Variables

- `NEXT_PUBLIC_ONCHAINKIT_API_KEY`: Get from [Coinbase Developer Platform](https://portal.cdp.coinbase.com)
- `OPENAI_API_KEY`: For AI conversation capabilities
- `UPSTASH_REDIS_REST_URL`: For session storage

## Deployment

Deploy to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## Architecture

```
app/
├── components/          # React components
│   ├── ConversationInterface.tsx
│   ├── ConversationBubble.tsx
│   ├── Header.tsx
│   └── WelcomeScreen.tsx
├── layout.tsx          # Root layout with providers
├── page.tsx            # Main page with Farcaster integration
└── providers.tsx       # OnchainKit + React Query setup

public/
└── .well-known/
    └── farcaster.json  # Mini App manifest
```

## Key Integrations

### Farcaster MiniKit
- User context (FID, username, pfp)
- Frame creation and sharing
- Social notifications

### OnchainKit
- Wallet connection (Coinbase Wallet)
- Identity (Basenames, avatars)
- Transactions with gas sponsorship

### Base Blockchain
- Chain ID: 8453 (mainnet), 84532 (testnet)
- RPC: https://mainnet.base.org
- Explorer: https://basescan.org

## License

MIT
