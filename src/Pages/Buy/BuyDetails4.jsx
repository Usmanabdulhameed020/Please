import React from "react";
import { useNavigate } from "react-router-dom";

export default function BuyDetails4() {
  const navigate = useNavigate();
  const property = {
    id: 4,
    title: "Skyline Penthouse",
    location: "Victoria Island, Lagos",
    priceLabel: "₦8,000,000",
    amount: 8000000,
    type: "Luxury Penthouse",
    hero:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    gallery: [
      "https://images.unsplash.com/photo-1656646424895-aea229a814b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzYxfHxyZWFsJTIwZXN0YXRlJTIwcHJvcGVydGllc3xlbnwwfHwwfHx8MA%3D%3D",
      "https://media.istockphoto.com/id/1432413457/photo/woman-taking-pictures-of-her-house.webp?a=1&b=1&s=612x612&w=0&k=20&c=7hV5B0OcHYsBE3awPv4VHxRcc5bzJCZZAY3SwGURczI=",
      "https://images.unsplash.com/photo-1629236714692-9dddb8ebe990?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJlYWwlMjBlc3RhdGUlMjBwcm9wZXJ0aWVzfGVufDB8fDB8fHww",
    ],
    description:
      "A stunning 4-bedroom penthouse on the 20th floor with breathtaking panoramic city and ocean views. Features include a private elevator, floor-to-ceiling windows, and smart home integration.",
    features: [
      "4 Ensuite Bedrooms",
      "Private Key-Card Elevator Access",
      "Panoramic City & Ocean Views",
      "Central Air Conditioning",
      "Jacuzzi on Balcony",
      "Fully Integrated Smart Home System",
      "Maid's Room",
      "Concierge Service",
    ],
    agent: {
      name: "Tunde Bakare",
      phone: "2349034509876",
      email: "tunde@stayfinder.com",
    },
  };

  const contactAgent = () => {
    const msg = `Hello ${property.agent.name}, I'm interested in ${property.title} in ${property.location}. Please provide more details.`;
    window.open(`https://wa.me/${property.agent.phone}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const buyNow = () => {
    if (!window.PaystackPop) {
      alert("Paystack script not loaded!");
      return;
    }

    const handler = window.PaystackPop.setup({
      key: "pk_live_750dc2d1ba53e2718c08b9e24d14cf3732ae8be7", 
      email: "buyer@example.com",
      amount: property.amount * 100,
      currency: "NGN",
      ref: "SALE4-" + Date.now(),
      callback: function () {
        alert("Payment successful — thank you!");
        navigate("/payment-success");
      },
      onClose: function () {
        alert("Payment closed.");
      },
    });

    handler.openIframe();
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="relative h-[350px] md:h-[420px] w-full overflow-hidden">
        <img
          src={property.hero}
          alt={property.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
        <div className="absolute bottom-6 left-6 text-white drop-shadow-lg">
          <h1 className="text-3xl md:text-4xl font-extrabold">
            {property.title}
          </h1>
          <p className="text-sm md:text-lg opacity-90">
            {property.location} • {property.type}
          </p>
          <p className="mt-3 text-xl md:text-2xl font-semibold text-sky-300">
            {property.priceLabel}
          </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 mt-10">
        <div className="bg-white rounded-2xl shadow-xl p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-3 gap-3">
              {property.gallery.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Gallery image ${i + 1}`}
                  className="w-full h-36 md:h-40 rounded-lg object-cover"
                />
              ))}
            </div>
            <section>
              <h2 className="text-2xl font-semibold">Overview</h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                {property.description}
              </p>
            </section>
            <section>
              <h3 className="text-xl font-semibold">Property Features</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 text-gray-700">
                {property.features.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </section>
          </div>
          <aside className="p-4 bg-gray-50 rounded-xl flex flex-col gap-4 border">
            <div>
              <p className="text-sm text-gray-500">Price</p>
              <p className="text-2xl md:text-3xl font-bold text-sky-600 mt-1">
                {property.priceLabel}
              </p>
            </div>
            <button
              onClick={buyNow}
              className="w-full bg-sky-600 hover:bg-sky-700 text-white py-3 rounded-lg font-semibold"
            >
              Buy Now
            </button>
            <button
              onClick={contactAgent}
              className="w-full bg-white border border-sky-600 text-sky-600 py-3 rounded-lg font-semibold"
            >
              Contact Agent
            </button>
            <div className="mt-2 p-4 bg-white rounded-lg border">
              <h4 className="font-semibold">Agent</h4>
              <p className="text-gray-700">{property.agent.name}</p>
              <p className="text-sm text-gray-500">{property.agent.phone}</p>
              <p className="text-sm text-gray-500">{property.agent.email}</p>
            </div>

            <p className="text-xs text-gray-400 mt-auto">
              Secure payments via Paystack.
            </p>
          </aside>
        </div>
      </div>
    </div>
  );
}