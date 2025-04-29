"use client"

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Swal from "sweetalert2";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const formSchema = z.object({
  email: z.string().min(2, {
    message: "Email must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "Password must be at least 2 characters.",
  }),
});

export default function Login() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // api url
  const API_URL = import.meta.env.VITE_API_URL;


  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    try {
      const response = await axios.post(`${API_URL}/api/auth/login`, values);

      console.log(response);
      // the API response contains an access token
      const { accessToken } = response.data;

      // Save the token in localStorage
      localStorage.setItem("accessToken", accessToken);

      // Decode the token to get user details
      const decodedToken = jwtDecode(accessToken) as {
        id: string;
        email: string;
        firstName?: string;
        lastName?: string;
      };

      // Extract the user details
      const { id, email, firstName, lastName } = decodedToken;

      console.log("Decoded Token:", { id, email, firstName, lastName });

      localStorage.setItem("email", email); 
      navigate("/user/latest-news");
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message || "An unexpected error occurred.";

      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: errorMessage,
        confirmButtonColor: "#003F88",
      });
    }
  }

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col md:flex-row h-screen w-full bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: 'url(/background-image.svg)' }}
    >
      {/* Left Panel */}
      <div className="w-full md:max-w-md bg-white p-8 md:p-10 m-0 md:m-5 shadow-lg flex flex-col rounded-none md:rounded-3xl z-10">
        <div>
          {/* Logo */}
          <div className="flex justify-center gap-2">
            <img src="/logo.png" alt="PULSE Logo" className="w-100% h-25" />
          </div>
          <h2 className="text-center text-xl font-bold text-black">Login</h2>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            {/* email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
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