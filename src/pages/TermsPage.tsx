import { Helmet } from "react-helmet-async";
import { Terms } from "../components/Terms";

export default function TermsPage() {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions — Zoopol</title>
        <meta name="description" content="Read the terms and conditions that govern your use of the Zoopol platform for posting and finding jobs." />
      </Helmet>
      <Terms />
    </>
  );
}
