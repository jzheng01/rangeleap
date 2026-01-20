import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-8">
            Privacy Policy
          </h1>
          <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
            <div>
              <p className="mb-4">
                At RangeLeap, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Information We Collect</h2>
              <p className="mb-4">
                We may collect personal information from you in various ways, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Contact information (name, email address, phone number)</li>
                <li>Company information (company name, job title)</li>
                <li>Communication preferences</li>
                <li>Information provided through forms on our website</li>
                <li>Website usage data (IP address, browser type, pages visited)</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Provide and improve our services</li>
                <li>Communicate with you about our products and services</li>
                <li>Respond to your inquiries and requests</li>
                <li>Personalize your experience on our website</li>
                <li>Analyze website usage and trends</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Information Sharing and Disclosure</h2>
              <p className="mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>To trusted service providers who assist us in operating our website or conducting our business</li>
                <li>To comply with legal requirements or protect our rights</li>
                <li>In connection with a business transaction (such as a merger or acquisition)</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Data Security</h2>
              <p className="mb-4">
                We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Your Rights</h2>
              <p className="mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Access, update, or delete your personal information</li>
                <li>Opt out of marketing communications</li>
                <li>Request information about how your data is processed</li>
                <li>Lodge a complaint with a supervisory authority</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Changes to This Privacy Policy</h2>
              <p className="mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Contact Us</h2>
              <p className="mb-4">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <p className="font-medium text-foreground">
                RangeLeap<br />
                Email: privacy@rangeleap.com
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}