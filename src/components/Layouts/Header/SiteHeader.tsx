import React, { FC } from "react";
import Logo from "shared/Logo/Logo";
import Navigation from "shared/Navigation/Navigation";
import SwitchDarkMode from "shared/SwitchDarkMode/SwitchDarkMode";
const SiteHeader: FC<any> = () => {
  return (
    <div className="nc-HeaderLogged relative w-full z-40 ">
      <div className={`nc-MainNav2Logged relative z-10 onTop `}>
        <div className="container py-5 relative flex justify-between items-center space-x-4 xl:space-x-8">
          <div className="flex justify-start flex-grow items-center space-x-3 sm:space-x-8 lg:space-x-10">
            <Logo />
          </div>
          <div className="flex-shrink-0 flex items-center justify-end text-neutral-700 dark:text-neutral-100 space-x-1">
            <div className="hidden items-center xl:flex space-x-2">
              <Navigation />
              <div className="hidden sm:block h-6 border-l border-neutral-300 dark:border-neutral-6000"></div>
              <div className="flex">
                <SwitchDarkMode />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SiteHeader;