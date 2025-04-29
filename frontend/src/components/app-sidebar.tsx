import {
    Home,
    Newspaper,
    Globe,
    Trophy,
    Briefcase,
    Film,
    Cpu,
    FlaskConical,
    HeartPulse,
    LogOut,
    Settings
} from "lucide-react";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { useEffect, useState } from "react"
import Swal from "sweetalert2"
import { Button } from "./ui/button"
// import { useUser } from "../UserContext";
// Menu items.
const items = [
    {
        title: "Latest PAU News",
        url: "/user/latest-news",
        icon: Home, // Good for main/news home
    },
    {
        title: "National",
        url: "/user/national",
        icon: Newspaper, // Better for national news
    },
    {
        title: "Worlds",
        url: "/user/worlds",
        icon: Globe, // Perfect for world news
    },
    {
        title: "Sports",
        url: "/user/sports",
        icon: Trophy, // Ideal for sports
    },
    {
        title: "Business",
        url: "/user/business",
        icon: Briefcase, // Represents business
    },
    {
        title: "Entertainment",
        url: "/user/entertainment",
        icon: Film, // Best for entertainment
    },
    {
        title: "Technology",
        url: "/user/technology",
        icon: Cpu, // Represents tech
    },
    {
        title: "Science",
        url: "/user/science",
        icon: FlaskConical, // Science icon
    },
    {
        title: "Health",
        url: "/user/health",
        icon: HeartPulse, // Medical/health icon
    },
    {
        title: "Logout",
        url: "/login",
        icon: LogOut, // More appropriate than Settings
    },
]

export function AppSidebar() {
    // const {user} = useUser();
    const [email, setEmail] = useState<string | null>(null);

    useEffect(() => {
        // Retrieve email from localStorage
        const storedEmail = localStorage.getItem("email");
        setEmail(storedEmail);
    }, []);

    return (
        <Sidebar>
            {/* sidebar header */}
            <SidebarHeader className="flex flex-col items-center py-6 space-y-6">
                {/* Logo Section */}
                <SidebarGroup className="flex flex-col items-center space-y-2">
                    <SidebarGroupLabel>
                        <img src="/logo.png" alt="Pulse Logo" className="h-16" />
                    </SidebarGroupLabel>
                </SidebarGroup>

                {/* Profile Avatar Section */}
                <div className="flex flex-col items-center space-y-1">
                    <div className="w-25 h-25 rounded-full flex items-center justify-center">
                        <img src="/profile.svg" alt="Profile Image" />
                    </div>
                    <div className="text-center">
                        <div className="flex space-x-2">
                            <p className="font-semibold">Welcome, {email || "Guest"} </p>
                            <img className="w-6 h-6" src="/settings.svg" alt="" />
                        </div>
                        <p className="text-sm text-gray-500">blogger</p>
                    </div>
                </div>
            </SidebarHeader>
            {/* sidebar content */}
            <SidebarContent className="m-4">
                <SidebarGroup className="px-4 bg-[#2B366F] rounded-4xl text-white p-6">
                    <SidebarGroupLabel className="text-xl text-white">Category</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => {
                                const title = item.title;
                                const url = item.url;
                                const category = title.toLowerCase();

                                return (
                                    <SidebarMenuItem key={title}>
                                        <SidebarMenuButton asChild>
                                            <a
                                                href={url}
                                                onClick={(e) => {
                                                    if (title === "Logout") {
                                                        e.preventDefault();
                                                        localStorage.clear();
                                                        Swal.fire({
                                                            title: "Logged Out",
                                                            text: "You have been logged out successfully.",
                                                            icon: "success",
                                                            timer: 1500,
                                                            showConfirmButton: false,
                                                        });
                                                        setTimeout(() => {
                                                            window.location.href = url;
                                                        }, 1600);
                                                        return;
                                                    }

                                                    // Save category if it's not Login or Latest PAU News
                                                    if (!["login", "latest pau news"].includes(category)) {
                                                        localStorage.setItem("category", category);
                                                    }
                                                }}
                                                className={url === location.pathname ? "bg-blue-950 text-white" : ""}
                                            >
                                                <item.icon />
                                                <span>{title}</span>
                                            </a>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                );
                            })}
                        </SidebarMenu>

                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
