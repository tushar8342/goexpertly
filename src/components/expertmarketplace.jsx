import React from "react";
import Layout from "./layout";

function Expertmarketplace() {
  return (
    <Layout>
      <div className="px-4 md:px-10 py-12 md:py-20 max-w-7xl mx-auto text-gray-800">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-blue-900">
          🌐 Expert Marketplace
        </h1>

        <section className="mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 mb-4">
            What Is the Expert Marketplace?
          </h2>
          <p className="text-lg mb-4">
            The Expert Marketplace is your gateway to a global network of
            seasoned professionals ready to support your compliance, quality,
            and operational goals.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Build or optimize a management system</li>
            <li>Strengthen your food safety or social compliance programs</li>
            <li>Prepare for an upcoming audit</li>
            <li>Address and resolve non-conformances</li>
          </ul>
          <p className="mt-4">
            Our experts are here to help—before, during, or after your audits.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 mb-4">
            🔬 Life Sciences & Manufacturing Excellence
          </h2>
          <p className="text-lg mb-4">
            With over 30 years of industry expertise, our specialists bring deep
            experience in:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Good Laboratory Practice (GLP)</li>
            <li>Good Clinical Practice (GCP)</li>
            <li>Current Good Manufacturing Practice (cGMP)</li>
          </ul>
          <p className="mt-4">Our services include:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>✔ GMP & CMC laboratory support</li>
            <li>✔ Custom validation and equipment calibration</li>
            <li>✔ Cleanroom qualification and safety assessments</li>
            <li>✔ Supply chain audits and vendor compliance checks</li>
            <li>✔ Staff eLearning in quality systems and compliance</li>
          </ul>
          <p className="mt-4">
            Our experts work with some of the world’s most innovative
            pharmaceutical and biotech companies, helping ensure Total Quality
            Assurance.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 mb-4">
            💼 Financial Services & Banking Support
          </h2>
          <p className="text-lg mb-4">
            Navigating today’s regulatory landscape in banking and financial
            services requires proactive risk management and continuous
            compliance.
          </p>
          <p className="mb-2">
            We support banks, fintechs, and financial institutions with:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>✔ AML: Program design, audits, and training</li>
            <li>✔ KYC: Process automation and compliance strategy</li>
            <li>✔ Regulatory readiness: ISO 27001, PCI DSS, SOC 2</li>
            <li>✔ Internal controls: Basel III and regional frameworks</li>
            <li>✔ Digital transformation compliance (AI, blockchain, cloud)</li>
            <li>✔ Team training for compliance awareness</li>
          </ul>
          <p className="mt-4">
            Whether you're mitigating financial crime, adopting new
            technologies, or preparing for a regulatory inspection—our financial
            compliance experts deliver the insights and guidance you need.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 mb-4">
            🚀 Why Choose the Expert Marketplace?
          </h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Flexible, scalable support for projects of any size</li>
            <li>Cross-industry expertise to meet diverse regulatory needs</li>
            <li>Pre-vetted professionals with proven track records</li>
            <li>On-demand guidance available globally</li>
          </ul>
        </section>

        <section className="text-center bg-blue-50 p-8 rounded-xl shadow-md">
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-800 mb-4">
            🤝 Ready to Get Started?
          </h2>
          <p className="text-lg mb-4">
            Let’s match you with the right expert. Whether you're in life
            sciences, manufacturing, or finance, our Marketplace is your fast
            track to operational confidence and compliance success.
          </p>
          <a
            href="mailto:support@goexpertly.com"
            className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
          >
            📩 Contact us – support@goexpertly.com
          </a>
        </section>
      </div>
    </Layout>
  );
}

export default Expertmarketplace;
