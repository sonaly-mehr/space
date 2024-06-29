import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ExploreWebinars = () => {
  const articles = [
    {
      img: "/images/img1.png",
      heading: "Suspendisse pulvinar augue ac Cum sociis ",
      link: "Learn more",
      url: "/",
    },
    {
      img: "/images/img2.png",
      heading: "Mauris turpis nunc blandit In turpis In dui  ",
      link: "Learn more",
      url: "/",
    },
    {
      img: "/images/img1.png",
      heading: "Praesent ut ligula non Duis arcu tortor  ",
      link: "Learn more",
      url: "/",
    },
    {
      img: "/images/img2.png",
      heading: "Curabitur ligula sapien tincidunt non  ",
      link: "Learn more",
      url: "/",
    },
    {
      img: "/images/img1.png",
      heading: "Vestibulum ante ipsum primis in  ",
      link: "Learn more",
      url: "/",
    },
    {
      img: "/images/img2.png",
      heading: "Duis vel nibh at velit In ut quam ",
      link: "Learn more",
      url: "/",
    },
  ];
  return (
    <div className="container mx-auto py-10 lg:py-20">
      <p className="tracking-[-7px] lg:tracking-[-14px] text-[5rem] lg:text-[9.3rem] leading-[100%] lg:leading-[10rem] text-primary font-light">
        Explore Webinars, Articles, Guides and More
      </p>
      <p className="paragraph my-10 lg:my-20">
        Learn about Drupal’s technical benefits and upgrading
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-8 lg:gap-y-12">
        {articles?.map((article) => (
          <div className="relative article-content w-full overflow-hidden rounded-[1.25rem] cursor-pointer">
            <Image
              src={article?.img}
              alt=""
              width={200}
              height={200}
              className="w-full h-auto rounded-[1.25rem] transition duration-1000 ease-in-out article-img overflow-hidden"
            />
            <div className="absolute left-4 bottom-4 pr-4 lg:left-8 lg:bottom-8 lg:pr-8 z-10">
              <h5 className="text-xl lg:text-2xl lg:leading-[36px] text-white mb-5 font-light">
                {article?.heading}
              </h5>
              <Link
                href={article?.url}
                className="text-primary text-sm lg:text-base bg-white rounded-lg font-medium normal-case px-4 py-2 flex gap-1.5 items-center w-fit"
              >
                {article?.link} <ArrowUpRightIcon width={22} height={15} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreWebinars;
