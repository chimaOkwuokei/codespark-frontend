// "use client";

// import { useNavigate } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { useState } from "react";
// import clsx from "clsx"; // Optional, helps with conditional classNames

// export default function DeliveryChannelSelection() {
//     const navigate = useNavigate();
//     const [selectedChannels, setSelectedChannels] = useState<string[]>([]);

//     const toggleChannel = (channel: string) => {
//         setSelectedChannels((prev) =>
//             prev.includes(channel)
//                 ? prev.filter((c) => c !== channel)
//                 : [...prev, channel]
//         );
//     };

//     const isSelected = (channel: string) => selectedChannels.includes(channel);

//     return (
//         <div className="min-h-screen w-full flex items-center justify-center bg-[#E8EBF8] bg-cover bg-no-repeat bg-center px-4 py-8 sm:px-6 md:px-8"
//             style={{ backgroundImage: 'url(/background-image.svg)' }}>
//             <div className="bg-[#E8EBF8] w-full max-w-4xl rounded-2xl p-6 sm:p-8 md:p-10 text-center relative">
//                 <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1B2559] mb-10">
//                     Select delivery channel
//                 </h1>

//                 <div className="flex flex-wrap justify-center gap-10 mb-6">
//                     {/* WhatsApp */}
//                     <div
//                         onClick={() => toggleChannel("whatsapp")}
//                         className={clsx(
//                             "cursor-pointer rounded-2xl p-2 transition-transform hover:scale-105",
//                             isSelected("whatsapp") ? "ring-4 ring-[#2B366F]" : "ring-2 ring-transparent"
//                         )}
//                     >
//                         <img
//                             src="/whatsapp.svg"
//                             alt="WhatsApp"
//                             className="w-24 sm:w-28 md:w-32"
//                         />
//                     </div>

//                     {/* Snapchat */}
//                     <div
//                         onClick={() => toggleChannel("snapchat")}
//                         className={clsx(
//                             "cursor-pointer rounded-2xl p-2 transition-transform hover:scale-105",
//                             isSelected("snapchat") ? "ring-4 ring-[#2B366F]" : "ring-2 ring-transparent"
//                         )}
//                     >
//                         <img
//                             src="/snapchat.svg"
//                             alt="Snapchat"
//                             className="w-24 sm:w-28 md:w-32"
//                         />
//                     </div>
//                 </div>

//                 <p className="text-xs text-gray-600 mb-8">*Note: You can select both channels</p>

//                 <div className="flex justify-between px-4">
//                     <Button
//                         className="bg-[#2B366F] text-white px-6 py-2 rounded-full text-sm"
//                         onClick={() => navigate(-1)}
//                     >
//                         Back
//                     </Button>

//                     <Button
//                         className="bg-[#2B366F] text-white px-6 py-2 rounded-full text-sm"
//                         onClick={() => navigate("/login")}
//                         disabled={selectedChannels.length === 0}
//                     >
//                         Finish →
//                     </Button>
//                 </div>
//             </div>
//         </div>
//     );
// }
