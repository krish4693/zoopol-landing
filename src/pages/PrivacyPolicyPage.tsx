import { Helmet } from "react-helmet-async";
import { PrivacyPolicy } from "../components/PrivacyPolicy";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy — Zoopol</title>
        <meta name="description" content="Learn how Zoopol collects, uses, and protects your personal information when you use our platform." />
      </Helmet>
      <PrivacyPolicy />
    </>
  );
}
