/* eslint-disable @next/next/no-img-element */
import BgGlassmorphism from "components/BgGlassmorphism/BgGlassmorphism";
import SectionHero from "components/SectionHero/SectionHero";
import { FC } from "react";
import Vector1 from "images/Vector1.png";
import SectionHowItWork from "components/SectionHowItWork/SectionHowItWork";
import SEO from "../../components/SEO";
import SectionSubscribe from "../../components/SectionSubscribe";
import SectionBecomeAnAuthor from "../../components/SectionBecomeAnAuthor";
import BackgroundSection from "../../components/BackgroundSection";
import SectionVideos from "../../components/SectionVideos";

const PageHome: FC<any> = () => {
    return (
        <>
            <SEO title="Page Home" description="hello" siteTitle="NFT"/>
            <div className="nc-PageHome relative overflow-hidden">
                <BgGlassmorphism />
                <div
                    className="container relative space-y-20 mt-12 mb-20 sm:space-y-24 sm:my-24 lg:space-y-32 lg:my-32">
                    <SectionHero
                        className="pb-10"
                        heading={
                            <span>
                                Tracking NFT price and news
                                <span className="relative"></span>
                            </span>
                        }
                    />
                    <SectionVideos />
                    <SectionHowItWork />
                </div>
                <div className="container relative space-y-24 my-24 lg:space-y-32 lg:my-32">
                    <SectionSubscribe />
                    <div className="relative py-20 lg:py-24">
                        <BackgroundSection />
                        <SectionBecomeAnAuthor />
                    </div>

                </div>

            </div>
        </>

    );
}

export default PageHome;