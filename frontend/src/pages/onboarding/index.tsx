import {
    Form,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import clsx from "clsx";
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const categoriesData = [
    { id: "1", name: "sports" },
    { id: "2", name: "world" },
    { id: "3", name: "technology" },
    { id: "4", name: "health" },
    { id: "5", name: "entertainment" },
    { id: "6", name: "science" },
    { id: "7", name: "national" },
    { id: "8", name: "business" },
];

const channelsData = [{ id: "1", name: "whatsapp" }, { id: "2", name: "snapchat" }];

const formSchema = z.object({
    categories: z.array(z.string()).min(1, "Please select at least one category"),
    channel: z.string().min(1, "Please select at least one channel"),
});

const OnboardingFormUi = () => {
    const [currentTab, setCurrentTab] = useState(0);
    const navigate = useNavigate();
    const [name, setName] = useState<string | null>(null);
    // api url
    const API_URL = import.meta.env.VITE_API_URL;

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            channel: "",
            categories: [],
        },
    });

    const { setValue, getValues, watch } = form;

    useEffect(() => {
        const storedName = localStorage.getItem("firstName");
        setName(storedName);
    }, []);

    const toggleCategory = (category: string) => {
        const currentCategories = getValues("categories");
        const newCategories = currentCategories.includes(category)
            ? currentCategories.filter(c => c !== category)
            : [...currentCategories, category];
        setValue("categories", newCategories);
    };

    const toggleChannel = (channel: string) => {
        setValue("channel", channel); // Replace with a single channel
    };


    const isSelected = (item: string, list: string[]) => list.includes(item);


    async function onSubmit(data: z.infer<typeof formSchema>) {
        console.log("Submitted Data:", data);
        setLoading(true);

        if (selectedCategories.length === 0 || selectedChannel.length === 0) {
            Swal.fire({
                icon: "error",
                title: "Incomplete Selection",
                text: "Please select at least one category and one channel.",
                confirmButtonColor: "#003F88",
            });
            return;
        }

        try {
            // to get the access token from localstorage
            const token = localStorage.getItem("accessToken");

            // Map selected category names to IDs
            const categoryIds = data.categories.map(cat => {
                const found = categoriesData.find(c => c.name.toLowerCase() === cat.toLowerCase());
                return found?.id;
            }).filter(id => id !== undefined); // remove any undefined just in case

            const selectedChannelName = data.channel;
            const foundChannel = channelsData.find(c => c.name.toLowerCase() === selectedChannelName.toLowerCase());
            const channelId = foundChannel?.id; // single id string

            const apiData = {
                channelId: channelId,
                categoryIds: categoryIds,
            };

            const response = await axios.post(`${API_URL}/api/channel-subscription`, apiData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

            console.log(response);
            navigate("/user/latest-news");
        } catch (error: any) {
            const errorMessage = error.response?.data?.message || "An unexpected error occurred.";
            Swal.fire({
                icon: "error",
                title: "Operation Failed",
                text: errorMessage,
                confirmButtonColor: "#003F88",
            });
        } finally {
            setLoading(false);
        }
    };
    const [loading, setLoading] = useState(false);
    const handleDone = () => {
        form.handleSubmit(onSubmit);
    };

    const selectedCategories = watch("categories");
    const selectedChannel = watch("channel");

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-[#E8EBF8] bg-cover bg-no-repeat bg-center px-4 py-8 sm:px-6 md:px-8"
            style={{ backgroundImage: 'url(/background-image.svg)' }}>
            <div className="bg-[#E8EBF8] w-full max-w-4xl rounded-2xl p-6 sm:p-8 md:p-10 text-center relative">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>

                        {/* Welcome Tab */}
                        {currentTab === 0 && (
                            <div className="space-y-6 ">
                                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1B2559] mb-6">
                                    Welcome {name || "Guest"}! Let&apos;s get Started.
                                </h1>

                                <Button
                                    className="bg-[#2B366F] text-white px-6 py-2 rounded-full text-sm mb-8"
                                    onClick={() => setCurrentTab(currentTab + 1)}
                                >
                                    Next →
                                </Button>

                                <img
                                    src="/students.svg"
                                    alt="Students"
                                    className="w-full max-w-md mx-auto"
                                />
                            </div>
                        )}

                        {/* Category Selection Tab */}
                        {currentTab === 1 && (
                            <div className="space-y-6">
                                <h1 className="text-3xl md:text-4xl font-bold text-[#1B2559] mb-8">
                                    Select your category preference
                                </h1>

                                <div className="flex flex-wrap justify-center gap-4 mb-12">
                                    {categoriesData.map((category) => (
                                        <button
                                            key={category.id}
                                            type="button"
                                            onClick={() => toggleCategory(category.name)}
                                            className={`px-4 py-2 border rounded-full text-sm font-medium transition-all ${isSelected(category.name, selectedCategories)
                                                ? "bg-[#4357b9] text-white border-[#4357b9]"
                                                : "bg-white text-[#1B2559] border-gray-300"
                                                }`}
                                        >
                                            {category.name}
                                        </button>
                                    ))}
                                </div>

                                <div className="flex justify-between">
                                    <Button
                                        className="bg-[#2B366F] text-white px-6 py-2 rounded-full"
                                        onClick={() => setCurrentTab(currentTab - 1)}
                                    >
                                        Back
                                    </Button>

                                    <Button
                                        className="bg-[#2B366F] text-white px-6 py-2 rounded-full"
                                        onClick={() => setCurrentTab(currentTab + 1)}
                                    >
                                        Next →
                                    </Button>
                                </div>
                            </div>
                        )}

                        {/* Channel Selection Tab */}
                        {currentTab === 2 && (
                            <div className="space-y-6">
                                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1B2559] mb-10">
                                    Select delivery channel
                                </h1>

                                <div className="flex flex-wrap justify-center gap-10 mb-6">
                                    {channelsData.map(channel => {
                                        const isSnapchat = channel.name.toLowerCase() === "snapchat";
                                        return (
                                            <div
                                                key={channel.id}
                                                onClick={() => {
                                                    if (!isSnapchat) toggleChannel(channel.name);
                                                }}
                                                className={clsx(
                                                    "relative rounded-2xl p-2 transition-transform",
                                                    isSnapchat ? "cursor-not-allowed opacity-70" : "cursor-pointer hover:scale-105",
                                                    selectedChannel === channel.name && !isSnapchat
                                                        ? "ring-4 ring-[#2B366F]"
                                                        : "ring-2 ring-transparent"
                                                )}
                                            >
                                                <img
                                                    src={`/${channel.name}.svg`}
                                                    alt={channel.name}
                                                    className="w-24 sm:w-28 md:w-32 rounded-xl"
                                                />

                                                {isSnapchat && (
                                                    <img
                                                        src="/coming-soon-overlay.png"
                                                        // src="/coming-soon.png"
                                                        alt="Coming Soon"
                                                        className="absolute inset-0 w-full h-full object-contain rounded-xl pointer-events-none"
                                                    />
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>



                                <div className="flex justify-between px-4">
                                    <Button
                                        className="bg-[#2B366F] text-white px-6 py-2 rounded-full text-sm"
                                        onClick={() => setCurrentTab(currentTab - 1)}
                                    >
                                        Back
                                    </Button>

                                    <Button
                                        className="bg-[#2B366F] text-white px-6 py-2 rounded-full text-sm"
                                        onClick={handleDone}
                                        loading={loading}
                                        disabled={selectedChannel.length === 0 || selectedCategories.length === 0}
                                    >
                                        Finish →
                                    </Button>
                                </div>
                            </div>
                        )}

                    </form>
                </Form>
            </div>
        </div>
    );
};

export default OnboardingFormUi;
