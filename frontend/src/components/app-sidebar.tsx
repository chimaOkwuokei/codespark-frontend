import { Calendar, Home, Settings, Box, BookText, MessageCircleQuestion, ChevronUp } from "lucide-react"
// import Starfire from '@/assets/starfire.jpg'
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
// import { useUser } from "../UserContext";
// Menu items.
const items = [
    {
        title: "Latest",
        url: "/user/latest-news",
        icon: Home,
    },
    {
        title: "Events",
        url: "#",
        icon: Box,
    },
    {
        title: "Sports",
        url: "#",
        icon: BookText,
    },
    {
        title: "Club News",
        url: "#",
        icon: Calendar,
    },
    {
        title: "Business",
        url: "#",
        icon: MessageCircleQuestion,
    },
    {
        title: "Entertainment",
        url: "#",
        icon: MessageCircleQuestion,
    },
    {
        title: "Blogs",
        url: "#",
        icon: MessageCircleQuestion,
    },
    {
        title: "Technology",
        url: "#",
        icon: MessageCircleQuestion,
    },
    {
        title: "Settings",
        url: "/user/profile",
        icon: Settings,
    },
]

export function AppSidebar() {
    // const {user} = useUser();
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
                            <p className="font-semibold">Dara_1 </p>
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
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url} className={item.url === location.pathname ? "bg-blue-700 text-white" : ''}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            {/* sidebar footer */}
            {/* <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton>
                                    <Avatar className=' w-8 h-8 bg-blue-200 justify-center items-center'>
                                        <AvatarImage/>
                                    </Avatar> 
                                    Placeholder
                                    <ChevronUp className="ml-auto" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                side="top"
                                className="w-[--radix-popper-anchor-width]"
                            >
                                <DropdownMenuItem>
                                    <span>Account</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <span>Billing</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <span>Sign out</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter> */}
        </Sidebar>
    )
}
