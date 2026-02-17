import { Helmet } from "react-helmet-async";
import { RefundPolicy } from "../components/RefundPolicy";

export default function RefundPolicyPage() {
  return (
    <>
      <Helmet>
        <title>Refund & Cancellation Policy — Zoopol</title>
        <meta name="description" content="Understand how job cancellations, refunds, and disputes are handled on the Zoopol platform." />
      </Helmet>
      <RefundPolicy />
    </>
  );
}
