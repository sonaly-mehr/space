"use client";
import Image from "next/image";
import React from "react";
import CountUp from "react-countup";
import Button from "../ui/Button";

const PowerOfDrupal = () => {
  const counts = [
    {
      digit: "1",
      descp: "Commits in the last week",
    },
    {
      digit: "123",
      descp: "Users actively contributing",
    },
    {
      digit: "3",
      descp: "Comments in the last week",
    },
  ];
  return (
    <div className="container py-16">
      <div className="flex flex-col xl:flex-row justify-between content-layout">
        <h1 className="font-bold text-primary text-[5rem] lg:text-[9.375rem] leading-[100%] lg:leading-[10.375rem] tracking-[-7px] xl:tracking-[-14px] mb-12 xl:mb-0">
          The Power <br />
          of Drupal
        </h1>
        <p className="paragraph xl:max-w-[35%] drupal-descp">
          Learn why Drupal powers one in 40 websites in the world including
          sites from Tesla, Pfizer and NBC.
        </p>
      </div>
      <div className="w-full mt-10 lg:mt-24 mb-10 xl:mb-14">
        <Image
          src="/images/car.png"
          alt="car"
          width={600}
          height={300}
          className="w-full h-auto"
        />
      </div>

      <div className="flex flex-col xl:flex-row justify-between gap-10 lg:gap-14">
        <div className="flex-1">
          <Image
            src="/images/tesla.png"
            alt=""
            width={300}
            height={200}
            className="w-full h-auto"
          />
          <p className="paragraph mt-6 mb-8">
            Tesla believes the faster the world stops relying on fossil fuels
            and moves towards a zero-emission future, the better.
          </p>
          <Button text="Learn more" />
        </div>

        <div className="flex flex-1 gap-6 justify-center">
          {counts?.map((count, index) => (
            <div key={index} className="flex-1">
              <span className="flex gap-1 items-center justify-center text-[2rem] md:text-6xl leading-10 md:leading-[72px] text-primary font-bold capitalize">
                <span>+</span>
                <CountUp
                  end={count?.digit}
                  enableScrollSpy={true}
                  duration={8}
                  scrollSpyOnce={true}
                />
                <span>K</span>
              </span>
              <p className="font-nomral text-primary text-base mt-5 text-center">
                {count?.descp}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PowerOfDrupal;
