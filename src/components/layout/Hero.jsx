import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="bg-[#E0F2FE]">
      <div className="container flex flex-col lg:flex-row items-center gap-6 xl:gap-10">
        <div className="lg:basis-[32%]">
          <h1 className="text-5xl xl:text-[4rem] md:leading-[3rem] lg:leading-[3.7rem] xl:leading-[5rem] text-secondary tracking-[-4px] font-bold mt-10 lg:mt-0">
            Build the Open Web with Drupal
          </h1>
          <p className="font-normal text-secondary text-base md:text-[1.25rem] lg:text-[1.25rem] leading-6 md:leading-8 lg:leading-[2.15rem] mt-6">
            Drupal is the open-source CMS that helps you deliver ambitious,
            elegant, and performant digital experiences at scale.
          </p>
        </div>

        <div className="w-full lg:basis-[68%]">
          <Image
            src="/images/hero.png"
            width={300}
            height={300}
            alt=""
            className="w-full h-auto aspect-auto"
            unoptimized={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
