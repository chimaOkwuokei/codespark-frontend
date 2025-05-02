import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { AppSidebar } from "@/components/app-sidebar";

export default function UserLayout() {
    const [firstName, setFirstName] = useState('');

    useEffect(() => {
        const userFirstName = localStorage.getItem('firstName');
        if (userFirstName) {
            setFirstName(userFirstName);
        }
    }, []);
    return (
        <SidebarProvider>
            <AppSidebar />
            <main className='w-full'>
                <div className="flex flex-row items-center justify-between gap-4 pt-7 p-5 px-4">
                    {/* Sidebar Trigger */}
                    <div className="flex-shrink-0">
                        <SidebarTrigger />
                    </div>

                    {/* Welcome Message */}
                    <div className="xs:block text-xl text-[white] whitespace-nowrap">
                        Welcome, <span className="font-semibold">{firstName || 'Guest'}</span>
                    </div>

                    {/* Search + Profile */}
                    <div className="flex items-center gap-3 flex-grow justify-end">
                        {/* Full Search Bar on sm+ */}
                        <div className="hidden sm:flex items-center bg-white rounded-full px-3 py-1 max-w-xs w-full">
                            <input
                                type="text"
                                placeholder="Search"
                                className="flex-1 bg-transparent outline-none text-sm text-gray-800"
                                onClick={(e) => {
                                    e.preventDefault();
                                    alert(`Search — Coming soon!`);
                                }}
                            />
                            <div className="bg-[white] p-2 rounded-full flex items-center justify-center ml-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-4 h-4 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
                                    />
                                </svg>
                            </div>
                        </div>

                        {/* Icon-only search for small screens */}
                        <div className="sm:hidden bg-[white] p-2 rounded-full flex items-center justify-center"
                            onClick={(e) => {
                                e.preventDefault();
                                alert(`Search — Coming soon!`);
                            }}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5 text-#E9ECF7"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
                                />
                            </svg>
                        </div>

                        {/* Profile Section */}
                        <div className="hidden sm:flex relative flex-shrink-0" onClick={(e) => {
                            e.preventDefault();
                            alert(`Profile + Customized Avatar — Coming soon!`);
                        }}>
                            <img
                                src="/profile.svg"
                                alt="Profile"
                                className="w-10 h-10 rounded-full object-cover"
                            />
                        </div>
                    </div>
                </div>
                <Outlet /> {/* Nested routes will render here */}
            </main>
        </SidebarProvider>
    );
}