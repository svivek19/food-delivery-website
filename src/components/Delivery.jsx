import React from "react";
import {
  MdOutlineSupportAgent,
  MdOutlineHealthAndSafety,
} from "react-icons/md";
import { RiSecurePaymentLine, RiExchangeFundsLine } from "react-icons/ri";

const Delivery = () => {
  const features = [
    {
      name: "24/7 Support",
      description: `Our customer service is available round the clock to assist you. Whether you have questions about your order or need help with anything else, we're here for you.`,
      icon: <MdOutlineSupportAgent />,
    },
    {
      name: "Secure Transactions",
      description:
        '"We ensure that your transactions are safe and secure. With state-of-the-art encryption technology, your payment details are always protected."',
      icon: <RiSecurePaymentLine />,
    },
    {
      name: "Flexible Refunds",
      description: `We offer easy refund options if your order doesn't meet your expectations. Customer satisfaction is our priority.`,
      icon: <RiExchangeFundsLine />,
    },
    {
      name: "Hygiene & Safety",
      description:
        "We prioritize hygiene and safety in food preparation and delivery. Rest assured, your orders are handled with utmost care.",
      icon: <MdOutlineHealthAndSafety />,
    },
  ];
  return (
    <div className="my-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 md:my-16">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-[#52321b]">
            Fast & Reliable Delivery
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl text-[#644731]">
            Enjoy Delicious Meals Delivered to Your Doorstep
          </p>
          <p className="mt-6 text-lg leading-8 text-[#7e6656]">
            Get your favorite dishes delivered quickly and safely right to your
            home.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <div className="absolute inset-y-0 left-0 flex text-4xl text-[#52321b]">
                  {feature.icon}
                </div>
                <dt className="text-base font-semibold leading-7  text-[#52321b]">
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-[#7e6656] text-justify">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
