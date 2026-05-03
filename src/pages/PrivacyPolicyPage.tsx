import { Helmet } from "react-helmet-async";
import { PrivacyPolicy } from "../components/PrivacyPolicy";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy — Zoopol</title>
        <meta
          name="description"
          content="Learn how Zoopol by Ocean Point Private Limited collects, uses, and protects your personal information."
        />
      </Helmet>
      <main>
        <PrivacyPolicy />
      </main>
    </>
  );
}
