import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-muted/30">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
            </span>
            <span className="text-sm text-muted-foreground font-medium">Turn idea into brands, sell globally</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance leading-[1.05] px-4">
            {"Be the next "}
            <span className="text-gradient">big thing</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed px-4">
            {
              "We're your premium supply chain partner in China, helping founders bring exceptional products to market—from rapid prototyping to global export."
            }
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="bg-success text-white hover:bg-success/90 rounded-lg text-base px-8 h-12 md:h-14 font-semibold shadow-sm"
            >
              Get in touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-lg text-base px-8 h-12 md:h-14 border-border hover:bg-muted font-semibold bg-transparent"
            >
              View case studies
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-success/5 rounded-full blur-3xl -z-10"></div>
    </section>
  )
}
