const HeroSection = () => {
  return (
    <section className="bg-primary px-6 pb-8 pt-[120px] text-light-gray lg:h-[600px] lg:py-8 lg:pt-28">
      <div className="mx-auto w-full max-w-3xl">
        <p
          className="text-center text-base leading-8 lg:text-[1.25rem]"
          data-aos="fade-down"
        >
          About
        </p>
        <h1
          className="my-4 text-center text-4xl text-white lg:text-[4rem] lg:leading-[5.25rem]"
          data-aos="fade-up"
        >
          We love to make great things, things that matter.
        </h1>
        <p
          className="text-center text-sm text-light-gray lg:text-base lg:leading-7"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          Funding handshake buyer business-to-business metrics iPad partnership.
          First mover advantage innovator success deployment non-disclosure.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
