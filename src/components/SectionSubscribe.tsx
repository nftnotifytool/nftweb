/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";
import ButtonCircle from "shared/Button/ButtonCircle";
import rightImg from "images/SVG-subcribe2.png";
import Badge from "shared/Badge/Badge";
import Input from "shared/Input/Input";
import { ArrowSmRightIcon } from "@heroicons/react/outline";

export interface SectionSubscribeProps {
    className?: string;
}

const redirectToWebsite = () => {
    return window.location.href = 'https://discord.gg/EuDaF2Evqw';
}

const SectionSubscribe: FC<SectionSubscribeProps> = ({ className = "" }) => {
    return (
        <div
            className={`nc-SectionSubscribe2 relative flex flex-col lg:flex-row lg:items-center ${className}`}
            data-nc-id="SectionSubscribe2"
        >
            <div className="flex-shrink-0 mb-10 lg:mb-0 lg:mr-10 lg:w-2/5">
                <h2 className="font-semibold text-4xl">Join discord!</h2>
                <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
          Join discord to get the early bird role and has a chance to using the first version of notification bot
        </span>
        {/*        <ul className="space-y-4 mt-10">
                    <li className="flex items-center space-x-4">
                        <Badge name="01" />
                        <span className="font-medium text-neutral-700 dark:text-neutral-300">
              Get more discount
            </span>
                    </li>
                    <li className="flex items-center space-x-4">
                        <Badge color="red" name="02" />
                        <span className="font-medium text-neutral-700 dark:text-neutral-300">
              Get premium magazines
            </span>
                    </li>
                </ul>*/}
                <form className="mt-10 relative max-w-sm">
                    <Input
                        required
                        aria-required
                        placeholder="Enter your email"
                        type="email"
                        rounded="rounded-full"
                    />
                    <ButtonCircle
                        type="button"
                        className="absolute transform top-1/2 -translate-y-1/2 right-1"
                        onClick={redirectToWebsite}
                    >
                        <ArrowSmRightIcon className="w-6 h-6" />
                    </ButtonCircle>
                </form>
            </div>
            <div className="flex-grow">
                <img src={rightImg.src} alt="Never miss a drop!" />
            </div>
        </div>
    );
};

export default SectionSubscribe;
