import { Card } from "@/components/ui/card"
import { Package, Store, Cpu, Sparkles, Factory, Boxes, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Services() {
  const services = [
    {
      icon: Package,
      title: "DTC Creators",
      description: "Build custom product lines that reflect your brand vision with low MOQs.",
      features: ["Custom Product Design", "Brand Packaging", "Small Batch Runs", "White Label Options"],
      image: "/premium-product-packaging-design.jpg",
      slug: "dtc-creators",
    },
    {
      icon: Store,
      title: "Retailers & Shops",
      description: "Private label manufacturing and seamless global export at scale.",
      features: [
        "Private Label Production",
        "Compliance & Certifications",
        "Logistics Coordination",
        "Quality Assurance",
      ],
      image: "/global-shipping-logistics.png",
      slug: "retailers-shops",
    },
    {
      icon: Cpu,
      title: "Hardware Startups",
      description: "Rapid prototyping and precision assembly for cutting-edge technology products.",
      features: ["PCB Assembly", "Enclosure Design", "Firmware Integration", "Quality Testing"],
      image: "/modern-electronics-assembly-line.jpg",
      slug: "hardware-startups",
    },
    {
      icon: Sparkles,
      title: "Kickstarter Campaigns",
      description: "Turn crowdfunded ideas into reality with reliable production and fulfillment.",
      features: ["Production Planning", "Backer Fulfillment", "Timeline Management", "Cost Optimization"],
      image: "/crowdfunding-campaign-products.jpg",
      slug: "kickstarter-campaigns",
    },
    {
      icon: Factory,
      title: "Product Licensing",
      description: "Manufacture licensed merchandise and branded products at any scale.",
      features: ["IP Compliance", "Brand Guidelines", "Quality Control", "Multi-Region Distribution"],
      image: "/branded-merchandise-production.jpg",
      slug: "product-licensing",
    },
    {
      icon: Boxes,
      title: "Subscription Boxes",
      description: "Curated product sourcing and assembly for recurring subscription services.",
      features: ["Product Curation", "Monthly Assembly", "Custom Inserts", "Flexible Ordering"],
      image: "/subscription-box-assembly.jpg",
      slug: "subscription-boxes",
    },
  ]

  return (
    <section id="services" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
            {"The one platform "}
            <span className="text-gradient">behind it all</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            {
              "Whether you're prototyping your first hardware product or scaling a global brand, we provide the expertise you need."
            }
          </p>
        </div>

        <div className="space-y-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="p-0 bg-card border-border overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                  {/* Content */}
                  <div
                    className={`p-8 md:p-12 flex flex-col justify-center ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
                  >
                    <div className="space-y-6">
                      <div className="w-14 h-14 rounded-2xl bg-success/10 flex items-center justify-center">
                        <Icon className="h-7 w-7 text-success" />
                      </div>

                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">{service.title}</h3>
                        <p className="text-muted-foreground leading-relaxed text-lg">{service.description}</p>
                      </div>

                      <ul className="space-y-3">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-3 text-base text-foreground/80">
                            <div className="w-1.5 h-1.5 rounded-full bg-success"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <div className="pt-4">
                        <Button size="lg" className="bg-success text-white hover:bg-success/90 rounded-lg text-base px-8 h-12 md:h-14 font-semibold shadow-sm">
                          Get in touch
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Image */}
                  <div
                    className={`relative h-[300px] lg:h-full ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}
                  >
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
