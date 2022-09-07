/* eslint-disable @next/next/no-img-element */
import { SocialType } from "shared/SocialsShare/SocialsShare";
import React, { FC } from "react";
import discord from "images/socials/discord.svg";
import vimeo from "images/socials/vimeo.svg";
import twitter from "images/socials/twitter.svg";
import telegram from "images/socials/telegram.svg";
import youtube from "images/socials/youtube.svg";

export interface SocialsList1Props {
  className?: string;
}

const socials: SocialType[] = [
  { name: "Twitter", icon: twitter, href: "https://twitter.com/nftnotifytool" },
  { name: "Discord", icon: discord, href: "https://discord.gg/EuDaF2Evqw" },
  // { name: "Email", icon: vimeo, href: "mailto:support@nftnotify.xyz" },
  { name: "Telegram", icon: telegram, href: "https://t.me/NftPriceNotifyBot" },
];

const SocialsList1: FC<SocialsList1Props> = ({ className = "space-y-3" }) => {
  const renderItem = (item: SocialType, index: number) => {
    return (
      <a
        href={item.href}
        className="flex items-center text-2xl text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white leading-none space-x-2 group"
        key={index}
      >
        <div className="flex-shrink-0 w-5 ">
          <img src={item.icon.src} alt={item.name} />
        </div>
        <span className="hidden lg:block text-sm">{item.name}</span>
      </a>
    );
  };

  return (
    <div className={`nc-SocialsList1 ${className}`} data-nc-id="SocialsList1">
      {socials.map(renderItem)}
    </div>
  );
};

export default SocialsList1;
