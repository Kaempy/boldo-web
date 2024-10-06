const numArray = ["120m", "10.000", "240"];

const NumberSection = () => {
  return (
    <section className="bg-primary px-6 py-10 text-light-gray lg:py-16">
      <div className="mx-auto w-full max-w-7xl">
        <p
          className="text-base lg:text-center lg:text-[1.25rem] lg:leading-8"
          data-aos="fade-down"
        >
          Our numbers
        </p>
        <h1
          className="my-2 text-3xl text-white lg:my-4 lg:text-center lg:text-[3.5rem] lg:leading-[4.5rem]"
          data-aos="fade-in"
          data-aos-delay="200"
        >
          Handshake infographic mass market crowdfunding iteration.
        </h1>
        <div className="mx-auto flex w-full flex-col justify-between gap-6 py-4 md:flex-row lg:items-center lg:py-16">
          {numArray.map((item, i) => (
            <div
              key={item}
              data-aos={i % 2 === 0 ? "fade-up-left" : "fade-up-right"}
              data-aos-delay={i % 2 === 0 ? i * 150 : i * 200}
            >
              <h5 className="m-0 text-3xl font-normal text-secondary lg:text-[3.5rem] lg:leading-[3rem]">
                {item}
              </h5>
              <p className="mt-2 text-sm text-light-gray lg:mt-4 lg:text-xl">
                Cool feature title
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NumberSection;
