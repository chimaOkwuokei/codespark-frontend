// "use client";

// import { Button } from "@/components/ui/button";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function WelcomeUi() {
//     const navigate = useNavigate();
//     const [name, setName] = useState<string | null>(null);

//     useEffect(() => {
//         const storedName = localStorage.getItem("firstname");
//         setName(storedName);
//     }, []);

//     return (
//         <div className="min-h-screen w-full flex items-center justify-center bg-[#E8EBF8] bg-cover bg-no-repeat bg-center px-4 py-8 sm:px-6 md:px-8"
//              style={{ backgroundImage: 'url(/background-image.svg)' }}>
//             <div className="bg-[#E8EBF8] w-full max-w-4xl rounded-2xl p-6 sm:p-8 md:p-10 text-center relative">
//                 <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1B2559] mb-6">
//                     Welcome {name || "Guest"}! Let&apos;s get Started.
//                 </h1>

//                 <Button
//                     className="bg-[#2B366F] text-white px-6 py-2 rounded-full text-sm mb-8"
//                     onClick={() => navigate("/signin-categories")}
//                 >
//                     Next →
//                 </Button>

//                 <img
//                     src="/students.svg"
//                     alt="Students"
//                     className="w-full max-w-md mx-auto"
//                 />
//             </div>
//         </div>
//     );
// }
