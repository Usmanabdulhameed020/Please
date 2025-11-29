import React from "react";

export default function RentDetails3() {
  const property = {
    id: 2,
    title: "Marble Crest Villa",
    location: "Lekki Phase 1, Lagos",
    price: "₦2,500,000 / year",
    amount: 2500000,
    type: "Luxury Villa",
    image: "https://images.unsplash.com/photo-1600585154154-deb2b9f1f05b?auto=format&fit=crop&w=1500&q=80",
    description:
      "A high-end villa featuring marble flooring, automated lighting, indoor waterfalls, and a private deck. It delivers top-tier comfort with sophisticated architectural details.",
    features: [
      "5 Bedrooms Ensuite",
      "Private Swimming Pool",
      "Dual Living Rooms",
      "Walk-in Wine Cellar",
      "Smart Climate Control",
      "2-Car Garage",
      "Fully Fitted Kitchen",
      "Standby Solar Power",
    ],
  }    

  const contactAgent = () => {
    const phone = "2349028542607";
    const message = `Hello, I'm interested in the property: ${property.title} located at ${property.location}. Please share more details.`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
  };

  const payWithPaystack = () => {
    const handler = window.PaystackPop.setup({
      key: "pk_live_750dc2d1ba53e2718c08b9e24d14cf3732ae8be7",
      email: "user@example.com",
      amount: property.amount * 100,
      currency: "NGN",
      ref: "REF-" + Date.now(),
      callback: function () {
        alert("Payment successful!");
        window.location.href = "/payment-success";
      },
      onClose: function () {
        alert("Payment window closed.");
      },
    });
    handler.openIframe();
  };

  return (
    <div className="min-h-screen bg-gray-100 pb-20">
      <div className="w-full h-64">
        <img src={property.image} alt={property.title} className="w-full h-full object-cover" />
      </div>
      <div className="max-w-5xl mx-auto mt-8 bg-white p-6 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold">{property.title}</h1>
        <p className="text-gray-600 mt-1">{property.location}</p>
        <p className="text-blue-600 font-bold text-2xl mt-4">{property.price}</p>
        <span className="inline-block mt-3 bg-gray-200 px-3 py-1 rounded-lg text-sm text-gray-700">{property.type}</span>

        <h2 className="text-xl font-semibold mt-8">Property Description</h2>
        <p className="text-gray-700 mt-2 leading-relaxed">{property.description}</p>

        <h2 className="text-xl font-semibold mt-8">Key Features</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
          {property.features.map((item, index) => (
            <li key={index} className="text-gray-700 flex items-center">• {item}</li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <button onClick={contactAgent} className="w-full sm:w-1/2 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition">Contact Agent</button>
          <button onClick={payWithPaystack} className="w-full sm:w-1/2 bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition">Proceed to Payment</button>
        </div>
      </div>

      <script src="https://js.paystack.co/v1/inline.js"></script>
    </div>
  );
}
