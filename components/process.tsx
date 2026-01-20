import { Card } from "@/components/ui/card"
import { MessageSquare, FileText, Cog, Truck } from "lucide-react"

export function Process() {
  const steps = [
    {
      number: "01",
      title: "Share your vision",
      description:
        "Tell us about your product idea, target market, and timeline. We'll assess feasibility and provide expert recommendations.",
      icon: MessageSquare,
    },
    {
      number: "02",
      title: "Get a detailed quote",
      description:
        "Receive transparent pricing and lead times. For hardware projects, we create prototypes for validation before production.",
      icon: FileText,
    },
    {
      number: "03",
      title: "We handle production",
      description:
        "Manufacturing begins with rigorous quality control at every stage. Track progress with real-time updates throughout.",
      icon: Cog,
    },
    {
      number: "04",
      title: "Deliver & scale",
      description:
        "Global shipping with full logistics support. Ongoing partnership for reorders, iterations, and scaling your brand.",
      icon: Truck,
    },
  ]

  return (
    <section id="how-it-works" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
            {"Start selling "}
            <span className="text-gradient">in no time</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            {
              "From your first inquiry to final delivery, we handle the complexity so you can focus on building your brand."
            }
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <Card
                key={index}
                className="p-8 bg-card border-border hover:shadow-lg transition-all duration-300 relative group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center group-hover:bg-success/20 transition-colors">
                    <Icon className="h-6 w-6 text-success" />
                  </div>
                  <div className="text-sm font-bold text-success">{step.number}</div>
                  <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{step.description}</p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
