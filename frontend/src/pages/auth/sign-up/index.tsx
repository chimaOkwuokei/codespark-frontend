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
import { Checkbox } from "@/components/ui/checkbox";
import Swal from "sweetalert2";
import axios from "axios";


const formSchema = z.object({
    firstName: z.string().min(2, {
        message: "Firstname must be at least 2 characters.",
    }),
    lastName: z.string().min(2, {
        message: "Lastname must be at least 2 characters.",
    }),
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    password: z.string().min(2, {
        message: "Password must be at least 2 characters.",
    }),
    condition: z.boolean().default(false).optional(),
});


export default function SignUp() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName:"",
            username: "",
            password: "",
            condition: true,
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        try {

            // Only send startDate and endDate to the API
            const apiData = {
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.username,
                password: values.password,
            };

            // Make the POST request with the token in the header
            const response = await axios.post("/api/user/register", apiData);

            console.log(response);
            Swal.fire({
                title: "User registered",
                text: "User registered successfully.",
                icon: "success",
                timer: 2000,
                showConfirmButton: false,
            });
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Operation Failed",
                text: "An error occurred while registering.",
                confirmButtonColor: "#003F88",
            });
        }
    }

    const [showPassword, setShowPassword] = useState(false);

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
                    <h2 className="text-center text-xl font-bold text-black">Sign Up</h2>
                </div>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                        {/* Firstname */}
                        <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Firstname</FormLabel>
                                    <FormControl>
                                        <Input className="rounded-2xl" placeholder="Enter firstname here" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Username */}
                        <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Lastname</FormLabel>
                                    <FormControl>
                                        <Input className="rounded-2xl" placeholder="Enter lastname here" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Username */}
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input className="rounded-2xl" placeholder="Enter username here" {...field} />
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

                        <FormField
                            control={form.control}
                            name="condition"
                            render={({ field }) => (
                                <FormItem className="flex flex-row items-start space-x-0">
                                    <FormControl>
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                    <div className="leading-none">
                                        <FormLabel className="text-xs">
                                            Remember email and password
                                        </FormLabel>

                                    </div>
                                </FormItem>
                            )}
                        />

                        <Button className="bg-[#2B366F] w-full" type="submit">
                            Create Account
                        </Button>

                        <div className="text-xs text-center text-gray-500">
                            By creating an account you agree to PAU Pulse's <a href="#" className="hover:underline text-[#2B366F]">Terms Of Service</a> and <a href="#" className="hover:underline text-[#2B366F]">Privacy Policy</a>
                        </div>
                    </form>
                </Form>

                <div className="pt-15 text-xs text-center text-gray-500">
                    Have an account? <a href="/login" className="hover:underline text-[#2B366F]">Log in</a>
                </div>
            </div>

            {/* Right Filler */}
            <div className="hidden md:flex flex-1" />
        </div>
    );
}