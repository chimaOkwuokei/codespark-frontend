"use client";

import { useState, useEffect, useCallback } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import EmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // For navigation arrows

type Headline = {
    id: number;
    title: string;
    author: string;
    blobImage?: string;
    content: string;
};

type HeadlinesSliderProps = {
    headlines: Headline[];
};

const HeadlinesSlider: React.FC<HeadlinesSliderProps> = ({ headlines }) => {
    const [emblaRef, emblaApi] = EmblaCarousel(
        {
            loop: true,
            align: "start",
            containScroll: "trimSnaps",
        },
        // [Autoplay({ delay: 5000 })] // Auto-scroll every 5 seconds
    );

    const [selectedIndex, setSelectedIndex] = useState(0);

    // Update selected index when the carousel scrolls
    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on("select", onSelect);
        onSelect(); // Set initial index
    }, [emblaApi, onSelect]);

    // Navigation functions
    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const scrollTo = useCallback(
        (index: number) => {
            if (emblaApi) emblaApi.scrollTo(index);
        },
        [emblaApi]
    );

    if (!headlines || headlines.length === 0) {
        return <p className="text-center text-gray-600">No headlines available.</p>;
    }

    return (
        <div className="w-full relative">
            {/* Mobile: Horizontal Scroll */}
            <div className="block md:hidden overflow-x-auto no-scrollbar">
                <div className="flex space-x-4 px-4 pb-4 w-max">
                    {headlines.map((item) => (
                        <div key={item.id} className="flex-shrink-0 w-[300px] snap-start">
                            <Card className="w-full h-full shadow-md rounded-xl overflow-hidden">

                                <div className="h-48 ">
                                    <img
                                        src={item.blobImage || "/latest-news-dummy.svg"}
                                        alt={item.title}
                                        className="w-full h-full object-contain"
                                        onError={(e) => {
                                            e.currentTarget.src = "/latest-news-dummy.svg"
                                        }}
                                    />
                                </div>
                                <div className="p-4 flex flex-col justify-between">
                                    <div>
                                        <h3 className="font-semibold text-lg line-clamp-2">{item.title}</h3>
                                        <h4 className="text-lg line-clamp-2">{item.content}</h4>
                                        <p className="text-sm text-gray-600 mt-1">{item.author}</p>
                                    </div>
                                    <Button className="mt-3 bg-[#2B366F] rounded-3xl w-[100px]">Read</Button>
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>


            {/* Desktop: Single Card with Navigation */}
            <div className="hidden md:block relative">
                <div className="embla" ref={emblaRef}>
                    <div className="embla__container flex">
                        {headlines.map((item) => (
                            <div key={item.id} className="flex-[0_0_100%]">
                                <Card className="w-full mx-auto flex flex-col rounded-2xl overflow-hidden">
                                    <div className="w-full h-60 overflow-hidden bg-[#ffffff]">
                                        <img
                                            src={item.blobImage || "/latest-news-dummy.svg"}
                                            alt={item.title}
                                            className="w-full h-full object-contain"
                                            onError={(e) => {
                                                e.currentTarget.src = "/latest-news-dummy.svg";
                                            }}
                                        />
                                    </div>
                                    <div className="p-4 flex flex-col justify-between">
                                        <div>
                                            <h2 className="text-2xl font-semibold mb-2 line-clamp-2">{item.title}</h2>
                                            <h4 className="text-lg line-clamp-2">{item.content}</h4>
                                            <p className="text-sm text-gray-600 pt-2">by {item.author}</p>
                                        </div>
                                        <Button className="bg-[#2B366F] rounded-3xl w-[120px] self-end">
                                            Read
                                        </Button>
                                    </div>
                                </Card>

                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={scrollPrev}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
                >
                    <ChevronLeft className="w-6 h-6 text-[#2B366F]" />
                </button>
                <button
                    onClick={scrollNext}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
                >
                    <ChevronRight className="w-6 h-6 text-[#2B366F]" />
                </button>

                {/* Dots */}
                <div className="flex justify-center mt-4 space-x-2">
                    {headlines.map((_, idx) => (
                        <div
                            key={idx}
                            onClick={() => scrollTo(idx)}
                            className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all ${idx === selectedIndex ? "bg-[#2B366F] scale-125" : "bg-gray-300"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HeadlinesSlider;
