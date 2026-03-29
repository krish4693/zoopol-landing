import { Helmet } from "react-helmet-async";
import { Terms } from "../components/Terms";

export default function TermsPage() {
  return (
    <>
      <Helmet>
        <title>Terms &amp; Conditions — Zoopol</title>
        <meta
          name="description"
          content="Read the Terms & Conditions governing your use of Zoopol, a product of Ocean Point Private Limited."
        />
      </Helmet>
      <main>
        <Terms />
      </main>
    </>
  );
}
