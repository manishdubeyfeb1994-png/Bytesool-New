import { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Terms of Service | BYTESOOL",
  description: "Read our Terms of Service to understand the usage of our IT, AI, and digital solutions on this website.",
};

export default function TermsOfService() {
  return (
    <main className="container mx-auto px-4 pt-32 pb-8 max-w-4xl">
      <Breadcrumb />
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-white">Terms of Service</h1>
      
      <div className="prose prose-invert max-w-none space-y-8 text-gray-300">
        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing or using BYTESOOL’s Website and Services, you agree to comply with and be bound by these Terms of Service. 
            If you do not agree to these terms, please do not use our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">2. Description of Service</h2>
          <p>
            BYTESOOL provides IT consulting, website and app development, digital marketing, AI tools, and branding services. 
            The content on our Website is for general information purposes only and is subject to change without notice.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">3. Intellectual Property Rights</h2>
          <p>
            The Website and its original content, features, and functionality are and will remain the exclusive property of BYTESOOL 
            and its licensors. Our trademarks and logo may not be used in connection with any product or service without the 
            prior written consent of BYTESOOL.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">4. User Responsibilities</h2>
          <p>
            Users agree not to use the Website for any unlawful purpose or any purpose prohibited under this clause. 
            You agree not to use the Website in any way that could damage the Website, Services, or general business of BYTESOOL.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">5. Disclaimer of Warranties</h2>
          <p>
            The information and services on this website are provided "as is" and "as available" without any warranty of any kind, 
            either express or implied.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">6. Limitation of Liability</h2>
          <p>
            In no event shall BYTESOOL, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for 
            any indirect, incidental, special, consequential, or punitive damages arising out of your use of the Service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">7. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">8. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us:
            <br />
            <strong>Email:</strong> info@bytesool.com
          </p>
        </section>
      </div>
    </main>
  );
}
