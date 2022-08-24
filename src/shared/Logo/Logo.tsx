/* eslint-disable @next/next/no-img-element */
import React from "react";
import logoImg from "images/logo.png";
import logoLightImg from "images/logo-light.png";
import Link from "next/link";

export interface LogoProps {
  img?: string;
  imgLight?: string;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  img = logoImg,
  imgLight = logoLightImg,
  className = "",
}) => {
  return (
    <Link
      href="/"
    >
      <a className={`ttnc-logo inline-block text-primary-6000 ${className}`}>
      {img ? (
        <img
          className={`block max-h-12 ${imgLight ? "dark:hidden" : ""}`}
          style={{width: '180px'}}
          src={img.src}
          alt="Logo"
        />
      ) : (
        "Logo Here"
      )}
      {imgLight && (
        <img
          className="hidden max-h-12 dark:block"
          style={{width: '180px'}}
          src={imgLight.src}
          alt="Logo-Light"
        />
      )}
      </a>
    </Link>
  );
};

export default Logo;
