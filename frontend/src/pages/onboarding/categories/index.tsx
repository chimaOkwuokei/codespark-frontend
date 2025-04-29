// "use client";

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { useNavigate } from "react-router-dom";

// const categories = [
//     "Health", "Science", "Sports", "Entertainment", "National",
//     "Worlds", "Business", "Tech"
// ];

// export default function CategoriesUi() {
//     const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
//     const navigate = useNavigate();

//     const toggleCategory = (category: string) => {
//         setSelectedCategories(prev =>
//             prev.includes(category) ? prev.filter(t => t !== category) : [...prev, category]
//         );
//     };

//     return (
//         <div className="min-h-screen w-full flex items-center justify-center bg-[#E8EBF8] bg-cover bg-no-repeat bg-center px-4 py-8 sm:px-6 md:px-8" 
//         style={{ backgroundImage: 'url(/background-image.svg)' }}>
//             <div className="bg-[#E8EBF8] w-full max-w-5xl rounded-2xl shadow-lg py-10 px-6 md:px-12 text-center relative">
//                 <h1 className="text-3xl md:text-4xl font-bold text-[#1B2559] mb-8">
//                     Select your category preference
//                 </h1>

//                 <div className="flex flex-wrap justify-center gap-4 mb-12">
//                     {categories.map((category) => (
//                         <button
//                             key={category}
//                             onClick={() => toggleCategory(category)}
//                             className={`px-4 py-2 border rounded-full text-sm font-medium transition-all ${selectedCategories.includes(category)
//                                     ? "bg-[#4357b9] text-white border-[#4357b9]"
//                                     : "bg-white text-[#1B2559] border-gray-300"
//                                 }`}
//                         >
//                             {category}
//                         </button>
//                     ))}
//                 </div>

//                 <div className="flex justify-between">
//                     <Button
//                         className="bg-[#2B366F] text-white px-6 py-2 rounded-full"
//                         onClick={() => navigate(-1)}
//                     >
//                         Back
//                     </Button>

//                     <Button
//                         className="bg-[#2B366F] text-white px-6 py-2 rounded-full"
//                         onClick={() => navigate("/signin-channel")}
//                     >
//                         Next →
//                     </Button>
//                 </div>
//             </div>
//         </div>
//     );
// }

