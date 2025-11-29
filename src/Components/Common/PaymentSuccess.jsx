import React from "react";
import { Link } from "react-router-dom";

export default function PaymentSuccess() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-100 p-6">
      <h1 className="text-4xl font-bold text-green-700">Payment Successful!</h1>

      <p className="mt-4 text-lg text-gray-700">
        Thank you! Your payment has been processed.
      </p>

      <Link
        to="/"
        className="mt-6 bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}
