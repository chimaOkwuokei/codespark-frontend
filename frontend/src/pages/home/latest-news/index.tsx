// "use client"

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   DropdownMenu,
//   DropdownMenuCheckboxItem,
//   DropdownMenuContent,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import { Search } from "lucide-react";
// import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
// import React from "react";
// import { Card } from "@/components/ui/card";
// // import Image from "next/image";

// type Checked = DropdownMenuCheckboxItemProps["checked"]

// export default function LatestNewsUi() {
//   const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
//   const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false)
//   const [showPanel, setShowPanel] = React.useState<Checked>(false)

//   return (
//     <div className="w-100% flex min-h-screen bg-[#E7EAFD]">

//       {/* Left Side Content */}
//       <div className="w-100% flex-1 p-6 space-y-8">
//         <div className="flex justify-between items-center">
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button variant="outline">General</Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent className="z-50 bg-white border rounded-md shadow-md w-56">

//               <DropdownMenuLabel>Appearance</DropdownMenuLabel>
//               <DropdownMenuSeparator />
//               <DropdownMenuCheckboxItem
//                 checked={showStatusBar}
//                 onCheckedChange={setShowStatusBar}
//               >
//                 Status Bar
//               </DropdownMenuCheckboxItem>
//               <DropdownMenuCheckboxItem
//                 checked={showActivityBar}
//                 onCheckedChange={setShowActivityBar}
//                 disabled
//               >
//                 Activity Bar
//               </DropdownMenuCheckboxItem>
//               <DropdownMenuCheckboxItem
//                 checked={showPanel}
//                 onCheckedChange={setShowPanel}
//               >
//                 Panel
//               </DropdownMenuCheckboxItem>
//             </DropdownMenuContent>
//           </DropdownMenu>
//         </div>

//         {/* Headlines */}
//         <div>
//           <h2 className="text-xl font-bold mb-3">Todays Headlines</h2>
//           <Card className='flex py-2 flex-wrap gap-4 shadow-md'>
//             <img src="/headline-image.png" alt="Career Fair" width={800} height={400} className="w-full h-64 object-cover p-3" />
//             <div className="p-4">
//               <h3 className="font-semibold text-lg">Student Career Fair Review: Opportunities meet Ambition.</h3>
//               <div className="mt-2 flex flex-row justify-between">
//                 <p className="text-md text-gray-600">by Student Council</p>
//                 <Button className="bg-[#2B366F] rounded-3xl w-[147px]">Read</Button>
//               </div>
//             </div>
//           </Card>
//         </div>

//         {/* Blogs */}
//         <div>
//           <h2 className="text-xl font-bold mb-3">Blogs</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">

//             <Card className="bg-white rounded-xl shadow-md w-[300px]">
//               <img src="/shawarma.png" alt="Shawarma" width={300} height={200} className="w-full h-40 object-cover p-3" />
//               <div className="p-4 space-y-2">
//                 <p className="font-medium">How to make shawarma</p>
//                 <p className="text-sm text-gray-500">by Cooking_with_Sayo</p>
//                 <div className="flex flex-row justify-end">
//                   <Button className="bg-[#2B366F] rounded-3xl w-[147px]">Read</Button>
//                 </div>
//               </div>
//             </Card>

//             <Card className="bg-white rounded-xl shadow-md w-[300px]">
//               <img src="/shawarma.png" alt="Shawarma" width={300} height={200} className="w-full h-40 object-cover p-3" />
//               <div className="p-4 space-y-2">
//                 <p className="font-medium">How to make shawarma</p>
//                 <p className="text-sm text-gray-500">by Cooking_with_Sayo</p>
//                 <div className="flex flex-row justify-end">
//                   <Button className="bg-[#2B366F] rounded-3xl w-[147px]">Read</Button>
//                 </div>
//               </div>
//             </Card>

//             <Card className="bg-white rounded-xl shadow-md w-[300px]">
//               <img src="/shawarma.png" alt="Shawarma" width={300} height={200} className="w-full h-40 object-cover p-3" />
//               <div className="p-4 space-y-2">
//                 <p className="font-medium">How to make shawarma</p>
//                 <p className="text-sm text-gray-500">by Cooking_with_Sayo</p>
//                 <div className="flex flex-row justify-end">
//                   <Button className="bg-[#2B366F] rounded-3xl w-[147px]">Read</Button>
//                 </div>
//               </div>
//             </Card>
//           </div>
//         </div>
//       </div>

//       {/* Right Side Content */}
//       <div className="hidden xl:block w-100 p-6 m-4 space-y-6">

//         {/* Search Bar */}
//         <div className="relative w-100%">
//           <Input placeholder="Search" className="pr-10" />
//           <Search className="absolute right-2 top-2.5 h-5 w-5 text-gray-500" />
//         </div>
//         {/* Sports News */}
//         <div>
//           <div className="flex justify-between">
//             <h3 className="text-lg font-semibold mb-2">Sports</h3>
//             <span className="text-sm text-blue-600 cursor-pointer ml-1 underline">see all</span>
//           </div>

