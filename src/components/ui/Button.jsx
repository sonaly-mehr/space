import Link from "next/link";
import React from "react";
import {
    ArrowRightIcon,
  } from "@heroicons/react/24/outline";

const Button = ({text, className}) => {
  return (
    <Link
      href="/"
      className={` ${className} bg-[#0678BE] px-7 py-4 rounded-lg text-center text-base text-medium text-white normal-case flex gap-1.5 items-center justify-center w-fit transition duration-300 ease-in-out hover:bg-[#009CDE]`}
    >
      {text} <ArrowRightIcon width={28} height={22} />
    </Link>
  );
};

export default Button;
