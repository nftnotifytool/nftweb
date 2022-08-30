/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";
import NcImage from "shared/NcImage/NcImage";
import HIW1img from "images/steps/step1.png";
import HIW2img from "images/steps/step2.png";
import HIW3img from "images/steps/step3.png";
import HIW4img from "images/steps/step4.png";
import VectorImg from "images/VectorHIW.svg";
import Badge from "shared/Badge/Badge";

export interface SectionHowItWorkProps {
  className?: string;
  data?: typeof DEMO_DATA[0][];
}

const DEMO_DATA = [
  {
    id: 1,
    img: HIW1img,
    imgDark: HIW1img,
    title: "Search NFT and price",
    desc: "You can search name of NFT then set alert price",
  },
  {
    id: 2,
    img: HIW2img,
    imgDark: HIW2img,
    title: "Get price alert",
    desc: "Get the notification then go to marketplace and take profit",
  },
  {
    id: 3,
    img: HIW3img,
    imgDark: HIW3img,
    title: "Get news alert",
    desc: "Register and get the news, you will be the ealy birds",
  },
  {
    id: 4,
    img: HIW4img,
    imgDark: HIW4img,
    title: " NFT report / insight",
    desc: "Get the report everyday and you will see the big picture",
  },
];

const SectionHowItWork: FC<SectionHowItWorkProps> = ({
  className = "",
  data = DEMO_DATA,
}) => {
  return (
    <div
      className={`nc-SectionHowItWork  ${className}`}
      data-nc-id="SectionHowItWork"
    >
      <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-16 xl:gap-20">
        <img
          className="hidden md:block absolute inset-x-0 -top-1"
          src={VectorImg.src}
          alt="vector"
        />
        {data.map((item: typeof DEMO_DATA[number], index: number) => (
          <div
            key={item.id}
            className="relative flex flex-col items-center max-w-xs mx-auto"
          >
            <img
              className="mb-5 sm:mb-10 lg:mb-20 max-w-[200px] mx-auto"
              src={item.img.src}
            />
            <div className="text-center mt-auto space-y-5">
              <Badge
                name={`Step ${index + 1}`}
                color={
                  !index
                    ? "blue"
                    : index === 1
                    ? "pink"
                    : index === 2
                    ? "yellow"
                    : "green"
                }
              />
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <span className="block text-neutral-500 dark:text-neutral-400">
                {item.desc}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionHowItWork;
