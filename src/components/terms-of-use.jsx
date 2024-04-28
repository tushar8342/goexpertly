import React from "react";
import Layout from "./layout";

function TermsOfUse() {
  return (
    <Layout>
      <div className="bg-gray-100 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-semibold mb-4">Terms of Use</h2>
          <p className="font-semibold mb-2">Legal</p>
          <p className="font-semibold mb-2">Copyright Issues</p>
          <p className="mb-4">
            While using the Expertly website, you may come across documents or
            information resources provided or licensed by private individuals,
            companies, or organizations. These materials may be protected by
            U.S. and foreign copyright laws. Any transmission or reproduction of
            protected items beyond what is permitted by fair use, as defined in
            the copyright laws, necessitates written permission from the
            copyright owners.
          </p>
          <p className="font-semibold mb-2">Disclaimers</p>
          <p className="mb-4">
            We strive to provide accurate and up-to-date information on this
            website. However, some content may come from third parties, and we
            cannot guarantee its absolute accuracy or authenticity. We encourage
            you to verify information independently before relying on it for
            critical decisions.
          </p>
          <p className="mb-4">User Responsibility:</p>
          <p className="mb-4">
            The information presented here is intended for general informational
            purposes only. You are responsible for making informed decisions
            based on your specific circumstances and independent research.
            Expertly is not liable for any actions or omissions resulting from
            your reliance on website content.
          </p>
          <p className="font-semibold mb-2">External Links</p>
          <p className="mb-4">
            This web portal may feature hypertext links to external websites
            and pages hosting information created and maintained by public and
            private organizations other than Expertly. These links may be
            established by Expertly if deemed consistent with the purpose of
            this web portal, which is to provide valuable information to
            visitors.
          </p>
          <p className="mb-4">
            Additionally, links may be provided for informational purposes where
            the linked external website offers useful information or is required
            or authorized by law. Expertly reserves the right to determine
            whether the external website aligns with the purpose of this web
            portal or serves the specified informational needs.
          </p>
          <p className="mb-4">
            Please note that inclusion of a hypertext link to an external
            website does not constitute an endorsement of any product, service,
            or organization referenced therein, nor does it imply agreement with
            any views expressed on the linked website. Hypertext links to
            external websites and pages may be removed or replaced at the
            discretion of Expertly, without prior notice.
          </p>
          <p className="mb-4">
            If you encounter any issues regarding the format, accuracy,
            timeliness, or completeness of a linked external website, please
            contact the organization responsible for that website. Expertly does
            not exercise control over, nor assume responsibility for, the
            content of linked external websites or pages.
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default TermsOfUse;