//           <div className="bg-white p-4 rounded-xl shadow">
//             <p className="font-medium">🏆 Basketball (boys)</p>
//             <p className="text-center my-2 text-lg font-bold">Bluejay vs Cirok</p>
//           </div>
//         </div>

//         {/* Club News */}
//         <div>
//           <div className="flex justify-between">
//             <h3 className="text-lg font-semibold mb-2">Club News</h3>
//             <span className="text-sm text-blue-600 cursor-pointer ml-1 underline">see all</span>
//           </div>
//           <div className="bg-white p-4 rounded-xl shadow space-y-4 text-sm">
//             <div>
//               <p className="font-bold">Euphoria Club</p>
//               <p>Hey guys!! If you want to join PAU's dance club-Euphoria you still can!!...</p>
//             </div>
//             <div>
//               <p className="font-bold">TIC Club</p>
//               <p>This is to inform you that Interswitch is in Jos. Opportunity to meet with industry representatives...</p>
//             </div>
//             <div>
//               <p className="font-bold">Art Club</p>
//               <p>Welcome back! While we can't send you home food, we can inspire you...</p>
//             </div>
//             <div>
//               <p className="font-bold">Euphoria Club</p>
//               <p>Hey guys!! If you want to join PAU's dance club-Euphoria you still can!!...</p>
//             </div>
//             <div>
//               <p className="font-bold">TIC Club</p>
//               <p>This is to inform you that Interswitch is in Jos. Opportunity to meet with industry representatives...</p>
//             </div>
//             <div>
//               <p className="font-bold">Art Club</p>
//               <p>Welcome back! While we can't send you home food, we can inspire you...</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Search } from "lucide-react"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
import React from "react"
import { Card } from "@/components/ui/card"

type Checked = DropdownMenuCheckboxItemProps["checked"]

export default function LatestNewsUi() {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false)
  const [showPanel, setShowPanel] = React.useState<Checked>(false)

  return (
    <div className="min-h-screen bg-[#E7EAFD] px-4 py-6">
      <div className="max-w-screen-xl mx-auto flex flex-col xl:flex-row gap-6">

        {/* Left Content */}
        <div className="w-full xl:w-2/3 space-y-8">
          {/* Dropdown */}
          <div className="flex justify-between items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">General</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="z-50 bg-white border rounded-md shadow-md w-56">
                <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem
                  checked={showStatusBar}
                  onCheckedChange={setShowStatusBar}
                >
                  Status Bar
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={showActivityBar}
                  onCheckedChange={setShowActivityBar}
                  disabled
                >
                  Activity Bar
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={showPanel}
                  onCheckedChange={setShowPanel}
                >
                  Panel
                </DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Headlines */}
          <div>
            <h2 className="text-xl font-bold mb-3">Today's Headlines</h2>
            <Card className="flex flex-col shadow-md">
              <img src="/headline-image.png" alt="Career Fair" className="w-full md:w-1/2 h-64 object-cover p-3" />
              <div className="p-4 flex flex-col justify-between">
                <h3 className="font-semibold text-lg">
                  Student Career Fair Review: Opportunities meet Ambition.
                </h3>
                <div className="mt-4 flex justify-between">
                  <p className="text-md text-gray-600">by Student Council</p>
                  <Button className="bg-[#2B366F] rounded-3xl w-[147px]">Read</Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Blogs */}
          <div>
            <h2 className="text-xl font-bold mb-3">Blogs</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
              {[1, 2, 3].map((item) => (
                <Card key={item} className="bg-white rounded-xl shadow-md w-full">
                  <img src="/logo.png" alt="Shawarma" className="w-full h-40 object-cover p-3" />
                  <div className="p-4 space-y-2">
                    <p className="font-medium">How to make shawarma</p>
                    <p className="text-sm text-gray-500">by Cooking_with_Sayo</p>
                    <div className="flex justify-end">
                      <Button className="bg-[#2B366F] rounded-3xl w-[147px]">Read</Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full xl:w-1/3 space-y-6">
          {/* Search */}
          <div className="relative w-full">
            <Input placeholder="Search" className="pr-10" />
            <Search className="absolute right-3 top-3 h-5 w-5 text-gray-500" />
          </div>

          {/* Sports News */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Sports</h3>
              <span className="text-sm text-blue-600 cursor-pointer underline">see all</span>
            </div>
            <div className="bg-white p-4 rounded-xl shadow">
              <p className="font-medium">🏆 Basketball (boys)</p>
              <p className="text-center my-2 text-lg font-bold">Bluejay vs Cirok</p>
            </div>
          </div>

          {/* Club News */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Club News</h3>
              <span className="text-sm text-blue-600 cursor-pointer underline">see all</span>
            </div>
            <div className="bg-white p-4 rounded-xl shadow space-y-4 text-sm">
              {[
                { title: "Euphoria Club", content: "Hey guys!! If you want to join PAU's dance club-Euphoria you still can!!..." },
                { title: "TIC Club", content: "This is to inform you that Interswitch is in Jos. Opportunity to meet with industry representatives..." },
                { title: "Art Club", content: "Welcome back! While we can't send you home food, we can inspire you..." },
              ].map((news, index) => (
                <div key={index}>
                  <p className="font-bold">{news.title}</p>
                  <p>{news.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

