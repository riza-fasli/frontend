/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { Api } from "@/api/config/Api";
import PaymentForm from "./_component/PaymentForm";

const stripePublishableKey = process.env.STRIPE_PUBLIC_KEY || "pk_test_51SBTvZQqa7RaZlsSf6mQanKhCDECsJiBzVv2iQDxi03m7SJVvKglRZl6qNTDD228ccTsIhGFbADDdWByYXk4N7N5003p7COhIw";

if (!stripePublishableKey) {
  throw new Error(
    "NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not defined in .env.local"
  );
}

const stripePromise = loadStripe(stripePublishableKey);

type PaymentData = {
  data: {
    amount: number;
    sessionId: string;
    // Add other properties here if needed
  };
};

const Page = ({ params }: { params: { sessionId: string } }) => {
  const searchParams = useSearchParams();

  const orderID = searchParams.get("orderID");

  const [paymentData, setPaymentData] = useState<PaymentData | null>();

  useEffect(() => {
    if (orderID) {
      const fetchData = async () => {
        const response = await Api.payment(orderID!);
        console.log("resss:::", response);

        setPaymentData(response);
      };
      fetchData();
    }
  }, [orderID]);

  const amount = paymentData?.data?.amount;

  const clientSecret = paymentData?.data?.sessionId;

  const options = {
    clientSecret,
  };

  return (
    <div className="App">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <PaymentForm />
        </Elements>
      )}
    </div>
  );
};

export default Page;
