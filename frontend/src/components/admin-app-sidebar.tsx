import {
    LogOut,
    PersonStanding,
    NewspaperIcon,
} from "lucide-react";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import Swal from "sweetalert2"
// import { useUser } from "../UserContext";
// Menu items.
const items = [
    {
        title: "Profile",
        url: "/admin/profile",
        icon: PersonStanding, // Good for main/news home
    },
    {
        title: "Create News",
        url: "/admin/create-news",
        icon: NewspaperIcon, // Better for national news
    },
    {
        title: "Logout",
        url: "/login",
        icon: LogOut, // More appropriate than Settings
    },
]

export function AdminAppSidebar() {
    // const {user} = useUser();

    return (
        <Sidebar>
            
            {/* sidebar header */}
            <SidebarHeader className="flex flex-col items-center py-12 space-y-6">
                {/* Logo Section */}
                <SidebarGroup className="flex flex-col items-center space-y-2">
                    <SidebarGroupLabel>
                        <img src="/logo.png" alt="Pulse Logo" className="h-16" />
                    </SidebarGroupLabel>
                </SidebarGroup>
            </SidebarHeader>
            {/* sidebar content */}
            <SidebarContent className="m-4">
                <SidebarGroup className="px-4 bg-[#2B366F] rounded-4xl text-white p-6">
                    {/* <SidebarGroupLabel className="text-xl text-white">Category</SidebarGroupLabel> */}
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => {
                                const title = item.title;
                                const url = item.url;

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
