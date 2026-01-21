import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="relative overflow-hidden bg-gradient-accent rounded-3xl p-12 md:p-16 lg:p-20 text-center">
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance text-white">
              {"Ready to build something "}
              <span className="block">amazing?</span>
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto text-pretty leading-relaxed">
              {
                "Schedule a free consultation with our team. We'll discuss your project and provide a detailed roadmap and quote within 24 hours."
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="bg-white text-foreground hover:bg-white/90 rounded-lg text-base px-8 h-12 md:h-14 font-semibold shadow-lg"
              >
                Get in touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  )
}
