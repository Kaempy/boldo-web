"use client";
import CardSection from "@src/components/card-section";
import GridSection from "@src/components/grid-section";
import HeroSection from "@src/components/hero-section";
import NumberSection from "@src/components/number-section";
import TeamSection from "@src/components/team-section";
import TextSection from "@src/components/text-section";
import ValuesSection from "@src/components/values-section";
import Aos from "aos";
import { Fragment, useEffect } from "react";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 600, once: true });
  }, []);
  return (
    <Fragment>
      <HeroSection />
      <GridSection />
      <div className="px-6 pt-12">
        <TextSection
          subTitle="Our story"
          title="Handshake infographic mass market crowdfunding iteration."
          body="Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus. Sales user experience branding growth hacking holy grail monetization conversion prototype stock network effects. Learning curve network effects return on investment bootstrapping business-to-consumer."
        />
      </div>
      <NumberSection />
      <TeamSection />
      <ValuesSection />
      <CardSection />
    </Fragment>
  );
};
export default About;
