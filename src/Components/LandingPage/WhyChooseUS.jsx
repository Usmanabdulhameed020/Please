import React from "react";
import { ShieldCheck, Home, Headphones, Users } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <ShieldCheck className="w-10 h-10 text-sky-600" />,
      title: "Verified Listings",
      desc: "Every property on StayFinder is verified for authenticity, ensuring you browse only real, trusted listings.",
    },
    {
      icon: <Users className="w-10 h-10 text-sky-600" />,
      title: "Expert Agents",
      desc: "Our professional agents are dedicated to helping you find your perfect home with ease and confidence.",
    },
    {
      icon: <Home className="w-10 h-10 text-sky-600" />,
      title: "Wide Property Range",
      desc: "From cozy apartments to luxury villas, we connect you with thousands of properties across Nigeria.",
    },
    {
      icon: <Headphones className="w-10 h-10 text-sky-600" />,
      title: "24/7 Support",
      desc: "Our friendly support team is available around the clock to assist with any questions.",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">

        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Why Choose <span className="text-sky-600">StayFinder</span>?
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          We combine trust, technology, and transparency to redefine your real
          estate experience. Here’s what makes us stand out.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>

              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>

              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
