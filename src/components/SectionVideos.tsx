import Heading from "shared/Heading/Heading";
import NcImage from "shared/NcImage/NcImage";
import NcPlayIcon from "shared/NcPlayIcon/NcPlayIcon";
import React, { FC, useState } from "react";
import isSafariBrowser from "utils/isSafariBrowser";

export interface VideoType {
    id: string;
    title: string;
    thumbnail: string;
}

export interface SectionVideosProps {
    videos?: VideoType[];
    className?: string;
}

const VIDEOS_DEMO: VideoType[] = [
    {
        id: "RzVvThhjAKw",
        title: "Tracking NFT Collections",
        thumbnail:
            "https://renderedvideos.renderforest.com/3220514_64077039/capture.png?queueId=62456653&Expires=1664064000&Key-Pair-Id=K2F1WC56RDW2LW&Signature=j%7EGw4V3hPx91Y87HPu5hhm2wu4f2mi9jY8%7EKFv7POiz0QKOjpEIFvnWHD8oa2acIO3NpHNMn4pKw7c5AZbZJRq9NDG7TnDKdRO9QBdKJ%7EIPPUMR3CA9wd9Q1ksxCsFN4259LgTTXCj5HxAftPgDsQVjusmrsSlHYGpKC7zMKz518ftEk8nQ2B-Lsfy3uwciivis6llZBKI3qhBpjIKg9E43qHRwkXXQwl-H50leA0LbK4dvN7ToZvIYJKfGvKq8X8zr9xRkVgn3rOs2fwinM76rXwoSyiODpGpl5jbh5UTdikdtFvYKdueC-fjrXjmCk3Eko7K%7Ee9-0g%7E%7E%7EglekrGw__",
    },
];

const SectionVideos: FC<SectionVideosProps> = ({
   videos = VIDEOS_DEMO,
   className = "",
}) => {
    const [isPlay, setIsPlay] = useState(false);
    const [currentVideo] = useState(0);

    const renderMainVideo = () => {
        const video: VideoType = videos[currentVideo];
        return (
            <div
                id="video"
                className="group aspect-w-16 aspect-h-16 sm:aspect-h-9 bg-neutral-800 rounded-3xl overflow-hidden border-4 border-white dark:border-neutral-900 sm:rounded-[50px] sm:border-[10px] z-0"
                title={video.title}
            >
                {isPlay ? (
                  <video width="100%" height="100%" controls autoPlay>
                    <source src="/video-intro.mp4" type="video/mp4" />
                  </video>
                ) : (
                    <>
                        <div
                            onClick={() => setIsPlay(true)}
                            className="cursor-pointer absolute inset-0 flex items-center justify-center z-10"
                        >
                            <NcPlayIcon />
                        </div>
                        <NcImage
                            containerClassName="absolute inset-0 rounded-3xl overflow-hidden z-0"
                            className="object-cover w-full h-full transition-transform group-hover:scale-105 duration-300  "
                            src={video.thumbnail}
                            title={video.title}
                            alt={video.title}
                        />
                    </>
                )}
            </div>
        );
    };

    return (
        <div className={`nc-SectionVideos ${className}`}>
            <Heading
                desc="Check out our hottest videos. View more and share more new
          perspectives on just about any topic. Everyone’s welcome."
            >
                🎬 The Videos
            </Heading>

            <div className="flex flex-col relative sm:pr-4 sm:py-4 md:pr-6 md:py-6 xl:pr-14 xl:py-14 lg:flex-row">
                <div className="absolute -top-4 -bottom-4 -right-4 w-2/3 rounded-3xl bg-primary-100 z-0 sm:rounded-[50px] md:top-0 md:bottom-0 md:right-0 xl:w-7/12 dark:bg-neutral-800/80"></div>
                <div className="flex-grow relative  ">{renderMainVideo()}</div>
            </div>
        </div>
    );
};

export default SectionVideos;
