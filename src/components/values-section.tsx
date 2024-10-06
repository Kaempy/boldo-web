import Image from "next/image";
import img2 from "../../public/img2.png";
import img4 from "../../public/img4.png";
import img9 from "../../public/img9.png";
import TextSection from "./text-section";

const data = [
  { key: "1", img: img2, title: "We are commited." },
  { key: "2", img: img4, title: "We are responsible." },
  { key: "3", img: img9, title: "We aim for progress." },
];

const ValuesSection = () => {
  return (
    <section className="mx-auto w-full bg-primary px-6 py-10 text-light-gray lg:py-20">
      <div className="mx-auto w-full max-w-5xl">
        <TextSection
          subTitle="Our values"
          title="Things we believe in"
          body="Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus."
          darkMode
          maxWidth
        />
        <div className="space-y-8 lg:space-y-12">
          {data.map((item, i) => (
            <div
              key={item.key}
              className="flex flex-col gap-3 md:flex-row md:items-center lg:gap-8"
              data-aos={i % 2 === 0 ? "fade-up-left" : "fade-up-right"}
              data-aos-delay={i % 2 === 0 ? i * 150 : i * 200}
            >
              <div className="w-max overflow-hidden rounded-3xl">
                <Image
                  placeholder="blur"
                  src={item.img}
                  alt={item.title}
                  width={150}
                  height={150}
                  className="mx-auto cursor-pointer object-cover transition duration-300 hover:scale-110"
                />
              </div>
              <div className="w-full max-w-lg">
                <h5 className="mb-1 text-xl lg:text-[1.75rem] lg:leading-[3rem]">
                  {item.title}
                </h5>
                <p className="text-sm lg:text-base lg:leading-8">
                  Conversion angel investor entrepreneur first mover advantage.
                  Handshake infographic mass market crowdfunding iteration.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
