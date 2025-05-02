"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CalendarIcon, Pencil } from "lucide-react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  text: z.string().min(1, "Text is required"),
  category: z.string().min(1, "Category is required"),
});

export default function CreateNewsUi() {
  const form = useForm<z.infer<typeof formSchema>>({
          resolver: zodResolver(formSchema),
          defaultValues: {
              title: "",
              text: "",
              category: "",
          },
      });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form Values:", values);
  }

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
              name="text"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormControl>
                    <Textarea
                      placeholder="Text"
                      {...field}
                      className="h-36 rounded-xl pr-10 placeholder:text-[#2B366F]"
                    />
                  </FormControl>
                  <Pencil className="absolute right-3 top-3 h-5 w-5 text-[#2B366F]" />
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Category Dropdown */}
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger className="rounded-xl text-[#2B366F]">
                        <SelectValue placeholder="*Category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="News">News</SelectItem>
                        <SelectItem value="Events">Events</SelectItem>
                        <SelectItem value="Sports">Sports</SelectItem>
                        <SelectItem value="Clubs">Clubs</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Schedule and Publish */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-[#2B366F] font-medium text-sm">Schedule Post:</span>
                <div className="flex items-center rounded-md border border-input bg-background px-3 py-1 text-sm text-muted-foreground">
                  <CalendarIcon className="mr-2 h-4 w-4 opacity-50" />--/--/--
                </div>
              </div>
              <Button type="submit" className="bg-[#2B366F] hover:bg-[#424c75] text-white">
                Publish
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
