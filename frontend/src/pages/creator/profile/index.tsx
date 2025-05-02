"use client";

import { Input } from "@/components/ui/input";
import { Eye } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Pencil } from "lucide-react";
import { useEffect, useState } from "react";

export default function ProfileDisplayUi() {
  const [firstName, setFirstName] = useState('');

  useEffect(() => {
    const userFirstName = localStorage.getItem('firstName');
    if (userFirstName) {
      setFirstName(userFirstName);
    }
  }, []);
  return (
    <div className="min-h-screen w-full bg-[#E7EAF8] px-4">
      <div className="w-full rounded-2xl bg-white/60 p-6 shadow-xl backdrop-blur text-center space-y-5">
        {/* Avatar */}
        <div className="flex justify-center">
          <div className="h-32 w-32 rounded-full bg-pink-400 flex items-center justify-center text-white text-6xl">
            <span className="sr-only">Profile Avatar</span>
            ●
          </div>
        </div>

        {/* Username */}
        <h2 className="text-xl font-semibold text-[#2B366F]">{firstName}</h2>

        {/* Email */}
        <div className="relative">
          <Input
            placeholder="Email address"
            value="dara@example.com"
            readOnly
            className="rounded-xl pr-10 text-[#2B366F] placeholder:text-[#2B366F]"
          />
          <Pencil className="absolute right-3 top-3 h-5 w-5 text-[#2B366F]" />
        </div>

        {/* Username */}
        <div className="relative">
          <Input
            placeholder="Username"
            value="Dara_1"
            readOnly
            className="rounded-xl pr-10 text-[#2B366F] placeholder:text-[#2B366F]"
          />
          <Pencil className="absolute right-3 top-3 h-5 w-5 text-[#2B366F]" />
        </div>

        {/* Password */}
        <div className="relative">
          <Input
            type="password"
            value="password123"
            readOnly
            className="rounded-xl pr-10 text-[#2B366F] placeholder:text-[#2B366F]"
          />
          <Eye className="absolute right-3 top-3 h-5 w-5 text-[#2B366F]" />
        </div>

        {/* Notifications */}
        <Select defaultValue="on">
          <SelectTrigger className="rounded-xl text-[#2B366F]">
            <SelectValue placeholder="Notifications" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="on">On</SelectItem>
            <SelectItem value="off">Off</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
