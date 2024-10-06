const CardSection = () => {
  return (
    <section className="mx-auto flex items-center justify-center px-6 py-6 lg:py-16">
      <div className="mx-auto flex h-full w-full items-center justify-center rounded-3xl bg-primary bg-contain bg-center bg-no-repeat p-6 lg:min-h-[391px] lg:bg-inherit lg:bg-card lg:p-16">
        <div className="flex h-full w-full max-w-[44.75rem] flex-col items-center justify-center">
          <h2 className="text-center text-2xl text-white md:text-3xl lg:text-[3rem] lg:leading-[4.5rem]">
            An enterprise template to ramp up your company website
          </h2>
          <div className="mt-8 flex w-full max-w-xl flex-col items-center justify-center gap-6 md:flex-row">
            <input
              placeholder="Your email address"
              type="email"
              className="w-full rounded-full bg-white px-4 py-1.5 text-base text-black placeholder:font-light placeholder:text-black md:px-6 md:py-3"
            />
            <button className="w-full rounded-full bg-secondary p-1.5 text-base font-bold text-primary hover:bg-[#4fe9a490] md:max-w-32 lg:p-3">
              Start now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSection;
