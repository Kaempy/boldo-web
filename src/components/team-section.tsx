import Image from "next/image";
import img6 from "../../public/img6.png";
import img7 from "../../public/img7.png";
import img8 from "../../public/img8.png";
import TextSection from "./text-section";

const teamArr = [
  { key: "1", photo: img6, name: "Michael Scott" },
  { key: "2", photo: img7, name: "Dwight Schrute" },
  { key: "3", photo: img8, name: "Pam Beetsley" },
];

const TeamSection = () => {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-10 lg:py-16">
      <TextSection
        subTitle="Our team"
        title="The leadership team"
        body="Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus."
      />
      <div className="grid gap-8 md:grid-cols-2 min-[820px]:grid-cols-3 lg:gap-16">
        {teamArr.map((item, i) => (
          <div
            className="mx-auto space-y-3 lg:space-y-5"
            key={item.key}
            data-aos={i % 2 === 0 ? "fade-up-left" : "fade-up-right"}
            data-aos-delay={i % 2 === 0 ? i * 150 : i * 200}
          >
            <div className="w-max overflow-hidden rounded-3xl">
              <Image
                placeholder="blur"
                src={item.photo}
                alt={item.name}
                width={300}
                height={354}
                className="mx-auto w-[280px] cursor-pointer object-cover transition duration-300 hover:scale-110 lg:w-auto"
              />
            </div>
            <p className="my-0 text-2xl text-black lg:text-[1.75rem] lg:leading-10">
              {item.name}
            </p>
            <small className="text-sm lg:text-lg">General Manager</small>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
