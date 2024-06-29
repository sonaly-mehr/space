import Image from "next/image";
import React from "react";

const Build = () => {
  const contents = [
    {
      img: "/images/box1.png",
      heading: "Easy-to-use tooling",
      descp:
        "Enables users to take advantage of Drupal’s powerful technical architecture more easily than ever before.",
    },
    {
      img: "/images/box2.png",
      heading: "Continuous innovation",
      descp:
        "Powerful new features delivered continuously keep Drupal at the cutting edge of the web.",
    },
    {
      img: "/images/box3.png",
      heading: "Seamless Upgrades",
      descp:
        "Drupal’s commitment to easy upgrades in the future means never having to worry about a major re-platforming to stay up to date.",
    },
  ];
  return (
    <div className="container mx-auto py-10 lg:py-[70px]">
      <h3 className="text-[2rem] xl:text-[3.5rem] leading-[40px] xl:leading-[60px] mb-16 xl:mb-[105px] font-bold text-center text-primary">
        Build Outside The Box
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-14 gap-y-10 xl:gap-y-0">
        {contents?.map((content, index) => (
          <div className="flex flex-col gap-5 items-center" key={index}>
            <Image
              src={content?.img}
              alt=""
              width={200}
              height={200}
              className="w-[200px] h-[200px]"
            />
            <h4 className="text-primary text-xl lg:text-[1.625rem] lg:leading-9 font-ztgatha font-bold">
              {content?.heading}
            </h4>
            <p className="paragraph text-center">{content?.descp}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Build;
