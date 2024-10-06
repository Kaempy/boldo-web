import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo-black.png";

const footerArr = [
  { key: "1", section: "Landings", list: ["Home", "Products", "Services"] },
  { key: "2", section: "Company", list: ["Home", "Careers", "Services"] },
  { key: "3", section: "Resources", list: ["Blog", "Products", "Services"] },
];

const Footer = () => {
  return (
    <footer className="mx-auto grid w-full max-w-[1560px] items-center gap-8 px-6 py-8 lg:grid-cols-4 lg:justify-center lg:py-12">
      <div className="flex flex-col items-start justify-center gap-2 lg:col-span-2 lg:max-w-[18.75rem] lg:gap-5">
        <Link href="/">
          <Image
            placeholder="blur"
            src={logo}
            alt="Boldo black"
            width={156}
            height={41}
            className="mx-auto object-contain"
          />
        </Link>
        <p className="text-[.9375rem] lg:text-base lg:leading-7">
          Social media validation business model canvas graphical user interface
          launch party creative facebook iPad twitter.
        </p>
        <small className="text-[.9375rem] lg:text-base lg:leading-7">
          All rights reserved.
        </small>
      </div>
      <div className="flex flex-col justify-between gap-4 md:flex-row lg:col-span-2 lg:gap-8">
        {footerArr.map((item) => (
          <div key={item.key}>
            <h6 className="mb-1 text-lg font-bold text-black underline-offset-4 lg:mb-5">
              {item.section}
            </h6>
            <ul className="space-y-0.5 lg:space-y-3">
              {item.list.map((item, i) => {
                return (
                  <li key={i}>
                    <Link
                      href="#"
                      className="text-base leading-8 hover:text-black"
                    >
                      {item}
                    </Link>
                    {item.toLowerCase() === "careers" && (
                      <small className="ml-2 rounded-full bg-secondary px-2 py-0.5 text-[.6875rem] font-bold text-primary">
                        Hiring!
                      </small>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
