import { Helmet } from "react-helmet-async";
import { Contact } from "../components/Contact";

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact Us — Zoopol</title>
        <meta name="description" content="Get in touch with the Zoopol team via email or phone. We're here to help with any questions." />
      </Helmet>
      <Contact />
    </>
  );
}
