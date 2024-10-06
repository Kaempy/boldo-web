import { memo } from "react";

type Props = {
  subTitle: string;
  title: string;
  body: string;
  darkMode?: boolean;
  maxWidth?: boolean;
};

const TextSection = ({ subTitle, title, body, darkMode, maxWidth }: Props) => {
  return (
    <div
      className={`mx-auto w-full pb-8 lg:py-16 ${
        maxWidth ? "max-w-full" : "max-w-3xl"
      }`}
      data-aos="fade-in"
      data-aos-delay="200"
    >
      <p
        className={`text-base leading-8 lg:text-[1.25rem] ${
          darkMode ? "text-white" : "text-dark-gray"
        }`}
      >
        {subTitle}
      </p>
      <h4
        className={`text-3xl lg:text-[2.5rem] lg:leading-[4rem] ${
          darkMode ? "text-white" : "text-black"
        }`}
      >
        {title}
      </h4>
      <p
        className={`mt-2 text-[15px] lg:mt-4 lg:text-[17px] lg:leading-8 ${
          darkMode ? "text-light-gray" : "text-dark-gray"
        }`}
      >
        {body}
      </p>
    </div>
  );
};

export default memo(TextSection);
