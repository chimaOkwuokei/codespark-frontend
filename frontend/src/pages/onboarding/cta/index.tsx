
"use client";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
// import { cn } from "@/lib/utils";

export default function HeroUi() {
    const navigate = useNavigate();
    return (
        <div className="relative h-screen w-full overflow-hidden bg-cover bg-no-repeat bg-center"
            style={{ backgroundImage: 'url(/background-image.svg)' }}>
            {/* Overlay
            <div className="absolute inset-0 bg-black/30 z-10" /> */}

            {/* Navbar */}
            <div className="relative z-20 mx-auto mt-4 max-w-7xl text-[#2B366F]">
                <div className="bg-[#ffffffdc] rounded-2xl px-6 py-2 flex justify-between items-center shadow-md">
                    <div className="text-xl font-bold tracking-tight">
                        <img src="/logo.png" alt="Pulse Logo" className="h-18" />
                    </div>
                    <nav className="space-x-6 font-medium text-lg hidden md:flex">
                        <a href="#" className="hover:underline">Home</a>
                        <a href="#" className="hover:underline">About</a>
                        <a href="#" className="hover:underline">Services</a>
                        <a href="#" className="hover:underline">Contact</a>
                    </nav>
                    <Button size={"lg"} variant="outline" className="bg-[#2B366F] text-white  hover:bg-[#424c75] hover:text-white dark:hover:bg-[#2B366F] shadow-md"
                        onClick={() => navigate('/signup')}>
                        Sign Up →
                    </Button>
                </div>
            </div>


            {/* Hero Content */}
            <div className="relative z-20 flex flex-col items-start justify-start min-h-[calc(100vh-100px)] px-6 md:px-24 text-white pt-20">

                <div className="border-4 p-12 rounded-2xl bg-black/50 z-10">

                    {/* Heading */}
                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold leading-tight max-w-4xl">
                        Welcome To PAU Pulse
                    </h1>
                    <span className="italic font-light text-2xl md:text-4xl">Your Campus. Your Pulse.</span>
                    {/* Subtext */}
                    <p className="mt-2 text-lg max-w-2xl text-gray-200">
                        PAU Pulse is your go-to campus companion — connecting students, clubs, and admins with real-time updates on everything from sports to events, all sent straight to your DMs.
                    </p>

                    {/* Buttons */}
                    <div className="mt-6 space-x-4 text-[#2B366F] flex justify-end">
                        <Button size={"lg"} className="bg-[#2B366F] hover:bg-[#424c75] text-white"
                        onClick={() => navigate('/signup')}>
                            Register Now!
                        </Button>
                        <Button size={"lg"} variant="outline" className="bg-white hover:bg-gray-300 shadow-xl"
                        onClick={() => navigate('/login')}>
                            Login →
                        </Button>
                    </div>
                </div>

            </div>
        </div>
    );
}
