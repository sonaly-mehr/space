import React from "react";
import Button from "../ui/Button";
import Link from "next/link";

const TryDrupal = () => {
  const contents = [
    {
      heading: "Download Drupal",
      descrp:
        "Drupal is a powerful framework that has inspired a new generation of digital experiences.",
      link: "Download Drupal",
      url: "/",
      bg: "yellow",
    },
    {
      heading: "Developer’s Guide",
      descrp:
        "Drupal is a powerful framework that has inspired a new generation of digital experiences.",
      link: "Get Started",
      url: "/",
      bg: "red",
    },
    {
      heading: "Drupal Quickstart Command",
      descrp:
        "Drupal is a powerful framework that has inspired a new generation of digital experiences.",
      link: "Download Drupal",
      url: "/",
      bg: "blue",
    },
  ];
  return (
    <div className="container ">
      <div className="bg-cover px-4 md:px-8 py-8 2xl:px-14 2xl:py-14">
        <div className="bg-secondary pl-8 xl:pl-8 2xl:pl-[3.2rem] pr-8 xl:pr-8 2xl:pr-[3.8rem] pt-8 xl:pt-[65px] pb-8 xl:pb-14 flex flex-col md:flex-row md:justify-between text-white rounded-[1.25rem] md:gap-10 lg:gap-28">
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] xl:text-[4rem] leading-[40px] md:leading-[44px] xl:leading-[4.3rem] tracking-[-.02em] font-bold flex-1">
            Ready to try Drupal?{" "}
          </h2>
          <div className="flex-1 flex flex-col justify-end">
            <p className="text-[1.125rem] md:text-xl leading-[28px] md:leading-8 xl:text-xl font-normal mt-4 xl:mt-0 mb-6">
              Morbi nec metus. In consectetuer turpis ut velit. Etiam feugiat
              lorem non metus. Donec vitae sapien ut libero venenatis faucibus.
              Nunc nec neque.
            </p>
            <Button text="Learn more" className="w-full md:w-fit" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 pt-14">
          {contents?.map((content, index) => (
            <div
              className={`flex-1 ${
                content?.bg === "yellow" && "bg-[#FFC423]"
              } ${content?.bg === "red" && "bg-[#F46351]"} ${
                content?.bg === "blue" && "bg-[#CCBAF4]"
              } p-8 2xl:p-14 rounded-[1.25rem] text-left`}
              key={index}
            >
              <h4 className="text-2xl xl:text-[1.75rem] 2xl:text-[2.5rem] leading-[36px] 2xl:leading-[3rem] mb-5 font-bold text-secondary">
                {content?.heading}
              </h4>
              <p className="paragraph !text-secondary pb-4">
                {content?.descrp}
              </p>
              <Link
                href={content?.url}
                className="text-base font-medium text-secondary pb-2 inline-block border-b border-silid border-secondary hover-transition"
              >
                {content?.link}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TryDrupal;
