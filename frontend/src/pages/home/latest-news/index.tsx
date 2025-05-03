"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import axios from "axios"
import HeadlinesSlider from "./headline-slider"

interface BlogPost {
  id: number
  title: string
  content: string
  blobImage: string
  author: string
}

export default function LatestNewsUi() {
  const [headlines, setHeadlines] = useState<BlogPost[]>([])
  const [blogs, setBlogs] = useState<BlogPost[]>([])
  const [sports, setSports] = useState<BlogPost[]>([])
  const [clubs, setClubs] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const capitalizeWords = (str: string): string =>
    str.replace(/\b\w/g, (char) => char.toUpperCase());

  const API_URL = import.meta.env.VITE_API_URL
  useEffect(() => {
    const fetchAllNews = async () => {
      try {
        setLoading(true)
        setError(null)

        const headers = {
          "Content-Type": "application/json",
        }

        // Sequentially fetch each category
        const headlinesRes = await axios.get(`${API_URL}/api/blog-management/category/9`, { headers })
        const blogsRes = await axios.get(`${API_URL}/api/blog-management/category/1`, { headers })
        const sportsRes = await axios.get(`${API_URL}/api/blog-management`, { headers })
        const clubsRes = await axios.get(`${API_URL}/api/blog-management`, { headers })


        console.log("Headlines Data:", headlinesRes.data);
        console.log("Blog Data:", blogsRes.data);
        console.log("Sports Data:", sportsRes.data);
        console.log("Clubs Data:", clubsRes.data);

        setHeadlines(
          (headlinesRes.data || []).map((item: any) => ({
            ...item,
            title: capitalizeWords(item.title || ""),
            author: capitalizeWords(item.author || ""),
            content: capitalizeWords(item.content || "")
          }))
        );

        setBlogs(
          (blogsRes.data || []).map((item: any) => ({
            ...item,
            title: capitalizeWords(item.title || ""),
            author: capitalizeWords(item.author || ""),
            content: capitalizeWords(item.content || "")
          }))
        );

        setSports(
          (sportsRes.data || []).map((item: any) => ({
            ...item,
            title: capitalizeWords(item.title || ""),
            author: capitalizeWords(item.author || ""),
            content: capitalizeWords(item.content || "")
          }))
        );

        setClubs(
          (clubsRes.data || []).map((item: any) => ({
            ...item,
            title: capitalizeWords(item.title || ""),
            author: capitalizeWords(item.author || ""),
            content: capitalizeWords(item.content || "")
          }))
        );


        console
      } catch (err) {
        console.error("Fetch error:", err)
        setError("Failed to load news. Please try again later.")
      } finally {
        setLoading(false)
      }
    }

    fetchAllNews()
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#E7EAFD] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2B366F] mx-auto"></div>
          <p className="mt-4 text-[#2B366F]">Loading news...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#E7EAFD] flex items-center justify-center">
        <div className="text-center p-4 bg-white rounded-lg shadow-md">
          <p className="text-red-500">{error}</p>
          <Button
            className="mt-4 bg-[#2B366F]"
            onClick={() => window.location.reload()}
          >
            Retry
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#E7EAFD] py-10 px-4">
      <div className="w-full mx-auto flex flex-col xl:flex-row gap-6">
        {/* Left Content */}
        <div className="w-full space-y-8">
          {/* Headlines */}
          <div>
            <h2 className="text-xl font-bold mb-3">Today's Headlines</h2>
            <HeadlinesSlider headlines={headlines} />
          </div>

          {/* Blogs */}
          <div>
            <h2 className="text-xl font-bold mb-3">Blogs</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3">
              {blogs.map((item, index) => (
                <Card key={index} className="bg-white rounded-xl shadow-md w-full ">
                  <div>
                    <img
                      src={item.blobImage || "/shawarma.svg"}
                      alt={item.title}
                      className="w-full h-[150px] object-contain p-2"
                    />
                  </div>
                  <div className="p-4 space-y-2">
                    <p className="font-medium">{item.title}</p>
                    <p className="text-sm text-gray-500">{item.author}</p>
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
          {/* Sports News */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Sports</h3>
              <span className="text-sm text-blue-600 cursor-pointer underline">see all</span>
            </div>
            {sports.slice(0, 1).map((_item, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow">
                <div className="flex flex-row justify-between">
                  <div className="justify-items-center">
                    <img className="w-12 h-12" src="/basketball-jersey-1.svg" alt="" />
                    <p className="text-center my-2 text-lg font-bold">Bluejay</p>
                  </div>
                  <div>
                    <p className="text-center my-2 text-lg font-bold">VS</p>
                    <p className="text-center my-2 text-sm font-medium">30-05-2024</p>
                    <p className="text-center my-2 text-sm font-medium">4pm</p>
                  </div>
                  <div className="justify-items-center">
                    <img className="w-12 h-12" src="/basketball-jersey-2.svg" alt="" />
                    <p className="text-center my-2 text-lg font-bold">Cirok</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Club News */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Club News</h3>
              <span className="text-sm text-blue-600 cursor-pointer underline">see all</span>
            </div>
            <div className="bg-white p-4 rounded-xl shadow space-y-4 text-sm">
              {clubs.map((news, index) => (
                <div key={index}>
                  <p className="font-bold">{news.title}</p>
                  <p>{news.content.slice(0, 150)}...</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
