/* eslint-disable @next/next/no-img-element */
import React, { FC, ReactNode } from "react";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import rightImg from "images/hero-banner.png";
import { SearchIcon } from "@heroicons/react/outline";

export interface SectionHeroProps {
  className?: string;
  heading?: ReactNode;
  subHeading?: string;
}

const SectionHero: FC<SectionHeroProps> = ({
  className = "",
  heading = "Tracking NFT price and news",
  subHeading = "Notify news and price of NFT projects that you want to tracking",
}) => {
  return (
    <div
      className={`nc-SectionHero relative ${className}`}
      data-nc-id="SectionHero"
    >
      <div className="flex flex-col lg:flex-row space-y-14 lg:space-y-0 lg:space-x-10 lg:items-center relative">
        <div className="w-screen max-w-full xl:max-w-xl space-y-5 lg:space-y-7">
          <h2 className="text-3xl !leading-tight font-semibold text-neutral-900 md:text-4xl xl:text-5xl dark:text-neutral-100">
            {heading}
          </h2>
          <span className="block text-base xl:text-lg text-neutral-6000 dark:text-neutral-400 max-w-lg">
            {subHeading}
          </span>
          <div className="pt-7 flex  space-x-4">
            <ButtonPrimary href="#video">
              <span className="">See our video</span>
            </ButtonPrimary>
          </div>
        </div>
        <div className="flex-grow">
          <img className="w-full" src={rightImg.src} alt="Banner" style={{width: '700px'}} />
        </div>
      </div>
    </div>
  );
};

export default SectionHero;
