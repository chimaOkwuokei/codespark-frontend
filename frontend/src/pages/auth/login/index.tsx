"use client"

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "Password must be at least 2 characters.",
  }),
});

export default function Login() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="flex flex-col md:flex-row h-screen w-full bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: 'url(/background-image.svg)' }}
    >
      {/* Left Panel */}
      <div className="w-full md:max-w-md bg-white p-8 md:p-10 m-0 md:m-18 shadow-lg flex flex-col rounded-none md:rounded-3xl z-10">
        <div className="mb-6">
          {/* Logo */}
          <div className="flex justify-center gap-2 mb-4">
            <img src="/logo.png" alt="PULSE Logo" className="w-100% h-25" />
          </div>
          <h2 className="text-center text-xl font-bold text-black">Login</h2>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            {/* Username */}
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input className="rounded-2xl" placeholder="Enter email address here" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        {...field}
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter password here"
                        className="rounded-2xl pr-10"
                      />
                      {showPassword ? (
                        <EyeOff
                          className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 cursor-pointer"
                          onClick={() => setShowPassword(false)}
                        />
                      ) : (
                        <Eye
                          className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 cursor-pointer"
                          onClick={() => setShowPassword(true)}
                        />
                      )}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="text-xs text-left text-gray-500">
              <a href="#" className="hover:underline">
                Forgot Password?
              </a>
            </div>

            <Button className="bg-[#2B366F] w-full" type="submit">
              Log In
            </Button>
          </form>
        </Form>
      </div>

      {/* Right Filler */}
      <div className="hidden md:flex flex-1" />
    </div>
  );
}