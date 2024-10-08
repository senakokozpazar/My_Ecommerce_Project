import BreadCrumb from "@/components/breadcrumb";
import { NavLink } from "react-router-dom";

export default function ShopContainer() {
  const shopCards = [
    {
      src: "/mobileshopcards/card-cover-1.jpg",
      title: "CLOTHS",
      subtitle: "5 Items",
    },
    {
      src: "/mobileshopcards/card-cover-2.jpg",
      title: "CLOTHS",
      subtitle: "5 Items",
    },
    {
      src: "/mobileshopcards/card-cover-3.jpg",
      title: "CLOTHS",
      subtitle: "5 Items",
    },
    {
      src: "/mobileshopcards/card-cover-4.jpg",
      title: "CLOTHS",
      subtitle: "5 Items",
    },
    {
      src: "/mobileshopcards/card-cover-6.jpg",
      title: "CLOTHS",
      subtitle: "5 Items",
    },
  ];
  return (
    <div className="bg-[#FAFAFA] pb-10 font-montserrat">
      <div className="m-10 mb-5 flex items-center justify-center p-14">
        <h1 className="text-2xl font-semibold leading-[32px] tracking-[0.1px] text-[#252B42]">
          Shop
        </h1>
      </div>

      <BreadCrumb />

      <div className="flex flex-col items-center justify-center gap-3 lg:m-3 lg:flex-row lg:justify-around">
        {shopCards.map((card, index) => (
          <div key={index} className="relative text-white lg:w-1/4">
            <img src={card.src} className="h-[330px] w-[332px] object-cover" />
            <div className="flex flex-col items-center justify-center font-semibold">
              <p className="absolute top-1/2 text-center text-base">
                {card.title}
              </p>
              <p className="absolute top-2/3 text-center text-sm">
                {card.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
