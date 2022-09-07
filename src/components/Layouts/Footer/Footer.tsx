import Logo from "shared/Logo/Logo";
import SocialsList1 from "shared/SocialsList1/SocialsList1";
import { CustomLink } from "data/types";
import React from "react";

export interface WidgetFooterMenu {
    id: string;
    title: string;
    menus: CustomLink[];
}


const Footer: React.FC = () => {

    return (
        <div className="nc-Footer relative py-20 lg:pt-32 lg:pb-28 border-t border-neutral-200 dark:border-neutral-700">
            <div className="flex items-center justify-center">
                <div className="grid grid-cols-4 gap-5 col-span-2 md:col-span-4 lg:md:col-span-1 lg:flex lg:flex-col">
                    <div className="col-span-2 md:col-span-1 flex">
                        <Logo />
                    </div>
                    <div className="col-span-2 flex items-center md:col-span-3">
                        <SocialsList1 className="flex items-center space-x-2 lg:items-start" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
