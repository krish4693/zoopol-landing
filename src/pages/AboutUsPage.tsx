import { AboutUs } from "../components/AboutUs";

export default function AboutUsPage() {
  return (
    <main className="flex-grow pt-20 md:pt-24 lg:pt-32">
      <div className="container mx-auto px-4 md:px-0 max-w-7xl">
        <title>About Us — Zoopol</title>
        <meta name="description" content="Learn more about Zoopol and Ocean Point Private Limited." />
      </div>
      <AboutUs />
    </main>
  );
}
