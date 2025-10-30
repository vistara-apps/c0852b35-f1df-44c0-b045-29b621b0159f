export default function Loading() {
  return (
    <div className="min-h-screen bg-bg flex items-center justify-center">
      <div className="space-y-4 text-center">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary to-accent animate-pulse" />
        <p className="text-fg/60">Loading AI Forms...</p>
      </div>
    </div>
  )
}
