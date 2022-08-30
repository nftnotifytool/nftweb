/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";
import rightImgDemo from "images/accounting.png";
import rightLargeImgDark from "images/time.png";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import Logo from "shared/Logo/Logo";
import ButtonSecondary from "shared/Button/ButtonSecondary";

export interface SectionBecomeAnAuthorProps {
    className?: string;
}

const SectionBecomeAnAuthor: FC<SectionBecomeAnAuthorProps> = ({
   className = "",
}) => {
    return (
        <div
            className={`nc-SectionBecomeAnAuthor relative flex flex-col lg:flex-row items-center  ${className}`}
            data-nc-id="SectionBecomeAnAuthor"
        >
            <div className="flex-shrink-0 mb-16 lg:mb-0 lg:mr-10 lg:w-2/5">
                <Logo className="w-28" />
                <h2 className="font-semibold text-3xl sm:text-4xl xl:text-6xl mt-6 sm:mt-10 !leading-[1.112] tracking-tight">
                    Tracking NFT easy <br /> with our tool.
                </h2>
                <span className="block mt-6 text-neutral-500 dark:text-neutral-400 ">
          No more scattered data.
        </span>
                
            </div>
            <div className="flex-grow">
                <img className="block dark:hidden" src={rightImgDemo.src} />
                <img
                    className="hidden dark:block"
                    src={rightLargeImgDark.src}
                />
            </div>
        </div>
    );
};

export default SectionBecomeAnAuthor;
