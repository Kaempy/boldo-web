import Image from "next/image";
import img1 from "../../public/img1.png";
import img2 from "../../public/img2.png";
import img3 from "../../public/img3.png";
import img4 from "../../public/img4.png";
import img5 from "../../public/img5.png";

const GridSection = () => {
  return (
    <section
      className="mx-auto mt-12 flex w-max flex-col justify-center gap-6 px-6 md:items-center min-[820px]:flex-row lg:-mt-24 lg:gap-12"
      data-aos="fade-up"
      data-aos-delay="250"
    >
      <div className="flex w-max flex-col items-center justify-center gap-6 lg:gap-12">
        <div className="w-max overflow-hidden rounded-3xl">
          <Image
            placeholder="blur"
            src={img1}
            alt="grid image 1"
            width={300}
            height={285}
            className="mx-auto w-[280px] cursor-pointer object-cover transition duration-300 hover:scale-110 lg:w-auto"
          />
        </div>
        <div className="w-max overflow-hidden rounded-3xl">
          <Image
            placeholder="blur"
            src={img2}
            alt="grid image 2"
            width={300}
            height={303}
            className="mx-auto w-[280px] cursor-pointer object-cover transition duration-300 hover:scale-110 lg:w-auto"
          />
        </div>
      </div>
      <div className="w-max overflow-hidden rounded-3xl">
        <Image
          placeholder="blur"
          src={img3}
          alt="grid image 3"
          width={400}
          height={632}
          className="w-[280px] cursor-pointer object-cover transition duration-300 hover:scale-110 md:mx-auto lg:w-auto"
        />
      </div>
      <div className="flex w-max flex-col items-center justify-center gap-6 lg:gap-12">
        <div className="w-max overflow-hidden rounded-3xl">
          <Image
            placeholder="blur"
            src={img4}
            alt="grid image 4"
            width={302}
            height={305}
            className="mx-auto w-[280px] cursor-pointer object-cover transition duration-300 hover:scale-110 lg:w-auto"
          />
        </div>
        <div className="w-max overflow-hidden rounded-3xl">
          <Image
            placeholder="blur"
            src={img5}
            alt="grid image 5"
            width={302}
            height={287}
            className="mx-auto w-[280px] cursor-pointer object-cover transition duration-300 hover:scale-110 lg:w-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default GridSection;
