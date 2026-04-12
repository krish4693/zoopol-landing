import { Helmet } from "react-helmet-async";
import { AboutUs } from "../components/AboutUs";

export default function AboutUsPage() {
  return (
    <>
      <Helmet>
        <title>About Us — Zoopol</title>
        <meta name="description" content="Learn more about Zoopol, our mission, and our team." />
      </Helmet>
      <AboutUs />
    </>
  );
}