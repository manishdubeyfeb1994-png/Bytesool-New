import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | BYTESOOL",
  description: "Read our privacy policy to understand how BYTESOOL handles your data as part of our IT and AI consulting services.",
};

export default function PrivacyPolicy() {
  return (
    <main className="container mx-auto px-4 pt-32 pb-8 max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-white">Privacy Policy</h1>
      
      <div className="prose prose-invert max-w-none space-y-8 text-gray-300">
        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
          <p>
            At BYTESOOL, we respect your privacy and are committed to protecting it through our compliance with this policy. 
            This policy describes the types of information we may collect from you or that you may provide when you visit the website 
            www.bytesool.com and our practices for collecting, using, maintaining, protecting, and disclosing that information.
          </p>Section
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">2. Information We Collect</h2>
          <p>
            We collect several types of information from and about users of our Website, including:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Personal Information:</strong> Name, email address, phone number, and company name when you fill out our contact forms.</li>
            <li><strong>Usage Data:</strong> Information about your internet connection, the equipment you use to access our Website, and usage details.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">3. How We Use Your Information</h2>
          <p>
            We use information that we collect about you or that you provide to us, including any personal information:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>To present our Website and its contents to you.</li>
            <li>To provide you with information, products, or services that you request from us.</li>
            <li>To carry out our obligations and enforce our rights arising from any contracts entered into between you and us.</li>
            <li>To notify you about changes to our Website or any products or services we offer or provide through it.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">4. Data Security</h2>
          <p>
            We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. 
            All information you provide to us is stored on our secure servers behind firewalls.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">5. Contact Information</h2>
          <p>
            To ask questions or comment about this privacy policy and our privacy practices, contact us at:
            <br />
            <strong>Email:</strong> info@bytesool.com
          </p>
        </section>
      </div>
    </main>
  );
}
