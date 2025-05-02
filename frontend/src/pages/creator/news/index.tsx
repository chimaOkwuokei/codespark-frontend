"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Pencil } from "lucide-react";
// import { cn } from "@/lib/utils";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  //   FormLabel,
  FormMessage,
} from "@/components/ui/form";
import cameraIcon from "@/assets/camera.svg";
import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Content is required"),
  image: z
    .any()
    .refine((file) => file instanceof File || (file && file.name), "Image is required"),

});

export default function CreateNewsUi() {
  const [image, setImage] = useState<{ preview: string; file: File } | null>(null);

  const imagehandleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setCard: React.Dispatch<React.SetStateAction<{ preview: string; file: File } | null>>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const preview = URL.createObjectURL(file);
      setCard({ preview, file });
      form.setValue("image", file); // blob goes into form
    }
  };
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const [loading, setLoading] = useState(false);

  // api url
  const API_URL = import.meta.env.VITE_API_URL;

  async function onSubmit(data: z.infer<typeof formSchema>) {
    setLoading(true);
    console.log("Submitted Data:", data);
    try {
      // // Only send startDate and endDate to the API
      const apidata = {
        title: data.title,
        content: data.content,
        image: data.image,
      };

      const token = localStorage.getItem("accessToken"); // or whatever key you used

      // Make the POST request with the token in the header
      const response = await axios.post(
        `${API_URL}/api/blog-management`,
        apidata,
        {
          headers: {
            // Token currently returns bearer
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response);
      Swal.fire({
        title: "News sent",
        text: "News sent successfully.",
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
      });
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message || "An unexpected error occurred.";
      Swal.fire({
        icon: "error",
        title: "Operation Failed",
        text: errorMessage,
        confirmButtonColor: "#003F88",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDone = () => {
    form.handleSubmit(onSubmit);
  };

  return (
    <div className="min-h-screen w-full bg-[#E7EAF8] px-4 py-10">
      <div className="w-full rounded-2xl bg-white/60 p-6 shadow-xl backdrop-blur">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            {/* Title */}
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormControl>
                    <Input
                      placeholder="Title"
                      {...field}
                      className="rounded-xl pr-10 text-lg font-semibold text-[#2B366F] placeholder:text-[#2B366F]"
                    />
                  </FormControl>
                  <Pencil className="absolute right-3 top-3 h-5 w-5 text-[#2B366F]" />
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Text */}
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormControl>
                    <Textarea
                      placeholder="Content"
                      {...field}
                      className="h-36 rounded-xl pr-10 placeholder:text-[#2B366F]"
                    />
                  </FormControl>
                  <Pencil className="absolute right-3 top-3 h-5 w-5 text-[#2B366F]" />
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* image upload */}
            <div className="space-y-6">
              {/* Instruction */}
              <p className="text-sm text-gray-600 mb-8">
                Images need to be at least 500 x 500 pixels and a maximum of 1200 x 1200 pixels.
              </p>
              <div>
                <p className="text-sm font-semibold mb-2">Image of News</p>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(event) => imagehandleFileChange(event, setImage)}
                  className="hidden"
                  id="image-upload"
                />
                <label htmlFor="image-upload" className="border border-gray-300 rounded-md w-full h-40 flex flex-col items-center justify-center bg-gray-100 cursor-pointer">
                  {image ? (
                    <img src={image.preview} alt="product image" className="w-full h-full object-cover rounded-md" />
                  ) : (
                    <>
                      <img src={cameraIcon} alt="Camera Icon" className="w-8 h-8" />
                      <p className="text-sm text-gray-500 mt-2">Click to start</p>
                    </>
                  )}
                </label>
              </div>
            </div>

            {/* Schedule and Publish */}
            <div className="flex items-center justify-between">
              <Button onClick={handleDone} loading={loading} className="bg-[#2B366F] hover:bg-[#424c75] text-white">
                Publish
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
