import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-8">
            Terms of Service
          </h1>
          <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
            <div>
              <p className="mb-4">
                Welcome to RangeLeap. These Terms of Service govern your use of our website and services. By accessing or using our website, you agree to be bound by these Terms of Service and our Privacy Policy.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p className="mb-4">
                By accessing or using our website, you represent and warrant that you are of legal age to form a binding contract and that you have read, understood, and agree to be bound by these Terms of Service.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Services</h2>
              <p className="mb-4">
                RangeLeap provides supply chain and manufacturing services to clients. We reserve the right to modify, suspend, or discontinue any of our services at any time without notice.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Client Obligations</h2>
              <p className="mb-4">
                When using our services, you agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Provide accurate, complete, and current information</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Not use our services for any illegal or unauthorized purpose</li>
                <li>Not interfere with or disrupt the operation of our services</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Intellectual Property</h2>
              <p className="mb-4">
                All content on our website, including text, graphics, logos, images, and software, is the property of RangeLeap or its licensors and is protected by intellectual property laws. You may not use, reproduce, or distribute any content from our website without our prior written consent.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Payment Terms</h2>
              <p className="mb-4">
                Payment terms for our services will be specified in your service agreement. All payments are due in accordance with the terms specified in the agreement. Late payments may be subject to interest and additional fees.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Limitation of Liability</h2>
              <p className="mb-4">
                To the fullest extent permitted by law, RangeLeap shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Your access to or use of or inability to access or use our services</li>
                <li>Any conduct or content of any third party on our services</li>
                <li>Any content obtained from our services</li>
                <li>Unauthorized access, use, or alteration of your transmissions or content</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Indemnification</h2>
              <p className="mb-4">
                You agree to indemnify, defend, and hold harmless RangeLeap and its officers, directors, employees, agents, and suppliers from and against all claims, liabilities, damages, losses, and expenses, including, without limitation, reasonable attorney's fees and costs, arising out of or in any way connected with your access to or use of our services, or your violation of these Terms of Service.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Termination</h2>
              <p className="mb-4">
                We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including, without limitation, if you breach these Terms of Service.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Governing Law</h2>
              <p className="mb-4">
                These Terms of Service shall be governed and construed in accordance with the laws of [Jurisdiction], without regard to its conflict of law provisions.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Changes to Terms</h2>
              <p className="mb-4">
                We reserve the right to modify or replace these Terms of Service at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. Contact Us</h2>
              <p className="mb-4">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <p className="font-medium text-foreground">
                RangeLeap<br />
                Email: legal@rangeleap.com
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}