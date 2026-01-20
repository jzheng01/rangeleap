export function TrustSignals() {
  const partners = [
    { name: "OpenAI", logo: "/openai-logo-inspired-abstract.png" },
    { name: "Stripe", logo: "/stripe-logo.png" },
    { name: "Notion", logo: "/notion-logo.png" },
    { name: "Linear", logo: "/linear-logo.png" },
    { name: "Vercel", logo: "/vercel-logo.png" },
    { name: "GitHub", logo: "/github-logo.png" },
  ]

  const stats = [
    { value: "100+", label: "Verified Suppliers" },
    { value: "20+", label: "Partner Network" },
    { value: "50+", label: "Successful Matches" },
    { value: "5+", label: "Global Reach (Continents)" },
  ]

  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-1 text-center">
              <div className="text-4xl md:text-5xl font-bold text-foreground">{stat.value}</div>
              <div className="text-sm md:text-base text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
