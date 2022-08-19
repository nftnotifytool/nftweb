/* eslint-disable @next/next/no-img-element */
import BgGlassmorphism from "components/BgGlassmorphism/BgGlassmorphism";
import SectionHero from "components/SectionHero/SectionHero";
import { FC } from "react";
import Vector1 from "images/Vector1.png";
import SectionHowItWork from "components/SectionHowItWork/SectionHowItWork";
import SectionLargeSlider from "./SectionLargeSlider";

const PageHome: FC<any> = () => {
  return (
    <div className="nc-PageHome relative overflow-hidden">
      <BgGlassmorphism />
      <div className="container relative space-y-20 mt-12 mb-20 sm:space-y-24 sm:my-24 lg:space-y-32 lg:my-32">
        <SectionHero
          className="pb-10"
          heading={
            <span>
              Discover 🖼
              <br /> collect, and sell <br /> extraordinary {` `}
              <span className="relative pr-3">
                <img
                  className="w-full absolute bottom-3 -left-1"
                  src={Vector1.src}
                  alt="Vector1"
                />
                <span className="relative">NFTs</span>
              </span>
            </span>
          }
        />

        <SectionHowItWork />
      </div>

      <div className="bg-neutral-100/80 dark:bg-black/20 py-20 lg:py-32">
        <div className="container">
          <SectionLargeSlider />
        </div>
      </div>
    </div>
  )
}

export default PageHome;